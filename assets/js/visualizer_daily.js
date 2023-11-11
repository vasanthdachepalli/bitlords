const date = new Date();


function daily(){
    var previousChart = this._myPieChart_daily; // Get the previous chart reference

    // Destroy the previous chart instance if it exists
    if (previousChart) {
        previousChart.destroy();
    }
fetch('api/dailysingle/?date='+document.getElementById("daily_date").value)
.then(response => response.json())
     .then((data) => {
         console.log(data)
         // Process the API data (replace with your data processing logic)
        
         const values = data.values; // An array of corresponding values
     
         // Create the pie chart
         var ctx = document.getElementById('myPieChart_daily').getContext('2d');
         var myPieChart = new Chart(ctx, {
             type: document.getElementById("daily_type").value,
             data: {
              
                 labels: ['shopping','Entertainment','Medical','Food','others'],
                 datasets: [{
                    label:'selected daily chart',
                     data: values,
                     backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                 }]
             },options: {
                responsive: true,
                maintainAspectRatio: false, // Set this to false to define your own chart size
                height: 400, // Define the height
            }
         });
         this._myPieChart_daily = myPieChart;
     })
     .catch(error => {
         console.error('Error fetching data:', error);
     });
    }