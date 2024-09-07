const graphData = {
    nodes: [
        { id: '123456', label: 'Alice', score: Math.random() },
        { id: '789012', label: 'Bob', score: Math.random() },
        { id: '345678', label: 'Charlie', score: Math.random() },
        { id: '901234', label: 'Diana', score: Math.random() },
        { id: '567890', label: 'Eve', score: Math.random() },
        { id: '234567', label: 'Frank', score: Math.random() },
        { id: '890123', label: 'Grace', score: Math.random() },
        { id: '456789', label: 'Hank', score: Math.random() },
        { id: '012345', label: 'Ivy', score: Math.random() },
        { id: '678901', label: 'Jack', score: Math.random() },
        { id: '234678', label: 'Karen', score: Math.random() },
        { id: '890234', label: 'Louis', score: Math.random() },
        { id: '456789', label: 'Mia', score: Math.random() },
        { id: '012456', label: 'Nina', score: Math.random() },
        { id: '678902', label: 'Oscar', score: Math.random() },
        { id: '234679', label: 'Paul', score: Math.random() },
        { id: '890235', label: 'Quinn', score: Math.random() },
        { id: '456780', label: 'Rita', score: Math.random() },
        { id: '012457', label: 'Sam', score: Math.random() },
        { id: '678903', label: 'Tina', score: Math.random()}
    ],
    links: [
        { source: '123456', target: '789012', score: Math.random() },
        { source: '123456', target: '345678', score: Math.random() },
        { source: '789012', target: '901234', score: Math.random() },
        { source: '789012', target: '567890', score: Math.random() },
        { source: '345678', target: '234567', score: Math.random() },
        { source: '901234', target: '890123', score: Math.random() },
        { source: '567890', target: '456789', score: Math.random() },
        { source: '234567', target: '012345', score: Math.random() },
        { source: '890123', target: '678901', score: Math.random() },
        { source: '456789', target: '234678', score: Math.random() },
        { source: '012345', target: '890234', score: Math.random() },
        { source: '678901', target: '456789', score: Math.random() },
        { source: '345678', target: '890235', score: Math.random() },
        { source: '901234', target: '678902', score: Math.random() },
        { source: '567890', target: '234679', score: Math.random() },
        { source: '234567', target: '890235', score: Math.random() },
        { source: '890123', target: '123456', score: Math.random() },
        { source: '456789', target: '567890', score: Math.random() },
        { source: '012345', target: '678903', score: Math.random() },
        { source: '678901', target: '789012', score: Math.random() }
    ]
};

export default graphData;
