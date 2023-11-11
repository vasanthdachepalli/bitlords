function month1(){
    var previousChart5= this._myPieChart_month1; // Get the previous chart reference

    // Destroy the pr3evious chart instance if it exists
    if (previousChart5) {
        previousChart5.destroy();
    }
   
    fetch('/visualizer/api/month/?category='+document.getElementById('category_month').value)
    .then(response => response.json())
    .then(data =>{
        const values = data.values;
        var ctx = document.getElementById('myPieChart_month1').getContext('2d');
        var myPieChart5= new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    data: values,
                    backgroundColor: ['red', 'blue', 'green', 'yellow','black'], // Customize colors
                }]
            },options: {
                responsive: true,
                maintainAspectRatio: false, // Set this to false to define your own chart size
                height: 400, // Define the height
            }
        })
       
        this._myPieChart_month1 = myPieChart5;
    })
    .catch((err)=>{
        console.log(err)
    });
}