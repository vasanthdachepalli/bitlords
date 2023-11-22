const apiKey ='9b2a10e54733c1c924a92541a561088c5aba43a3cf6fb66cf18817ab7e481f67'; // Replace 'YOUR_API_KEY' with your Alpha Vantage API key

function fetchSymbol() {
    const companyName = document.getElementById('companyName').value.trim();

    if (!companyName) {
        alert('Please enter a company name.');
        return;
    }

    const endpoint = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${apiKey}`;

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            if (data.bestMatches && data.bestMatches.length > 0) {
                const symbol = data.bestMatches[0]['1. symbol']; // Get the symbol from the best match
                document.getElementById('symbolResult').textContent = `Symbol for ${companyName}: ${symbol}`;
            } else {
                document.getElementById('symbolResult').textContent = `No symbol found for ${companyName}`;
            }
        })
        .catch(error => {
            console.error('Error fetching symbol:', error);
        });
}

const stockchartContainer = document.getElementById('stock_tv_chart_container');
        let stock_chart = null;

        function createChart() {
            if (stock_chart !== null) {
                stock_chart.remove();
            }

            stock_chart = LightweightCharts.createChart(stockchartContainer, {
                width: stockchartContainer.clientWidth,
                height: 550, // Adjust height as needed
                layout: {
                    backgroundColor: '#ffffff',
                    textColor: '#333',
                },
                grid: {
                    vertLines: {
                        color: '#e8e8e8',
                    },
                    horzLines: {
                        color: '#e8e8e8',
                    },
                },
            });
        }

        function handleItemStockClick(item) {
            const innerHTMLValue = item.innerHTML;
            console.log(`Clicked item value: ${innerHTMLValue}`);
        
           
            loadstockChart(innerHTMLValue);
        }
         
       
        function loadstockChart(stockSymbol) {
            // const stockSymbol = document.getElementById('stockSymbol').value.toUpperCase();

            // if (stockSymbol.trim() === '') {
            //     alert('Please enter a valid stock symbol.');
            //     return;
            // }

            createChart();

            const lineSeries = stock_chart.addLineSeries({
                color: 'blue',
                lineWidth: 2,
            });

            

            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&month=2009-01&apikey=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    const seriesData = data['Time Series (Daily)'];

                    const formattedData = [];
                    for (let key in seriesData) {
                        const date = new Date(key);
                        const formattedDate = date.toISOString().split('T')[0]; // Convert date to 'yyyy-mm-dd' format
                        formattedData.push({
                            time: formattedDate,
                            value: parseFloat(seriesData[key]['4. close'])
                        });
                    }

                    // Sort the data by time in ascending order
                    formattedData.sort((a, b) => new Date(a.time) - new Date(b.time));

                    lineSeries.setData(formattedData);
                    stockchartContainer.style.display = 'block';
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
        window.addEventListener('resize', () => {
            // Update chart width on window resize
            if (stock_chart !== null) {
                stock_chart.resize(stockchartContainer.clientWidth, 550);
            }
        });


        //api keys here