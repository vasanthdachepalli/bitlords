function yearly(){

fetch('api/year/?year='+ document.getElementById('date_year').value)
.then(response => response.json())
     .then((data) => {
         console.log(data)
         // Process the API data (replace with your data processing logic)
        
         const values = data.values; // An array of corresponding values
     
         // Create the pie chart
         var ctx = document.getElementById('myPieChart_year').getContext('2d');
         var myPieChart = new Chart(ctx, {
             type: document.getElementById('chart_year').value,
             data: {
                 labels: ['shopping','Entertainment','Medical','Food','others'],
                 datasets: [{
                     data: values,
                     backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                 }]
             },
         });
     })
     .catch(error => {
         console.error('Error fetching data:', error);
     });
    }