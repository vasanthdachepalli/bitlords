const date = new Date();

const today = date.getDate() + "/"+ date.getMonth() + "/" + date.getFullYear()

fetch('api/dailysingle/?date='+today)
.then(response => response.json())
     .then((data) => {
         console.log(data)
         // Process the API data (replace with your data processing logic)
        
         const values = data.values; // An array of corresponding values
     
         // Create the pie chart
         var ctx = document.getElementById('myPieChart').getContext('2d');
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

