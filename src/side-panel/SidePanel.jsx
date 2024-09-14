import React from 'react';
import './sidepanel.css';
import rickrollimg from './rickroll.jpg'

function SidePanel() {
  return (
    <div className="sidepanel">
      <div className="panel-item"></div>
      <div className="panel-item"><img src={rickrollimg} alt="rickroll img"/></div>
      <div className="panel-item">Item 3</div>
      <div className="panel-item">Item 1</div>
      <div className="panel-item">Item 2</div>
      <div className="panel-item">Item 3</div>
      <div className="panel-item">Item 3</div>
      <div className="panel-item">Item 1</div>
      <div className="panel-item">Item 2</div>
      <div className="panel-item">Item 3</div>
      <div className="panel-item">Item 1</div>
      <div className="panel-item">Item 2</div>
      <div className="panel-item">Item 3</div>
    </div>
  );
}

export default SidePanel;
