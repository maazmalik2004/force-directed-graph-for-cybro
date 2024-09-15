import React, { useState } from 'react';
import { useNode } from './force-directed-graph/GraphStateContext';
import './update-node-input.css'; // Import the CSS file

function UpdateNodeInput() {
    const { selectedNode, setSelectedNode, searchResponseMessage } = useNode();
    const [inputValue, setInputValue] = useState(selectedNode || '');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleUpdate = () => {
        setSelectedNode(inputValue);
    };

    return (
        <div className="update-node-container">
            <p>{searchResponseMessage}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter node ID"
            />
            <button onClick={handleUpdate}>Update Node</button>
            <p>Selected Node: {selectedNode}</p>
        </div>
    );
}

export default UpdateNodeInput;
