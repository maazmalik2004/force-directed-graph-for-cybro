// Tooltip.js
import React from 'react';

const tooltipStyle = {
    position: 'absolute',
    backgroundColor: 'white',
    color: 'turquoise',
    padding: '8px',
    borderRadius: '4px',
    pointerEvents: 'none',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    zIndex: 10,
    transform: 'translate(-50%, -100%)',
    opacity: 0,
    transition: 'opacity 0.2s'
};

const Tooltip = ({ x, y, content }) => {
    if (!content) return null;

    return (
        <div
            style={{
                ...tooltipStyle,
                left: x,
                top: y,
                opacity: content ? 1 : 0
            }}
        >
            {content}
        </div>
    );
};

export default Tooltip;
