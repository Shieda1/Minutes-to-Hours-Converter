// https://www.omnicalculator.com/conversion/minutes-to-hours-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const hoursRadio = document.getElementById('hoursRadio');
const minutesRadio = document.getElementById('minutesRadio');
const secondsRadio = document.getElementById('secondsRadio');

let hours;
let minutes = v;

// labels of the inpust
const variable = document.getElementById('variable');

hoursRadio.addEventListener('click', function() {
  variable.textContent = 'Minutes';
  minutes = v;
  result.textContent = '';
});

minutesRadio.addEventListener('click', function() {
  variable.textContent = 'Hours';
  hours = v;
  result.textContent = '';
});

secondsRadio.addEventListener('click', function() {
  variable.textContent = 'Minutes';
  minutes = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(hoursRadio.checked)
    result.textContent = `Hours = ${computeHours().toFixed(2)}`;

  else if(minutesRadio.checked)
    result.textContent = `Minutes = ${computeMinutes().toFixed(2)}`;

  else if(secondsRadio.checked)
    result.textContent = `Seconds = ${computeSeconds().toFixed(2)}`;
})

// calculation

function computeHours() {
  return Number(minutes.value) / 60;
}

function computeMinutes() {
  return Number(hours.value) * 60;
}

function computeSeconds() {
  return Number(minutes.value) * 60;
}