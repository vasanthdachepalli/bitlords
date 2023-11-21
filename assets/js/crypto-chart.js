
{
    const chartContainer = document.getElementById('tv_chart_container');
    let chart = null;
    
    function createChart() {
        if (chart !== null) {
            chart.remove();
        }
    
        chart = LightweightCharts.createChart(chartContainer, {
            width: chartContainer.clientWidth,
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

    function handleItemCryptoClick(item) {
        const innerHTMLValue = item.innerHTML;
        loadcryptoChart(innerHTMLValue);
    }

    function loadcryptoChart(coinSymbol) {
        createChart();

        const lineSeries = chart.addLineSeries({
            color: 'blue',
            lineWidth: 2,
        });

        fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coinSymbol}&tsym=INR&limit=200`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'Success') {
                    const prices = data.Data.Data;
                    const formattedData = prices.map(price => ({
                        time: new Date(price.time * 1000).toISOString().split('T')[0],
                        value: price.close,
                    }));

                    lineSeries.setData(formattedData);
                    chartContainer.style.display = 'block';
                } else {
                    console.error('Error fetching crypto data:', data.Message);
                }
            })
            .catch(error => {
                console.error('Error fetching crypto data:', error);
            });
    }

    window.addEventListener('resize', () => {
        // Update chart width on window resize
        if (chart !== null) {
            chart.resize(chartContainer.clientWidth, 550);
        }
    });

    // Initial load of the chart
    // Initial coin to load, change as needed
}
