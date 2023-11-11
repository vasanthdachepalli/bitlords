function yearly(){

    var previousChart3 = this._myPieChart_year; // Get the previous chart reference

    // Destroy the pr3evious chart instance if it exists
    if (previousChart3) {
        previousChart3.destroy();
    }
fetch('api/year/?year='+ document.getElementById('date_year').value)
.then(response => response.json())
     .then((data) => {
         console.log(data)
         // Process the API data (replace with your data processing logic)
        
         const values = data.values; // An array of corresponding values
     
         // Create the pie chart
         var ctx = document.getElementById('myPieChart_year').getContext('2d');
         var myPieChart3= new Chart(ctx, {
             type: document.getElementById('chart_year').value,
             data: {
                 labels: ['shopping','Entertainment','Medical','Food','others'],
                 datasets: [{
                     data: values,
                     backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                 }]
             },options: {
                responsive: true,
                maintainAspectRatio: false, // Set this to false to define your own chart size
                height: 400, // Define the height
            }
         });
         this._myPieChart_year = myPieChart3;
     })
     .catch(error => {
         console.error('Error fetching data:', error);
     });
    
    }