function openEmail(id) {
  const content = document.getElementById('email-content');
  switch (id) {
    case 'rickroll':
      content.innerHTML = `
        <h3>Subject: You've Got to See This!</h3>
        <p>Hey there! I found this amazing video—click below to check it out!</p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">🎬 Watch Now</a>
      `;
      break;
    case 'mom':
      content.innerHTML = `
        <h3>Subject: Dinner Plans</h3>
        <p>Hi sweetie, are we still on for dinner tonight? Let me know what you feel like eating. Love you!</p>
      `;
      break;
    case 'boss':
      content.innerHTML = `
        <h3>Subject: Meeting Rescheduled</h3>
        <p>The team meeting has been moved to Thursday at 3 PM. Please update your calendar.</p>
      `;
      break;
    case 'newsletter':
      content.innerHTML = `
        <h3>Subject: Top Headlines Today</h3>
        <ul>
          <li>AOL Broadband Launches Nationwide</li>
          <li>New AIM Features Announced</li>
          <li>Celebrity Chat Room Craze Returns</li>
        </ul>
      `;
      break;
    default:
      content.innerHTML = `<p>Select an email to read.</p>`;
  }
}
function runSearch(e) {
  e.preventDefault();
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const results = document.getElementById('search-results');

  if (!query) {
    results.innerHTML = `<p>Please enter a search term.</p>`;
    return;
  }

  switch (query) {
    case 'msn messenger':
      results.innerHTML = `
        <h3>Results for "MSN Messenger"</h3>
        <ul>
          <li><a href="#">Download MSN Messenger 5.0</a></li>
          <li><a href="#">Customize your status and emojis</a></li>
        </ul>
      `;
      break;
    case 'rickroll':
      results.innerHTML = `
        <h3>Results for "Rickroll"</h3>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Never gonna give you up 🎶</a></li>
        </ul>
      `;
      break;
    case 'hotmail':
      results.innerHTML = `
        <h3>Results for "Hotmail"</h3>
        <ul>
          <li><a href="email.html">Sign in to Hotmail</a></li>
          <li><a href="#">Create a new Hotmail account</a></li>
        </ul>
      `;
      break;
    default:
      results.innerHTML = `
        <h3>No results found for "${query}"</h3>
        <p>Try searching for "MSN Messenger", "Hotmail", or "Rickroll".</p>
      `;
  }
}
function simulateSearch() {
    const searchInput = document.getElementById('searchInput').value;
    alert('Simulated search for: ' + searchInput);
}
function showNews(topic) {
  const content = document.getElementById('news-content');
  switch (topic) {
    case 'broadband':
      content.innerHTML = `
        <h3>Microsoft Launches High-Speed MSN Broadband</h3>
        <p>MSN now offers blazing-fast internet access with speeds up to 256 kbps. Say goodbye to dial-up tones and hello to streaming!</p>
      `;
      break;
    case 'messenger':
      content.innerHTML = `
        <h3>MSN Messenger Gets New Emojis</h3>
        <p>Users can now express themselves with animated smileys, custom status messages, and new chat backgrounds.</p>
      `;
      break;
    case 'celebs':
      content.innerHTML = `
        <h3>Celebrities Join MSN Chat Rooms</h3>
        <p>From Britney Spears to Will Smith, surprise celebrity appearances are lighting up MSN chat rooms. Moderators are scrambling to keep up!</p>
      `;
      break;
    case 'rickroll':
      content.innerHTML = `
        <h3>Mysterious Link Circulates Among Users</h3>
        <p>A strange link has been shared across MSN Messenger. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here to investigate</a>.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a headline to read the full story.</p>`;
  }
}
function launchGame(game) {
  const content = document.getElementById('game-content');
  switch (game) {
    case 'snake':
      content.innerHTML = `
        <h3>🐍 Snake</h3>
        <p>Classic arcade fun! <a href="games/snake/index.html">Play Snake</a></p>
      `;
      break;
    case 'minesweeper':
      content.innerHTML = `
        <h3>💣 Minesweeper</h3>
        <p>Can you avoid the mines? <a href="games/minesweeper/index.html">Play Minesweeper</a></p>
      `;
      break;
    case 'tic-tac-toe':
      content.innerHTML = `
        <h3>❌⭕ Tic-Tac-Toe</h3>
        <p>Challenge a friend or play solo. <a href="games/tic-tac-toe/index.html">Play Tic-Tac-Toe</a></p>
      `;
      break;
    case 'guess':
      content.innerHTML = `
        <h3>🔢 Guess the Number</h3>
        <p>Can you guess the secret number? <a href="games/guess-the-number/index.html">Play Now</a></p>
      `;
      break;
    case 'rps':
      content.innerHTML = `
        <h3>✊✋✌️ Rock-Paper-Scissors</h3>
        <p>Test your luck and strategy. <a href="games/rock-paper-scissors/index.html">Play RPS</a></p>
      `;
      break;
    case 'rickroll':
      content.innerHTML = `
        <h3>🎁 Mystery Game</h3>
        <p>You've unlocked a surprise! <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Play Now</a></p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a game to begin playing.</p>`;
  }
}
function showWeather(city) {
  const content = document.getElementById('weather-content');
  switch (city) {
    case 'seattle':
      content.innerHTML = `
        <h3>🌧️ Seattle, WA</h3>
        <p>Cloudy with light rain. High: 64°F / Low: 52°F. Bring a jacket and maybe a coffee.</p>
      `;
      break;
    case 'newyork':
      content.innerHTML = `
        <h3>🌤️ New York, NY</h3>
        <p>Partly sunny. High: 75°F / Low: 60°F. A great day for a walk in Central Park.</p>
      `;
      break;
    case 'losangeles':
      content.innerHTML = `
        <h3>☀️ Los Angeles, CA</h3>
        <p>Sunny and warm. High: 85°F / Low: 65°F. Perfect beach weather.</p>
      `;
      break;
    case 'chicago':
      content.innerHTML = `
        <h3>🌬️ Chicago, IL</h3>
        <p>Windy with scattered clouds. High: 70°F / Low: 55°F. Hold onto your hat!</p>
      `;
      break;
    case 'rickroll':
      content.innerHTML = `
        <h3>🎁 Mystery Forecast</h3>
        <p>Forecast: 100% chance of surprise. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here for details</a>.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a city to view the current forecast.</p>`;
  }
}