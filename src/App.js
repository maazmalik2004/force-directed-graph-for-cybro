import React from 'react';
import './App.css';
import ForceDirectedGraph from './ForceDirectedGraph';
import graphData from './GraphData';
import config from './ForceDirectedGraphConfig';
import { GraphStateProvider } from './GraphStateContext';
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