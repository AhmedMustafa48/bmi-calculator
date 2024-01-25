const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const status = document.querySelector("#status");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>BMI IS: ${bmi}</span>`;

    if (bmi < 18.6) {
      status.innerHTML = `<h2>You are under weight</h2>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      status.innerHTML = `<h2>You are Normal weight</h2>`;
    } else {
      status.innerHTML = `<h2>You are OverWeight</h2>`;
    }
  }
});
