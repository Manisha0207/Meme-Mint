import React, { useState, useRef } from "react";

function Text({ defaultText}) {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState(defaultText || "Double click to edit");
  const [position, setPosition] = useState({ x: 50, y: 300 });
  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    draggingRef.current = true;
    const rect = containerRef.current.getBoundingClientRect();
    offsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    if (!draggingRef.current) return;
    setPosition({
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    });
  };

  const onMouseUp = () => {
    draggingRef.current = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "move",
        userSelect: "none",
      }}
    >
      {editMode ? (
        <input
          onDoubleClick={() => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          autoFocus
        />
      ) : (
        <h3 onDoubleClick={() => setEditMode(true)}>{val}</h3>
      )}
    </div>
  );
}

export default Text;
