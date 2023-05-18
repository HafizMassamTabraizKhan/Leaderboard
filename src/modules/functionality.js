// Add score function
export const addScore = async () => {
  const form = document.querySelector('form');

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0rIOzEuR5viPJLjKg7Ce/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: form.elements.name.value,
      score: form.elements.score.value,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  form.reset();
};

// Get data from API and populate HTML function
export const renderData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0rIOzEuR5viPJLjKg7Ce/scores/');
  const data = await response.json();
  const scoresListContainer = document.querySelector('.scores-list');
  scoresListContainer.innerHTML = '';
  data.result.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.user}:${element.score}`;
    scoresListContainer.appendChild(li);
  });
};
