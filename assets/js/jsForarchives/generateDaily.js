function generatedaily() {
    // Get the container element by its ID
    var container = document.getElementById("day_table");

    // Check if there's an existing table in the container
    var existingTable = container.querySelector("table");
    
    if (existingTable) {
      // If there's an existing table, remove it
      container.removeChild(existingTable);
    }

    // Create a table element
    var table = document.createElement("table");
    var header = table.createTHead();
    // Create a heading row
    var headingRow = header.insertRow(0);

    // Insert cells into the heading row
    var headingCell1 = headingRow.insertCell(0);
    var headingCell2 = headingRow.insertCell(1);
    var headingCell3 = headingRow.insertCell(2);
    var headingCell4 = headingRow.insertCell(3);

    // Add content to the heading cells
    headingCell1.innerHTML = "Category";
    headingCell2.innerHTML = "Amount";
    headingCell3.innerHTML = "Purpose";
    headingCell4.innerHTML = "type";


    fetch('/archives/data/daily?date='+document.getElementById('day_select').value)
    .then(response => response.json())
    .then((data)=>{
        let i = 1
        console.log(data);
    // Create a new row
    data.forEach(element => {
        
   
    var row = table.insertRow(i);
   
    // Insert cells into the row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Add content to the cells
    cell1.innerHTML = element.category;
    cell2.innerHTML = element.ammount;
    cell3.innerHTML = element.name;
    cell4.innerHTML = element.type;

    // Append the table to the container
    
    i++;
    })
   
  })
  console.log(table);
  container.appendChild(table);

}