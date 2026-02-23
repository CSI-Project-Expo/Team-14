// RiskMeter.jsx
export default function RiskMeter({ attendance }) {
  let risk = "SAFE";

  if (attendance < 75) {
    risk = "DANGER";
  }

  return (
    <div>
      <h3>Risk Level</h3>
      <p>{risk}</p>
    </div>
  );
}