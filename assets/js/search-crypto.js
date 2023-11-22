async function searchCrypto() {
    const cryptoName = document.getElementById('crypto-name').value.trim().toLowerCase();
    
    if (cryptoName === '') {
        alert('Please enter a crypto name.');
        return;
    }

    try {
        const apiKey = 'LE15MHUGOKHZVKT9';
        const response = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${apiKey}`);
        const data = await response.json();
        
        const cryptoData = data.Data;
        let symbol = '';

        // Find the symbol by searching through the data
        for (const key in cryptoData) {
            if (cryptoData[key].CoinName.toLowerCase() === cryptoName) {
                symbol = cryptoData[key].Symbol;
                break;
            }
        }

        if (symbol) {
            const resultDisplay = document.getElementById('crypto-symbol-result');
            resultDisplay.textContent = `Symbol for ${cryptoName.toUpperCase()}: ${symbol.toUpperCase()}`;
        } else {
            alert('Crypto symbol not found.');
        }
    } catch (error) {
        console.error('Error fetching crypto symbol:', error);
        alert('Error fetching crypto symbol. Please try again.');
    }
}

//api keys here