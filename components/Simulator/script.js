function enterUSN() {
  if (usn.value.trim() !== "") {
    usnBox.classList.add("hidden");
    subjectsBox.classList.remove("hidden");
  }
}

function openPredict(subject) {
  subjectsBox.classList.add("hidden");
  predictBox.classList.remove("hidden");
  subjectName.innerText = subject;
  calculate();
}

function calculate() {
  let a = attendance.value;
  let c = cie.value;

  let status = "SAFE";
  let cls = "safe";
  let msg = "You are on track.";

  if (a < 70 || c < 20) {
    status = "AT RISK";
    cls = "risk";
    msg = "Immediate action required.";
  } 
  else if (a < 75 || c < 30) {
    status = "DANGER";
    cls = "danger";
    msg = "You are close to the cutoff.";
  }

  output.innerHTML = `
    <div class="${cls}">
      <b>${status}</b><br>
      Attendance: ${a}% | CIE: ${c}<br>
      ${msg}
    </div>
  `;
}
function backToSubjects() {
  predictBox.classList.add("hidden");
  subjectsBox.classList.remove("hidden");
}

function backToUSN() {
  subjectsBox.classList.add("hidden");
  usnBox.classList.remove("hidden");
}
