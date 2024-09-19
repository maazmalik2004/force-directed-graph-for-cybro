import React, { useState, useEffect } from 'react';
import './sidepanel.css';
import { useNode } from '../force-directed-graph/GraphStateContext';
import graphData from '../force-directed-graph/GraphData';
import rickrollimg from './rickroll.jpg'; // Import the image

function SidePanel() {
  const { selectedNode } = useNode();
  const [currentNodeData, setCurrentNodeData] = useState(null);

  useEffect(() => {
    if (selectedNode) {
      setCurrentNodeData(getNodeDetails(graphData, selectedNode));
    } else {
      setCurrentNodeData(null);
    }
  }, [selectedNode]);

  function getNodeDetails(graphData, nodeId) {
    return graphData.nodes.find(node => node.id === nodeId) || null;
  }

  return (
    <div className="sidepanel">
      {currentNodeData ? (
        <>
          <div className="panel-item">
            <b>Name: </b> {currentNodeData.name}
          </div>
          <div className="panel-item">
            <b>Aliases: </b> {currentNodeData.aliases.length > 0 ? currentNodeData.aliases.join(', ') : 'N/A'}
          </div>
          <div className="panel-item">
            <b>IP Address: </b> {currentNodeData.ipAddress}
          </div>
          <div className="panel-item">
            <b>Location: </b> {currentNodeData.location}
          </div>
          <div className="panel-item">
            <img src={rickrollimg} alt="Node" className="node-image" />
          </div>
          <div className="panel-item">
            <b>Social Media Links: </b>
            {currentNodeData.socialMediaLinks.length > 0 ? (
              <ul>
                {currentNodeData.socialMediaLinks.map((link, index) => (
                  <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                ))}
              </ul>
            ) : (
              'N/A'
            )}
          </div>
          <div className="panel-item">
            <b>Miscellaneous Links: </b>
            {currentNodeData.miscLinks.length > 0 ? (
              <ul>
                {currentNodeData.miscLinks.map((link, index) => (
                  <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                ))}
              </ul>
            ) : (
              'N/A'
            )}
          </div>
        </>
      ) : (
        <div className="panel-item">No node selected</div>
      )}
    </div>
  );
}

export default SidePanel;
