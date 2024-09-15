const graphData = {
    nodes: [
        { id: '001', label: 'Alice', score: Math.random() },
        { id: '002', label: 'Bob', score: Math.random() },
        { id: '003', label: 'Charlie', score: Math.random() },
        { id: '004', label: 'Diana', score: Math.random() },
        { id: '005', label: 'Eve', score: Math.random() },
        { id: '006', label: 'Frank', score: Math.random() },
        { id: '007', label: 'Grace', score: Math.random() },
        { id: '008', label: 'Hank', score: Math.random() },
        { id: '009', label: 'Ivy', score: Math.random() },
        { id: '010', label: 'Jack', score: Math.random() },
        { id: '011', label: 'Karen', score: Math.random() },
        { id: '012', label: 'Louis', score: Math.random() },
        { id: '013', label: 'Mia', score: Math.random() },
        { id: '014', label: 'Nina', score: Math.random() },
        { id: '015', label: 'Oscar', score: Math.random() },
        { id: '016', label: 'Paul', score: Math.random() },
        { id: '017', label: 'Quinn', score: Math.random() },
        { id: '018', label: 'Rita', score: Math.random() },
        { id: '019', label: 'Sam', score: Math.random() },
        { id: '020', label: 'Tina', score: Math.random() }
    ],
    links: [
        { source: '001', target: '002', score: Math.random() },
        { source: '001', target: '003', score: Math.random() },
        { source: '002', target: '004', score: Math.random() },
        { source: '002', target: '005', score: Math.random() },
        { source: '003', target: '006', score: Math.random() },
        { source: '004', target: '007', score: Math.random() },
        { source: '005', target: '008', score: Math.random() },
        { source: '006', target: '009', score: Math.random() },
        { source: '007', target: '010', score: Math.random() },
        { source: '008', target: '011', score: Math.random() },
        { source: '009', target: '012', score: Math.random() },
        { source: '010', target: '013', score: Math.random() },
        { source: '011', target: '014', score: Math.random() },
        { source: '012', target: '015', score: Math.random() },
        { source: '013', target: '016', score: Math.random() },
        { source: '014', target: '017', score: Math.random() },
        { source: '015', target: '018', score: Math.random() },
        { source: '016', target: '019', score: Math.random() },
        { source: '017', target: '020', score: Math.random() },
        { source: '018', target: '001', score: Math.random() },
        { source: '019', target: '002', score: Math.random() }
    ]
};

export default graphData;
