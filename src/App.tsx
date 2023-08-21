import { useState, type MouseEvent } from "react";
import "./App.css";

interface Dot {
  x: number;
  y: number;
}
function App() {
  const [dot, setDot] = useState<Dot[]>([]);
  const [cachedDots, setCachedDots] = useState<Dot[]>([]);

  const handleDotMaker = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    setDot((prev) => [...prev, { x: clientX, y: clientY }]);
  };
  const handleUndoDots = () => {
    if (dot.length > 0) {
      const shallowDots = [...dot];
      const lastDot = shallowDots.splice(-1);
      setCachedDots((prev) => [...prev, ...lastDot]);
      setDot(shallowDots);
    }
  };
  console.log(cachedDots);
  const handleRedoDots = () => {
    if (cachedDots.length > 0) {
      const shallowCached = [...cachedDots];
      const lastDot = shallowCached.splice(-1);
      setDot((prev) => [...prev, ...lastDot]);
      setCachedDots(shallowCached);
    }
  };
  console.count("Render");
  return (
    <div className="markerContainer">
      <div className="btnContainer">
        <button onClick={handleUndoDots}>Undo</button>
        <button onClick={handleRedoDots}>Redo</button>
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
