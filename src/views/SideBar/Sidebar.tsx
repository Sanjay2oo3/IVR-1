import React from 'react'

export default function Sidebar() {

    const OnDragStart = (event,nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
    }
  return (
      <div>
          <div className='' onDragStart={(event) => {
              OnDragStart(event, "StartNode");
          }} draggable>
              <img src='/nodeimages/start.png' height={100} width={100}/>
          </div>
    </div>
  )
}
