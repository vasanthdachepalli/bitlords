{
//const date1 = new Date();

//const today = date1.getDate() + "/"+ date1.getMonth() + "/" + date1.getFullYear()


fetch('api/week')
.then(response => response.json())
     .then((data) => {
         //console.log(data)
         // Process the API data (replace with your data processing logic)
        
         const values = data.values; // An array of corresponding values
     
         // Create the pie chart
         var ctx = document.getElementById('myPieChart_week').getContext('2d');
         var myPieChart = new Chart(ctx, {
             type: 'pie',
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
