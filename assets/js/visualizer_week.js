function weekly(){
    var previousChart1 = this._myPieChart_month; // Get the previous chart reference

    // Destroy the previous chart instance if it exists
    if (previousChart1) {
        previousChart1.destroy();
    }
fetch('/visualizer/api/week/?week='+document.getElementById('weekly_date').value )
.then(response => response.json())
     .then((data) => {
         console.log(data)
         // Process the API data (replace with your data processing logic)
        
         const values = data.values; // An array of corresponding values
     
         // Create the pie chart
         var ctx = document.getElementById('myPieChart_week').getContext('2d');
         var myPieChart = new Chart(ctx, {
             type: document.getElementById('weekly_type').value,
             data: {
                 labels: ['shopping','Entertainment','Medical','Food','others'],
                 datasets: [{
                     data: values,
                     backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                 }]
             },
         });
         this._myPieChart_month = myPieChart;
     })
     .catch(error => {
         console.error('Error fetching data:', error);
     });
    }