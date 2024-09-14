import React, { createContext, useContext, useState } from 'react';

// Create context
const GraphStateContext = createContext();

// Provider component
export function GraphStateProvider({ children }) {
    const [selectedNode, setSelectedNode] = useState(null);
    const [searchResponseMessage, setSearchResponseMessage] = useState("search node");

    return (
        <GraphStateContext.Provider value={{ selectedNode, setSelectedNode, searchResponseMessage, setSearchResponseMessage }}>
            {children}
        </GraphStateContext.Provider>
    );
}

// Custom hook to use context
export function useNode() {
    const context = useContext(GraphStateContext);
    if (!context) {
        throw new Error('useNode must be used within a GraphStateProvider');
    }
    return context;
}