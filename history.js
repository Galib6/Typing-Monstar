const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, letterPerMin) {
  console.log(letterPerMin)

  const newRow = document.createElement("div");
  newRow.classList.add("card1");

  newRow.innerHTML = `
  <div class="col">
      <div class="card bg-transparent">
        <div class="card-body">
            <h4>${questionText}</h4>
            <p>You took: <span class="bold mb-0">${timeTaken}</span> seconds</p>
            <p>You made <span class="bold red mb-0">${errorCount}</span> mistakes</p>
            <p>Your Typing Speed:<span class="bold red mb-0"> ${letterPerMin}</span> Letter Per Min</p>
        </div>
      </div>
    </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount, letterPerMin });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card1");

    newRow.innerHTML = `
    <div class="col">
      <div class="card  bg-transparent">
        <div class="card-body">
              <h4>${test.questionText}</h4>
              <p>You took: <span class="bold mb-0">${test.timeTaken}</span> seconds</p>
              <p>You made <span class="bold red mb-0">${test.errorCount}</span> mistakes</p>
              <p>Your Typing Speed:<span class="bold red mb-0"> ${test.letterPerMin}</span> Letter Per Min</p>
        </div>
      </div>
    </div>
  `;

    histories.appendChild(newRow);
  });
}
