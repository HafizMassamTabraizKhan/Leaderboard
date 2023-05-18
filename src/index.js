import './style.css';
import { addScore, renderData } from './modules/functionality.js';

// Implement the submit-button action
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  addScore();
});

// Implement the refresh button action
document.querySelector('.ref-btn').addEventListener('click', (event) => {
  event.preventDefault();
  renderData();
});

renderData();