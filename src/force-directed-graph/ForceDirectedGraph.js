// ForceDirectedGraph.js
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { zoom } from 'd3-zoom';
import { useNode } from './GraphStateContext';
import Tooltip from './Tooltip';

const defaultConfig = {
    node: {
        radius: 30,
        enlargedRadius: 50,
        labelOffsetX: 25,
        labelOffsetY: 25,
        labelFontSize: "15px",
        labelFontColor: "#FCFCFC"
    },
    link: {
        defaultStrokeWidth: 1,
        strokeColor: "#999",
        thicknessScaleFactor: 10,
        dashedThreshold: 0.3,
        dashArray: "5,5",
        linkDistance: 200
    },
    zoom: {
        scaleExtent: [0.1, 10],
        zoomFactor: 1.2,
        translation: 100
    },
    drag: {
        alphaTarget: 0.3
    },
    force: {
        chargeStrength: -1000
    },
    backgroundColor: "#212121"
};

function ForceDirectedGraph({ data, config = defaultConfig }) {
    const svgRef = useRef();
    const zoomBehavior = useRef();
    const nodeSelectionRef = useRef();
    const [tooltip, setTooltip] = useState({ x: 0, y: 0, content: '' });

    const widthRef = useRef(window.innerWidth);
    const heightRef = useRef(window.innerHeight);

    const { selectedNode, setSelectedNode, setSearchResponseMessage } = useNode();

    const centerNode = useCallback((nodeId) => {
        const node = data.nodes.find(n => n.id === nodeId);
        if (!node) {
            setSearchResponseMessage("node not found");
            d3.select(svgRef.current).transition()
                .duration(750)
                .call(zoomBehavior.current.transform, d3.zoomIdentity);
            return;
        } else {
            setSearchResponseMessage("node found");
        }

        const { x, y } = node;
        const svgElement = svgRef.current;
        const width = svgElement.clientWidth;
        const height = svgElement.clientHeight;

        const zoomScaleFactor = 2;
        const tx_new = width / 2 - (x * zoomScaleFactor);
        const ty_new = height / 2 - (y * zoomScaleFactor);

        d3.select(svgRef.current).transition()
            .duration(750)
            .call(zoomBehavior.current.transform, 
                  d3.zoomIdentity.translate(tx_new, ty_new).scale(zoomScaleFactor));

        nodeSelectionRef.current
            .transition()
            .duration(750)
            .attr("r", d => d.id === nodeId ? config.node.enlargedRadius : config.node.radius);
    }, [data.nodes, config.node.radius, config.node.enlargedRadius, setSearchResponseMessage]);

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            widthRef.current = width;
            heightRef.current = height;

            const svg = d3.select(svgRef.current)
                .attr("width", width)
                .attr("height", height)
                .style("background-color", config.backgroundColor);

            svg.selectAll("*").remove();

            const g = svg.append("g");

            zoomBehavior.current = zoom()
                .scaleExtent(config.zoom.scaleExtent)
                .on("zoom", event => {
                    g.attr("transform", event.transform);
                });

            svg.call(zoomBehavior.current);

            const handleKeyDown = event => {
                const { key } = event;
                if (key === '+') {
                    svg.transition().call(zoomBehavior.current.scaleBy, config.zoom.zoomFactor);
                } else if (key === '-') {
                    svg.transition().call(zoomBehavior.current.scaleBy, 1 / config.zoom.zoomFactor);
                } else if (key === 'ArrowUp') {
                    svg.transition().call(zoomBehavior.current.translateBy, 0, config.zoom.translation);
                } else if (key === 'ArrowDown') {
                    svg.transition().call(zoomBehavior.current.translateBy, 0, -config.zoom.translation);
                } else if (key === 'ArrowLeft') {
                    svg.transition().call(zoomBehavior.current.translateBy, config.zoom.translation, 0);
                } else if (key === 'ArrowRight') {
                    svg.transition().call(zoomBehavior.current.translateBy, -config.zoom.translation, 0);
                } else if (key === ' ') {
                    svg.transition()
                        .duration(750)
                        .call(zoomBehavior.current.transform, d3.zoomIdentity);
                }
            };

            d3.select(window).on('keydown', handleKeyDown);

            const colorScale = d3.scaleLinear()
                .domain(d3.extent(data.nodes, d => d.score))
                .range(["green", "red"]);

            const simulation = d3.forceSimulation(data.nodes)
                .force("link", d3.forceLink(data.links)
                    .id(d => d.id)
                    .distance(config.link.linkDistance))
                .force("charge", d3.forceManyBody().strength(config.force.chargeStrength))
                .force("center", d3.forceCenter(width / 2, height / 2));

            const link = g.append("g")
                .attr("class", "links")
                .selectAll("line")
                .data(data.links)
                .enter().append("line")
                .attr("stroke-width", d => d.score ? Math.max(d.score * config.link.thicknessScaleFactor, config.link.defaultStrokeWidth) : config.link.defaultStrokeWidth)
                .attr("stroke", config.link.strokeColor)
                .attr("stroke-dasharray", d => d.score < config.link.dashedThreshold ? config.link.dashArray : "none");

            const nodeGroup = g.append("g").attr("class", "nodes");

            const nodeSelection = nodeGroup.selectAll("circle")
                .data(data.nodes)
                .enter().append("circle")
                .attr("r", config.node.radius)
                .attr("fill", d => colorScale(d.score))
                .on("mouseover", (event, d) => {
                    setTooltip({ x: event.pageX, y: event.pageY, content: `Node ID: ${d.id}` });
                })
                .on("mousemove", (event) => {
                    setTooltip(prev => ({ ...prev, x: event.pageX, y: event.pageY }));
                })
                .on("mouseout", () => {
                    setTooltip({ x: 0, y: 0, content: '' });
                })
                .on("click", (event, d) => {
                    setSelectedNode(d.id); // Setting node ID, not the whole node object
                    centerNode(d.id);
                })
                .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended));

            nodeGroup.selectAll("text")
                .data(data.nodes)
                .enter().append("text")
                .attr("x", d => d.x + config.node.labelOffsetX)
                .attr("y", d => d.y + config.node.labelOffsetY)
                .attr("font-size", config.node.labelFontSize)
                .attr("fill", config.node.labelFontColor)
                .text(d => `${d.id}: ${d.label}`);

            nodeSelectionRef.current = nodeSelection;

            simulation.on("tick", () => {
                link
                    .attr("x1", d => d.source.x)
                    .attr("y1", d => d.source.y)
                    .attr("x2", d => d.target.x)
                    .attr("y2", d => d.target.y);

                nodeSelection
                    .attr("cx", d => d.x)
                    .attr("cy", d => d.y);

                svg.selectAll("text")
                    .attr("x", d => d.x + config.node.labelOffsetX)
                    .attr("y", d => d.y + config.node.labelOffsetY);
            });

            function dragstarted(event, d) {
                if (!event.active) simulation.alphaTarget(config.drag.alphaTarget).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            function dragended(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            d3.select(window).on('keydown', null);
            window.removeEventListener('resize', updateDimensions);
        };
    }, [data, config, centerNode, setSelectedNode]);

    useEffect(() => {
        if (selectedNode != null) {
            centerNode(selectedNode);
        }
    }, [selectedNode, centerNode]);

    return (
        <>
            <svg ref={svgRef} />
            <Tooltip x={tooltip.x} y={tooltip.y} content={tooltip.content} />
        </>
    );
}

export default ForceDirectedGraph;
