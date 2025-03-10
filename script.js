function getUrl() {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.createElement('div');
    
    // Simulate different websites based on the entered URL
    if (url.includes('google')) {
        window.location.href = 'google/index.html';
    } else if (url.includes('yahoo')) {
        window.location.href = 'yahoo/index.html';
    } else if (url.includes('altavista')) {
        window.location.href = 'altavista/index.html';
    } else if (url.includes('geocities')) {
        window.location.href = 'geocities/index.html';
    } else if (url.includes('guess-the-number')) {
        window.location.href = 'games/guess-the-number/index.html';
    } else if (url.includes('tic-tac-toe')) {
        window.location.href = 'games/tic-tac-toe/index.html';
    } else if (url.includes('rock-paper-scissors')) {
        window.location.href = 'games/rock-paper-scissors/index.html';
    } else if (url.includes('example1')) {
        resultDiv.innerHTML = `<p>Simulated search result for: <strong>${url}</strong></p><p>This is a simulation of Example1 website.</p>`;
    } else if (url.includes('example2')) {
        resultDiv.innerHTML = `<p>Simulated search result for: <strong>${url}</strong></p><p>This is a simulation of Example2 website.</p>`;
    } else {
        resultDiv.innerHTML = `<p>Simulated search result for: <strong>${url}</strong></p><p>This is a generic simulation of a 90s website.</p>`;
    }
    
    document.body.appendChild(resultDiv);
}

function simulateSearch() {
    const searchInput = document.getElementById('searchInput').value;
    alert('Simulated search for: ' + searchInput);
}
