document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('expenseTable');
    const rows = table.getElementsByTagName('tr');
  
    // Start from index 1 to skip the table header row
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      const given = parseInt(cells[1].innerText);
      const taken = parseInt(cells[2].innerText);
  
      let actionButton;
      if (given > taken) {
        actionButton = '<button class="settle-button">Settle</button>';
      } else if (taken > given) {
        actionButton = '<button class="reminder-button">Reminder</button>';
      } else {
        actionButton = '<p>✅</p>'; // Renders a tick mark if both columns are equal
      }
  
      cells[3].innerHTML = actionButton;
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('checkButton');
    const submitButton = document.getElementById('submitButton');
    const groupNameInput = document.getElementById('groupName');
  
    checkButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default button behavior for demo purposes
  
      // Check if there's input in the groupName field
      if (groupNameInput.value.trim() !== '') {
        checkButton.style.display = 'none'; // Hide the 'check' button
        submitButton.style.display = 'inline-block'; // Show the 'submit' button
      }
    });
  
    groupNameInput.addEventListener('input', function() {
      checkButton.style.display = 'inline-block'; // Show the 'check' button when input changes
      submitButton.style.display = 'none'; // Hide the 'submit' button
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const amountInput = document.getElementById("Amount");
    const splitButton = document.getElementById("Split-button");
    const splitEqualRadio = document.getElementById('split-equal');
    const splitUnequalRadio = document.getElementById('split-unequal');
    const unequalTable = document.getElementById('unequalSplitTable');
    let isUnequalTableVisible = false;
  
    splitButton.style.display = 'none';
    unequalTable.style.display = 'none';
  
    amountInput.addEventListener("input", function() {
      const amount = parseFloat(amountInput.value);
  
      if (splitEqualRadio.checked) {
        splitButton.style.display = isNaN(amount) ? 'none' : 'inline-block';
        renderUnequalTable([]);
        unequalTable.style.display = 'none';
        isUnequalTableVisible = false;
      } else if (splitUnequalRadio.checked && !isUnequalTableVisible) {
        splitButton.style.display = totalUnequalAmount() === amount ? 'inline-block' : 'none';
      }
    });
  
    function renderUnequalTable(names) {
      unequalTable.innerHTML = '';
      names.forEach(name => {
        const row = document.createElement('tr');
        const nameColumn = document.createElement('td');
        const inputColumn = document.createElement('td');
        const inputField = document.createElement('input');
  
        inputField.setAttribute('type', 'number');
        inputField.setAttribute('placeholder','0');
        inputField.addEventListener('input', function() {
          const amount = parseFloat(amountInput.value);
          splitButton.style.display = totalUnequalAmount() === amount ? 'inline-block' : 'none';
        });
  
        nameColumn.textContent = name;
        inputColumn.appendChild(inputField);
  
        row.appendChild(nameColumn);
        row.appendChild(inputColumn);
        unequalTable.appendChild(row);
      });
      
    }
  
    function totalUnequalAmount() {
      const splitAmountInputs = document.querySelectorAll('#unequalSplitTable input[type="number"]');
      let totalAmount = 0;
  
      splitAmountInputs.forEach(input => {
        if (input.value.trim() !== '') {
          totalAmount += parseFloat(input.value);
        }
      });
  
      return totalAmount;
    }
  
    splitEqualRadio.addEventListener('change', function() {
      const amount = parseFloat(amountInput.value);
      splitButton.style.display = isNaN(amount) ? 'none' : 'inline-block';
      renderUnequalTable([]);
      unequalTable.style.display = 'none';
      isUnequalTableVisible = false;
    });
  
    splitUnequalRadio.addEventListener('change', function() {
      const amount = parseFloat(amountInput.value);
      if (!isUnequalTableVisible) {
        splitButton.style.display = totalUnequalAmount() === amount ? 'inline-block' : 'none';
      }
      const names = ['Member 1', 'Member 2', 'Member 3','Member 4']; // Replace with your desired member names
      renderUnequalTable(names);
      unequalTable.style.display = 'block';
      isUnequalTableVisible = true;
    });
  
    splitButton.style.paddingTop = '10px'; // Adjust the padding-top for the Split button
  });
  
  
  
  
  
  
    