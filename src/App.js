import React from 'react';
import './App.css';
import ForceDirectedGraph from './force-directed-graph/ForceDirectedGraph';
import graphData from './force-directed-graph/GraphData';
import config from './force-directed-graph/ForceDirectedGraphConfig';
import { GraphStateProvider } from './force-directed-graph/GraphStateContext';
//import generateGraphData from './GenerateGraphData';
//const graphData = generateGraphData();
import UpdateNodeInput from './UpdateNodeInput';


function App() {
  return (
    <GraphStateProvider>
      <div className="App" style={{backgroundColor:"#212121"}}>
        <UpdateNodeInput/>
        <ForceDirectedGraph data={graphData} config={config}/>
      </div>
    </GraphStateProvider>
  );
}

export default App;