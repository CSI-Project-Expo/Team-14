export default function Prototype() {
  let attendance = 72;

  let risk = "SAFE";
  if (attendance < 75) risk = "DANGER";
  if (attendance < 70) risk = "POINT OF NO RETURN";

  return (
    <div>
      <h2>Academic Consequence Engine</h2>

      <p><b>Subject:</b> Data Structures</p>
      <p><b>Attendance:</b> {attendance}%</p>

      <h3>Risk Status: {risk}</h3>

      {attendance < 70 && (
        <p style={{ color: "red" }}>
          You cannot recover attendance now.
        </p>
      )}

      <h3>Damage Control</h3>
      <ul>
        <li>Attend all remaining classes</li>
        <li>Score above 80% in finals</li>
        <li>Focus on high-credit subjects</li>
      </ul>
    </div>
  );
}
