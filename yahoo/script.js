function simulateSearch() {
  const query = document.getElementById('searchInput').value;
  const results = document.createElement('div');
  results.innerHTML = `
    <h3>Search Results for "${query}"</h3>
    <ul>
      <li><a href="#">${query} - Official Site</a></li>
      <li><a href="#">${query} Reviews & Ratings</a></li>
      <li><a href="#">Buy ${query} on Yahoo! Shopping</a></li>
    </ul>
  `;
  results.style.marginTop = '20px';
  results.style.background = 'rgba(255,255,255,0.3)';
  results.style.backdropFilter = 'blur(5px)';
  results.style.padding = '15px';
  results.style.borderRadius = '10px';
  results.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  document.body.appendChild(results);
}
function searchDomain(e) {
  e.preventDefault();
  const input = document.getElementById('domainInput').value.trim();
  const results = document.getElementById('domain-results');

  if (!input) {
    results.innerHTML = `<p>Please enter a domain name.</p>`;
    return;
  }

  if (input.toLowerCase() === 'rickroll.com') {
    results.innerHTML = `
      <h3>Domain Available!</h3>
      <p><strong>${input}</strong> is available. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Register now</a></p>
    `;
  } else {
    results.innerHTML = `
      <h3>Domain Unavailable</h3>
      <p>Sorry, <strong>${input}</strong> is already taken. Try another name.</p>
    `;
  }
}
function showShop(category) {
  const content = document.getElementById('shoping-content');
  switch (category) {
    case 'electronics':
      content.innerHTML = `
        <h3>Featured Electronics</h3>
        <ul>
          <li>📱 Nokia 3310 - $99</li>
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
        <h3>🎁 Deal of the Day</h3>
        <p>You've unlocked a secret offer! <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here to claim it</a>.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a department to view featured products.</p>`;
  }
}
function showAuction(category) {
  const content = document.getElementById('auction-content');
  switch (category) {
    case 'tech':
      content.innerHTML = `
        <h3>💻 Vintage Tech Auctions</h3>
        <ul>
          <li>Apple iMac G3 - Current Bid: $45</li>
          <li>Game Boy Color - Current Bid: $22</li>
          <li>AOL 7.0 CD-ROM - Current Bid: $0.01</li>
        </ul>
      `;
      break;
    case 'toys':
      content.innerHTML = `
        <h3>🧸 Toys & Games</h3>
        <ul>
          <li>Tamagotchi - Current Bid: $18</li>
          <li>Furby (1999 Edition) - Current Bid: $35</li>
          <li>Pokémon Cards (Holographic Charizard) - Current Bid: $120</li>
        </ul>
      `;
      break;
    case 'music':
      content.innerHTML = `
        <h3>🎵 Music & CDs</h3>
        <ul>
          <li>Backstreet Boys - Millennium CD - $9</li>
          <li>Britney Spears - ...Baby One More Time - $7</li>
          <li>NOW That's What I Call Music! Vol. 5 - $5</li>
        </ul>
      `;
      break;
    case 'rickroll':
      content.innerHTML = `
        <h3>🎁 Mystery Box</h3>
        <p>One lucky bidder will receive a surprise item. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Place your bid</a> now!</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a category to view current listings.</p>`;
  }
}
function showArts(category) {
  const content = document.getElementById('arts-content');
  switch (category) {
    case 'literature':
      content.innerHTML = `
        <h3>📖 Featured Literature</h3>
        <ul>
          <li>“The Raven” by Edgar Allan Poe</li>
          <li>“Leaves of Grass” by Walt Whitman</li>
          <li>“Pride and Prejudice” by Jane Austen</li>
        </ul>
      `;
      break;
    case 'photography':
      content.innerHTML = `
        <h3>📷 Photography Showcase</h3>
        <ul>
          <li>“Sunset Over Seattle” by Local Artist</li>
          <li>“Urban Shadows” - Black & White Series</li>
          <li>“Nature’s Geometry” - Macro Collection</li>
        </ul>
      `;
      break;
    case 'music':
      content.innerHTML = `
        <h3>🎼 Music & Composition</h3>
        <ul>
          <li>Classical Spotlight: Beethoven’s 5th</li>
          <li>Jazz Revival: Miles Davis Tribute</li>
          <li>Indie Picks: Underground Sound of 2002</li>
        </ul>
      `;
      break;
    case 'rickroll':
      content.innerHTML = `
        <h3>🎁 Hidden Masterpiece</h3>
        <p>You've uncovered a rare digital artifact. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Experience it here</a>.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a category to explore featured works.</p>`;
  }
}
function showNews(topic) {
  const content = document.getElementById('news-content');
  switch (topic) {
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