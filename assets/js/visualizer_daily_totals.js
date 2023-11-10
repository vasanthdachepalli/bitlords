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
                    data: values,
                    backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                }]
            },
        })
        .catch((err)=>{
            console.log(err)
        });
        this._myPieChart_daily1 = myPieChart4;
    })
}


function month1(){
    var previousChart4 = this._myPieChart_month1; // Get the previous chart reference

    // Destroy the pr3evious chart instance if it exists
    if (previousChart4) {
        previousChart4.destroy();
    }
   
    fetch('/visualizer/api/month/?category='+document.getElementById('category_month').value)
    .then(response => response.json())
    .then(data =>{
        const values = data.values;
        var ctx = document.getElementById('myPieChart_month1').getContext('2d');
        var myPieChart4= new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    data: values,
                    backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                }]
            },
        })
        .catch((err)=>{
            console.log(err)
        });
        this._myPieChart_month1 = myPieChart4;
    })
}


function year1(){
    var previousChart4 = this._myPieChart_year1; // Get the previous chart reference

    // Destroy the pr3evious chart instance if it exists
    if (previousChart4) {
        previousChart4.destroy();
    }
   
    fetch('/visualizer/api/year/?category='+document.getElementById('category_year').value)
    .then(response => response.json())
    .then(data =>{
        const values = data.values;
        var ctx = document.getElementById('myPieChart_year1').getContext('2d');
        var myPieChart4= new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    data: values,
                    backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                }]
            },
        })
        .catch((err)=>{
            console.log(err)
        });
        this._myPieChart_year1 = myPieChart4;
    })
}