function generateGraphData() {
    const nodeIds = [
        '123456', '789012', '345678', '901234', '567890', 
        '234567', '890123', '456789', '012345', '678901', 
        '234678', '890234', '456789', '012456', '678902', 
        '234679', '890235', '456780', '012457', '678903'
    ];

    const shuffledNodeIds = nodeIds.sort(() => 0.5 - Math.random());

    const nodes = shuffledNodeIds.map((id, index) => ({
        id,
        label: `Node ${index + 1}`,
        score: Math.random()
    }));

    const links = nodes.flatMap((node, index) => {
        return nodes
            .filter(targetNode => targetNode.id !== node.id)
            .map(targetNode => ({
                source: node.id,
                target: targetNode.id,
                score: Math.random()
            }));
    }).slice(0, 20); // Limit to 20 links to avoid overly dense graphs

    return { nodes, links };
}

export default generateGraphData;
