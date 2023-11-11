{

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

async function getDailySingle(date) {
    try {
        const response = await fetchData(`api/month/?month=${date}`);
        //console.log(response);
        return response.values;
    } catch (error) {
        console.error('Error in getDailySingle:', error);
        throw error;
    }
}

async function getweek(week){
    try {
        const response = await fetchData('/api/year/?year='+ week );
        //console.log(response);
        return response.values;
    } catch (error) {
        console.error('Error in getweeklySingle:', error);
        throw error;
    }
}



async function processData2() {
    try {
        const dailyData = await fetchData('/api1/month');
        //console.log(dailyData);

        const data1 = [];

        for (const element of dailyData) {
            try {
                const singleData = await getDailySingle(element.month);
                //console.log(singleData);

                const var1 = {
                    label: element.month,
                    data: singleData,
                  //  backgroundColor: ['red', 'blue', 'green', 'yellow', 'black'],
                };
                data1.push(var1);
            } catch (error) {
                console.error('Error processing element:', element, error);
            }
        }

        console.log(data1);

        // Create the bar chart
        var ctx = document.getElementById('myPieChart_month_main').getContext('2d');
        var myBarChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['shopping', 'Entertainment', 'Medical', 'Food', 'others'],
                datasets: data1,
            },
        });
    } catch (error) {
        console.error('Error processing data:', error);
    }
}

async function processData3() {
    try {
        const dailyData1 = await fetchData('/api1/year');
        console.log(dailyData1);

        const data1 = [];

        for (const element of dailyData1) {
            try {
                const singleData = await getweek(element.year);
                //console.log(singleData);

                const var1 = {
                    label: element.year,
                    data: singleData,
                  //  backgroundColor: ['red', 'blue', 'green', 'yellow', 'black'],
                };
                data1.push(var1);
            } catch (error) {
                console.error('Error processing element:', element, error);
            }
        }

        console.log(data1);

        // Create the bar chart
        var ctx = document.getElementById('myPieChart_year_main').getContext('2d');
        var myBarChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['shopping', 'Entertainment', 'Medical', 'Food', 'others'],
                datasets: data1,
            },
        });
    } catch (error) {
        console.error('Error processing data:', error);
    }
}
// Call processData to initiate the process
processData2();
processData3();

}
