# Youtube/Force Directed Graph Demonstration | React, D3
[![Force Directed Graph Demonstration | React, D3](https://img.youtube.com/vi/v5i9IsZTan8/0.jpg)](https://www.youtube.com/watch?v=v5i9IsZTan8)

![image](https://github.com/user-attachments/assets/6b5395b3-0b2c-4d71-8c48-ad81eeca87b0)

# Force-Directed Graph Visualization

This project is a **Force-Directed Graph** built with **React** and **D3.js**. It allows users to visualize graph data with interactive features like zooming, panning, node dragging, and dynamic coloring based on node scores.

## Features

- **Zoom and Pan**: Users can zoom in/out and pan around the graph using the mouse or keyboard.
- **Node Dragging**: Nodes can be dragged across the canvas.
- **Node Centering and Zoom**: Clicking on a node centers it on the screen and zooms in for a closer look.
- **Dynamic Node Colors**: Nodes are color-scaled based on their score (from green to red).
- **Configurable Layout**: The graph layout and interaction behavior are configurable via a settings object.

## Project Structure

The project is structured with the following key components:

- `App.js`: The main entry point for the application.
- `ForceDirectedGraph.js`: The core component that renders the graph using D3.js.
- `GraphData.js`: Provides the graph's node and link data.
- `ForceDirectedGraphConfig.js`: Holds configuration settings for nodes, links, zooming, and forces.
- `GraphStateContext.js`: Manages shared state for node selection and searching.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/force-directed-graph.git
   cd force-directed-graph
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   This will launch the app at `http://localhost:3000`.

## Usage

The graph is displayed in a full-screen view. You can:

- **Zoom**: Use the scroll wheel or keyboard (`+` and `-` keys) to zoom in and out.
- **Pan**: Drag the graph using the mouse or use the arrow keys to move it.
- **Node Dragging**: Click and drag nodes to reposition them.
- **Center and Zoom on Node**: Click a node to center it on the screen and zoom in.

### Node Search Example

To center the graph on a specific node programmatically, use the following:

```javascript
// Example: Center the graph on node with ID 'node1'
centerNode('node1');
```

## Configuration

The graph behavior and layout can be customized via the `ForceDirectedGraphConfig.js` file:

```javascript
const config = {
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
```

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **D3.js**: A library for creating dynamic and interactive data visualizations in the web browser.
- **D3-zoom**: A D3 module that enables zooming and panning interactions.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
