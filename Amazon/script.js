function searchAmazon(e) {
  e.preventDefault();
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const results = document.getElementById('search-results');

  if (!query) {
    results.innerHTML = `<p>Please enter a search term.</p>`;
    return;
  }

  if (query.includes('book')) {
    results.innerHTML = `
      <h3>Search Results for "${query}"</h3>
      <ul>
        <li>📘 "Harry Potter and the Goblet of Fire" - $9.99</li>
        <li>📗 "The Hobbit" - $7.49</li>
      </ul>
    `;
  } else if (query.includes('laptop')) {
    results.innerHTML = `
      <h3>Search Results for "${query}"</h3>
      <ul>
        <li>💻 Gateway 2000 Laptop - $799.00</li>
        <li>💻 Dell Inspiron - $699.00</li>
      </ul>
    `;
  } else {
    results.innerHTML = `
      <h3>No results found for "${query}"</h3>
      <p>Try searching for "book", "laptop", or "CD".</p>
    `;
  }
}
function showBooks(genre) {
  const content = document.getElementById('book-content');
  switch (genre) {
    case 'fiction':
      content.innerHTML = `
        <h3>📖 Fiction Favorites</h3>
        <ul>
          <li>"The Lovely Bones" by Alice Sebold</li>
          <li>"Life of Pi" by Yann Martel</li>
          <li>"The Secret Life of Bees" by Sue Monk Kidd</li>
        </ul>
      `;
      break;
    case 'nonfiction':
      content.innerHTML = `
        <h3>📘 Non-Fiction Picks</h3>
        <ul>
          <li>"A Short History of Nearly Everything" by Bill Bryson</li>
          <li>"The Tipping Point" by Malcolm Gladwell</li>
          <li>"Fast Food Nation" by Eric Schlosser</li>
        </ul>
      `;
      break;
    case 'fantasy':
      content.innerHTML = `
        <h3>🧙 Fantasy Bestsellers</h3>
        <ul>
          <li>"Harry Potter and the Goblet of Fire" by J.K. Rowling</li>
          <li>"Eragon" by Christopher Paolini</li>
          <li>"American Gods" by Neil Gaiman</li>
        </ul>
      `;
      break;
    case 'tech':
      content.innerHTML = `
        <h3>💻 Tech & Computing</h3>
        <ul>
          <li>"Code" by Charles Petzold</li>
          <li>"The Cathedral and the Bazaar" by Eric S. Raymond</li>
          <li>"Hackers: Heroes of the Computer Revolution" by Steven Levy</li>
        </ul>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a genre to view featured titles.</p>`;
  }
}
function showDeal(category) {
  const content = document.getElementById('deal-content');
  switch (category) {
    case 'tech':
      content.innerHTML = `
        <h3>💻 Tech & Electronics</h3>
        <ul>
          <li>Compaq Presario Laptop - <strong>$699</strong> (was $899)</li>
          <li>Panasonic DVD Player - <strong>$59</strong> (was $99)</li>
          <li>Logitech Mouse - <strong>$14.99</strong> (was $29.99)</li>
        </ul>
      `;
      break;
    case 'books':
      content.innerHTML = `
        <h3>📚 Books & Media</h3>
        <ul>
          <li>"Angels & Demons" by Dan Brown - <strong>$6.99</strong></li>
          <li>"The Lord of the Rings" Box Set - <strong>$19.99</strong></li>
          <li>Backstreet Boys CD - <strong>$9.99</strong></li>
        </ul>
      `;
      break;
    case 'home':
      content.innerHTML = `
        <h3>🏠 Home Essentials</h3>
        <ul>
          <li>Brita Water Pitcher - <strong>$17.99</strong></li>
          <li>Black & Decker Toaster Oven - <strong>$39.99</strong></li>
          <li>Swiffer Starter Kit - <strong>$12.49</strong></li>
        </ul>
      `;
      break;
    case 'toys':
      content.innerHTML = `
        <h3>🧸 Toys & Games</h3>
        <ul>
          <li>LEGO Bionicle Set - <strong>$24.99</strong></li>
          <li>Tamagotchi - <strong>$14.99</strong></li>
          <li>UNO Card Game - <strong>$4.99</strong></li>
        </ul>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a category to view featured discounts.</p>`;
  }
}
function showElectronics(category) {
  const content = document.getElementById('electronics-content');
  switch (category) {
    case 'computers':
      content.innerHTML = `
        <h3>💻 Computers</h3>
        <ul>
          <li>Compaq Presario Laptop - $799</li>
          <li>Dell Dimension Desktop - $599</li>
          <li>Microsoft IntelliMouse - $29.99</li>
        </ul>
      `;
      break;
    case 'audio':
      content.innerHTML = `
        <h3>🎧 Audio & Music</h3>
        <ul>
          <li>Sony Walkman CD Player - $49.99</li>
          <li>JBL Portable Speakers - $89.99</li>
          <li>iRiver MP3 Player - $99.00</li>
        </ul>
      `;
      break;
    case 'video':
      content.innerHTML = `
        <h3>📺 TVs & Video</h3>
        <ul>
          <li>Panasonic 27" CRT TV - $299</li>
          <li>RCA VCR Combo - $89.99</li>
          <li>Magnavox DVD Player - $59.99</li>
        </ul>
      `;
      break;
    case 'gadgets':
      content.innerHTML = `
        <h3>🕹️ Gadgets & Accessories</h3>
        <ul>
          <li>Palm Pilot m500 - $149.99</li>
          <li>Casio Digital Watch - $39.99</li>
          <li>USB Flash Drive (128MB) - $19.99</li>
        </ul>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a category to view featured products.</p>`;
  }
}
function showMusic(genre) {
  const content = document.getElementById('music-content');
  switch (genre) {
    case 'pop':
      content.innerHTML = `
        <h3>🎤 Pop Hits</h3>
        <ul>
          <li>Britney Spears – "...Baby One More Time"</li>
          <li>NSYNC – "No Strings Attached"</li>
          <li>Christina Aguilera – "Stripped"</li>
        </ul>
      `;
      break;
    case 'rock':
      content.innerHTML = `
        <h3>🎸 Rock Essentials</h3>
        <ul>
          <li>Red Hot Chili Peppers – "By the Way"</li>
          <li>Green Day – "Dookie"</li>
          <li>Foo Fighters – "The Colour and the Shape"</li>
        </ul>
      `;
      break;
    case 'hiphop':
      content.innerHTML = `
        <h3>🎧 Hip-Hop Favorites</h3>
        <ul>
          <li>Eminem – "The Eminem Show"</li>
          <li>Missy Elliott – "Under Construction"</li>
          <li>OutKast – "Stankonia"</li>
        </ul>
      `;
      break;
    case 'soundtrack':
      content.innerHTML = `
        <h3>🎬 Soundtracks</h3>
        <ul>
          <li>"The Lord of the Rings: The Fellowship of the Ring"</li>
          <li>"O Brother, Where Art Thou?"</li>
          <li>"Moulin Rouge!"</li>
        </ul>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a genre to view featured albums.</p>`;
  }
}
function showToys(category) {
  const content = document.getElementById('toy-content');
  switch (category) {
    case 'action':
      content.innerHTML = `
        <h3>🦸 Action Figures</h3>
        <ul>
          <li>Spider-Man Web Slinging Figure - $14.99</li>
          <li>Power Rangers Megazord - $24.99</li>
          <li>Star Wars Darth Vader - $19.99</li>
        </ul>
      `;
      break;
    case 'games':
      content.innerHTML = `
        <h3>🎲 Board Games</h3>
        <ul>
          <li>Monopoly: 2002 Edition - $12.99</li>
          <li>Connect Four - $9.99</li>
          <li>Guess Who? - $11.49</li>
        </ul>
      `;
      break;
    case 'educational':
      content.innerHTML = `
        <h3>📚 Educational Toys</h3>
        <ul>
          <li>LeapFrog Learning Pad - $29.99</li>
          <li>Math Blaster CD-ROM - $19.99</li>
          <li>Speak & Spell - $34.99</li>
        </ul>
      `;
      break;
    case 'retro':
      content.innerHTML = `
        <h3>📼 Retro Classics</h3>
        <ul>
          <li>Tamagotchi Digital Pet - $14.99</li>
          <li>Furby (1999 Edition) - $39.99</li>
          <li>Etch A Sketch - $9.99</li>
        </ul>
      `;
      break;
    default:
      content.innerHTML = `<p>Select a category to view featured toys.</p>`;
  }
}