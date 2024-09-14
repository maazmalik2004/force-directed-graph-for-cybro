import React, { useState } from 'react';
import { useNode } from './force-directed-graph/GraphStateContext';

function UpdateNodeInput() {
    const { selectedNode, setSelectedNode, searchResponseMessage} = useNode();
    const [inputValue, setInputValue] = useState(selectedNode || '');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleUpdate = () => {
        setSelectedNode(inputValue);
    };

    return (
        <div style={{backgroundColor:"#1D4ED8", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px", height:"15vh",minHeight:"15vh"}}>
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
