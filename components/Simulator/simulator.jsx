// Simulator.jsx
export default function Simulator() {
  return (
    <div>
      <h2>Decision Simulator</h2>

      <label>Classes Skipped</label>
      <input type="range" min="0" max="10" />
      
      <p>Impact will be calculated here</p>

      <button>Simulate</button>
    </div>
  );
}