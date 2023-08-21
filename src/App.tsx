import { useState, type MouseEvent } from "react";
import "./App.css";

interface Dot {
  x: number;
  y: number;
}
function App() {
  const [dot, setDot] = useState<Dot[]>([]);

  const handleDotMaker = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setDot((prev) => [...prev, { x: clientX, y: clientY }]);
  };
  console.log(dot)
  return (
    <div className="markerContainer">
      <div className="btnContainer">
        <button>Undo</button>
        <button>Redo</button>
      </div>
      <div className="dotMarkerContainer" onClick={handleDotMaker}>
        {dot.map((points, i) => (
          <div
            key={`point-${i}`}
            style={{ left: points.x, top: points.y }}
            className="dots"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
