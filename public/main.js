
// TEAM 1 functions
const scoreForTeamOne = () => {
  // query the DOM for current value
  let teamOneScored = document.querySelector('.teamOneScore').textContent
  // Parse string value of teamOne into integer & Increment team 1
  const teamOneNumber = parseInt(teamOneScored) + 1

  // Put value back into DOM
  document.querySelector('.teamOneScore').textContent = teamOneNumber
  console.log('Team 1 has scored')
};

const lossForTeamOne = () => {
  // query the DOM for current value
  let teamOneLoss = document.querySelector('.teamOneScore').textContent
  // Parse string value of teamOne into integer & Increment team 1
  const teamOneLossNumber = parseInt(teamOneLoss) - 1

  // Put value back into DOM
  document.querySelector('.teamOneScore').textContent = teamOneLossNumber
  console.log("Team 1 lost a point. Boo!")
};

//
// TEAM 2 functions
const scoreForTeamTwo = () => {
  // query the DOM for current value
  let teamTwoScored = document.querySelector('.teamTwoScore').textContent
  // Parse string value of teamOne into integer & Increment team 1
  const teamTwoNumber = parseInt(teamTwoScored) + 1

  // Put value back into DOM
  document.querySelector(".teamTwoScore").textContent = teamTwoNumber
  console.log("Team 2 has scored")
};

const lossForTeamTwo = () => {
  // query the DOM for current value
  let teamTwoLoss = document.querySelector('.teamTwoScore').textContent
  // Parse string value of teamOne into integer & Increment team 1
  const teamTwoLossNumber = parseInt(teamTwoLoss) - 1

  // Put value back into DOM
  document.querySelector('.teamTwoScore').textContent = teamTwoLossNumber
  console.log("Team 2 lost a point. Boo!");
};

// const NameChangeOne = () => {
//   reload.location()
//   document.getElementById('#teamOneNameChange').value
// }

// const refreshValuesForTwo = () => {
//   location.reload('.teamTwoName')
// }


//
// Team 1 query selectors
// Score 1
document.querySelector('.addToTeamOne').addEventListener('click', scoreForTeamOne)
// Loss 1
document.querySelector(".subtractFromTeamOne").addEventListener("click", lossForTeamOne)
// input value
// document.querySelector('.updateButtonForTeamOne').addEventListener('click', refreshValuesForOne)
// // Rename team 1 value
// document.getElementById('#teamOneNameChange').value

//
// Team 2 query selectors
// Score 1
document.querySelector('.addToTeamTwo').addEventListener("click", scoreForTeamTwo)
// Loss 1
document.querySelector('.subtractFromTeamTwo').addEventListener('click', lossForTeamTwo)
// Rename team 2 value
// document.getElementById('#teamTwoNameChange').innerHTML = document.querySelector('teamTwoName')

// default
document.addEventListener("DOMContentLoaded", main);
