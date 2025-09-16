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
    case 'work':
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
function showStory(id) {
  const content = document.getElementById('news-content');
  switch (id) {
    case 'broadband':
      content.innerHTML = `
        <h3>AOL Launches Nationwide Broadband</h3>
        <p>AOL has officially rolled out its broadband service across the U.S., promising faster speeds and fewer dial-up tones. Early users report blazing speeds of up to 256 kbps!</p>
      `;
      break;
    case 'aim':
      content.innerHTML = `
        <h3>AIM Hits 100 Million Users</h3>
        <p>America Online's Instant Messenger (AIM) has reached a major milestone. With new features like custom away messages and buddy icons, AIM is the place to be.</p>
      `;
      break;
    case 'celebrity':
      content.innerHTML = `
        <h3>Celebrity Chat Rooms Return</h3>
        <p>From Britney Spears to Will Smith, AOL chat rooms are buzzing again with surprise celebrity drop-ins. Moderators are working overtime to keep the rooms civil.</p>
      `;
      break;
    case 'rickroll':
      content.innerHTML = `
        <h3>Mystery Link Shocks AOL Users</h3>
        <p>A strange email circulating among AOL users contains a link that leads to an unexpected video. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here to investigate</a>.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a headline to read the full story.</p>`;
  }
}
function openChat(user) {
  const chat = document.getElementById('chat-window');
  switch (user) {
    case 'coolkid':
      chat.innerHTML = `
        <h3>Chat with CoolKid123</h3>
        <p><strong>You:</strong> Hey! What's up?</p>
        <p><strong>CoolKid123:</strong> Just downloaded the new AIM skins. So rad!</p>
      `;
      break;
    case 'sk8rboi':
      chat.innerHTML = `
        <h3>Chat with Sk8rBoi88</h3>
        <p><strong>You:</strong> Did you see the new Avril video?</p>
        <p><strong>Sk8rBoi88:</strong> Obviously. She's a legend.</p>
      `;
      break;
    case 'rick':
      chat.innerHTML = `
        <h3>Chat with RickRollMaster</h3>
        <p><strong>RickRollMaster:</strong> I have something amazing to show you...</p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">🎶 Click here</a>
      `;
      break;
    case 'offline':
      chat.innerHTML = `
        <h3>Chat with OfflineFriend</h3>
        <p>This user is currently offline. You can leave a message.</p>
      `;
      break;
    default:
      chat.innerHTML = `<p>Select a buddy to start chatting.</p>`;
  }
}
function runSearch(e) {
  e.preventDefault();
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = document.getElementById('search-results');

  if (!query) {
    results.innerHTML = `<p>Please enter a search term.</p>`;
    return;
  }

  switch (query) {
    case 'aol broadband':
      results.innerHTML = `
        <h3>Results for "AOL Broadband"</h3>
        <ul>
          <li><a href="#">AOL launches high-speed internet nationwide</a></li>
          <li><a href="#">Compare AOL vs. dial-up</a></li>
        </ul>
      `;
      break;
    case 'aim':
      results.innerHTML = `
        <h3>Results for "AIM"</h3>
        <ul>
          <li><a href="aim.html">Open AIM Buddy List</a></li>
          <li><a href="#">Customize your away message</a></li>
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
    default:
      results.innerHTML = `
        <h3>No results found for "${query}"</h3>
        <p>Try searching for something like "AIM", "AOL Broadband", or "Rickroll".</p>
      `;
  }
}
function showSportsStory(id) {
  const content = document.getElementById('sports-content');
  switch (id) {
    case 'nfl':
      content.innerHTML = `
        <h3>Patriots Dominate Season Opener</h3>
        <p>New England kicks off the 2002 NFL season with a commanding win. Brady throws for 3 TDs as fans celebrate across the Northeast.</p>
      `;
      break;
    case 'mlb':
      content.innerHTML = `
        <h3>Yankees Clinch Playoff Spot</h3>
        <p>With a 5-2 win over the Red Sox, the Yankees secure their place in the postseason. Jeter leads the charge with a clutch double.</p>
      `;
      break;
    case 'nba':
      content.innerHTML = `
        <h3>Lakers Take Down Kings</h3>
        <p>Shaquille O'Neal and Kobe Bryant combine for 60 points in a thrilling victory. Staples Center erupts as the Lakers continue their dominance.</p>
      `;
      break;
    case 'rickroll':
      content.innerHTML = `
        <h3>Mysterious Halftime Show Link</h3>
        <p>Fans were stunned when a halftime show teaser led to an unexpected video. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Watch it here</a>.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a headline to read the full story.</p>`;
  }
}
function showFinanceStory(id) {
  const content = document.getElementById('finance-content');
  switch (id) {
    case 'nasdaq':
      content.innerHTML = `
        <h3>NASDAQ Surges Amid Tech Rally</h3>
        <p>Tech stocks led the charge today as the NASDAQ climbed 3.2%. Investors are optimistic about the future of broadband and mobile computing.</p>
      `;
      break;
    case 'aol':
      content.innerHTML = `
        <h3>AOL Time Warner Posts Quarterly Gains</h3>
        <p>Strong advertising revenue and broadband subscriptions helped AOL Time Warner beat analyst expectations this quarter.</p>
      `;
      break;
    case 'dotcom':
      content.innerHTML = `
        <h3>Dot-Com Recovery Signals New Boom</h3>
        <p>After a rough few years, dot-com companies are bouncing back. Experts say the next wave of innovation is just beginning.</p>
      `;
      break;
    case 'rickroll':
      content.innerHTML = `
        <h3>Mysterious Investment Tip Goes Viral</h3>
        <p>Traders were stunned when a hot stock tip turned out to be... something else entirely. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here to investigate</a>.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a headline to read the full story.</p>`;
  }
}
function showShop(category) {
  const content = document.getElementById('shoping-content');
  switch (category) {
    case 'electronics':
      content.innerHTML = `
        <h3>Featured Electronics</h3>
        <ul>
          <li>🔋 Nokia 3310 Mobile Phone - $99</li>
          <li>💻 Compaq Presario Laptop - $799</li>
          <li>📺 Sony Trinitron TV - $299</li>
        </ul>
      `;
      break;
    case 'fashion':
      content.innerHTML = `
        <h3>Trending Fashion</h3>
        <ul>
          <li>👖 Low-rise Jeans - $39</li>
          <li>🕶️ Oakley Sunglasses - $89</li>
          <li>👟 Skechers Sneakers - $59</li>
        </ul>
      `;
      break;
    case 'books':
      content.innerHTML = `
        <h3>Books & Media</h3>
        <ul>
          <li>📘 "Harry Potter and the Goblet of Fire" - $19</li>
          <li>🎧 Backstreet Boys CD - $14</li>
          <li>📀 AOL 7.0 Install Disc - Free!</li>
        </ul>
      `;
      break;
    case 'rickroll':
      content.innerHTML = `
        <h3>🎁 Mystery Deal of the Day</h3>
        <p>You've unlocked a secret offer! <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here to claim it</a>.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a category to view featured products.</p>`;
  }
}