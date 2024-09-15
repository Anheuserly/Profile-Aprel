// Get all profile sections
const profileSections = document.querySelectorAll('.profile-section');

// Add event listener to each profile section
profileSections.forEach(section => {
  section.addEventListener('click', () => {
    // Toggle the show class on the profile info element
    const profileInfo = section.querySelector('.profile-info');
    profileInfo.classList.toggle('show');

    // Update the bio text when the profile info is shown
    if (profileInfo.classList.contains('show')) {
      const bio = profileInfo.querySelector('p');
      bio.textContent = 'New bio text!';
    }
  });
});

// Load content dynamically using JavaScript
const loadContent = () => {
  const content = document.getElementById('content');
  const url = 'https://example.com/api/content';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      content.innerHTML = '';
      data.forEach(item => {
        const element = document.createElement('div');
        element.textContent = item.text;
        content.appendChild(element);
      });
    });
};

// Call the loadContent function when the page loads
document.addEventListener('DOMContentLoaded', loadContent);

// Update game information, stats, scores, and rank dynamically
const gameNameElement = document.getElementById('game-name');
gameNameElement.textContent = 'San Andreas Multiplayer';

const positionElement = document.getElementById('position');
positionElement.textContent = 'Top 5%';

const rankElement = document.getElementById('rank');
rankElement.textContent = 'Master';

const winsElement = document.getElementById('wins');
winsElement.textContent = '200';

const killsElement = document.getElementById('kills');
killsElement.textContent = '1000';

const deathsElement = document.getElementById('deaths');
deathsElement.textContent = '300';

const kdRatioElement = document.getElementById('kd-ratio');
kdRatioElement.textContent = '3.5';

const winRateElement = document.getElementById('win-rate');
winRateElement.textContent = '70%';

const playtimeElement = document.getElementById('playtime');
playtimeElement.textContent = '200 hours';