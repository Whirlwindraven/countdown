const imputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownform');
const dateEl = document.getElementById('date-picker');

// set date input min
const today = new Date().toISOString().split('T');[0];
dateEl.setAttribute('min', today); 