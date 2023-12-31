function daily1(){
    var previousChart4 = this._myPieChart_daily1; // Get the previous chart reference

    // Destroy the pr3evious chart instance if it exists
    if (previousChart4) {
        previousChart4.destroy();
    }
    console.log("i am here too");
    fetch('/visualizer/api/daily/?category='+document.getElementById('category_daily').value)
    .then(response => response.json())
    .then(data =>{
        const values = data.values;
        var ctx = document.getElementById('myPieChart_daily1').getContext('2d');
        var myPieChart4= new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label:'daily_chart',
                    data: values,
                    backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                },
                ]
            },options: {
                responsive: true,
                maintainAspectRatio: false, // Set this to false to define your own chart size
                height: 400, // Define the height
            }
           
        })
        this._myPieChart_daily1 = myPieChart4;
       
    })
    .catch((err)=>{
        console.log(err)
    });
}


function weekly1(){
    var previousChart4 = this._myPieChart_daily1; // Get the previous chart reference

    // Destroy the pr3evious chart instance if it exists
    if (previousChart4) {
        previousChart4.destroy();
    }
    console.log("i am here too");
    fetch('/visualizer/api/week1/?category='+document.getElementById('category_weekly').value)
    .then(response => response.json())
    .then(data =>{
        const values = data.values;
        var ctx = document.getElementById('myPieChart_weekly1').getContext('2d');
        var myPieChart4= new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label:'daily_chart',
                    data: values,
                    backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                }]
            },options: {
                responsive: true,
                maintainAspectRatio: false, // Set this to false to define your own chart size
                height: 400, // Define the height
            }
           
        })
        this._myPieChart_daily1 = myPieChart4;
       
    })
    .catch((err)=>{
        console.log(err)
    });
}




