{

    function downloadTable() {
        // Get the table element
        var table1 = document.getElementById("day_table");
        var table = table1.getElementsByTagName("table")[0];
        console.log(table);
        // Create an empty string to store the CSV data
        var csvData = "";
    
        // Loop through rows and cells to get the data
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                csvData += table.rows[i].cells[j].innerText + ",";
            }
            // Add a new line after each row
            csvData += "\n";
        }
    
        // Create a Blob containing the CSV data
        var blob = new Blob([csvData], { type: "text/csv" });
    
        console.log(blob)
        /*
        var file = blob.files[0];
    
        // Parse the CSV file
        Papa.parse(file, {
            complete: function (result) {
                // Create a jsPDF instance
                var pdf = new jsPDF();
                
                // Convert CSV data to a string
                var csvData = result.data.map(row => row.join(',')).join('\n');
    
                // Add the CSV data to the PDF
                pdf.text(csvData, 10, 10);
    
                // Save the PDF with a specific name
                pdf.save("converted_data.pdf");
            }
        });*/
    
    
         
        // Create a link element
        var link = document.createElement("a");
    
        // Set the download attribute with the desired file name
        link.download = "table_data.csv";
    
        // Create a URL for the Blob and set it as the link's href
        link.href = window.URL.createObjectURL(blob);
    
        // Append the link to the document
        document.body.appendChild(link);
    
        // Trigger a click on the link to start the download
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
    
        
    
    }
    
    
    function downloadTable1() {
        // Get the table element
        var table1 = document.getElementById("week_table");
        var table = table1.getElementsByTagName("table")[0];
        console.log(table);
        // Create an empty string to store the CSV data
        var csvData = "";
    
        // Loop through rows and cells to get the data
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                csvData += table.rows[i].cells[j].innerText + ",";
            }
            // Add a new line after each row
            csvData += "\n";
        }
    
        // Create a Blob containing the CSV data
        var blob = new Blob([csvData], { type: "text/csv" });
    
        console.log(blob)
        
    
    
    
         
        // Create a link element
        var link = document.createElement("a");
    
        // Set the download attribute with the desired file name
        link.download = "table_data.csv";
    
        // Create a URL for the Blob and set it as the link's href
        link.href = window.URL.createObjectURL(blob);
    
        // Append the link to the document
        document.body.appendChild(link);
    
        // Trigger a click on the link to start the download
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
    
        
    
    }
    
    
    
    
    function downloadTable3() {
        // Get the table element
        var table1 = document.getElementById("month_table");
        var table = table1.getElementsByTagName("table")[0];
        console.log(table);
        // Create an empty string to store the CSV data
        var csvData = "";
    
        // Loop through rows and cells to get the data
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                csvData += table.rows[i].cells[j].innerText + ",";
            }
            // Add a new line after each row
            csvData += "\n";
        }
    
        // Create a Blob containing the CSV data
        var blob = new Blob([csvData], { type: "text/csv" });
    
        console.log(blob)
        
    
         
        // Create a link element
        var link = document.createElement("a");
    
        // Set the download attribute with the desired file name
        link.download = "table_data.csv";
    
        // Create a URL for the Blob and set it as the link's href
        link.href = window.URL.createObjectURL(blob);
    
        // Append the link to the document
        document.body.appendChild(link);
    
        // Trigger a click on the link to start the download
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
    
        
    
    }
    
    
    
    function downloadTable4() {
        // Get the table element
        var table1 = document.getElementById("year_table");
        var table = table1.getElementsByTagName("table")[0];
        console.log(table);
        // Create an empty string to store the CSV data
        var csvData = "";
    
        // Loop through rows and cells to get the data
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                csvData += table.rows[i].cells[j].innerText + ",";
            }
            // Add a new line after each row
            csvData += "\n";
        }
    
        // Create a Blob containing the CSV data
        var blob = new Blob([csvData], { type: "text/csv" });
    
        console.log(blob)
       
    
         
        // Create a link element
        var link = document.createElement("a");
    
        // Set the download attribute with the desired file name
        link.download = "table_data.csv";
    
        // Create a URL for the Blob and set it as the link's href
        link.href = window.URL.createObjectURL(blob);
    
        // Append the link to the document
        document.body.appendChild(link);
    
        // Trigger a click on the link to start the download
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
    
        
    
    }
    
    
    
    }