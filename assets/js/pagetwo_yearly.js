function year1(){
    var previousChart6 = this._myPieChart_year1; // Get the previous chart reference

    // Destroy the pr3evious chart instance if it exists
    if (previousChart6) {
        previousChart6.destroy();
    }
   
    fetch('/visualizer/api/year/?category='+document.getElementById('category_year').value)
    .then(response => response.json())
    .then(data =>{
        const values = data.values;
        var ctx = document.getElementById('myPieChart_year1').getContext('2d');
        var myPieChart6= new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    data: values,
                    backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                }]
            },
        })
       
        this._myPieChart_year1 = myPieChart6;
    })
    .catch((err)=>{
        console.log(err)
    });
}