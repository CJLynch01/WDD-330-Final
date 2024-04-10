import { getDate } from "./utils.mjs";

export function addRow(tableId) {
    const table = document.getElementById(tableId);
    if (!table) {
        return;
    }
    const newRow = table.insertRow(-1);
    const cells = [];
    for (let i = 0; i < 4; i++) {
        cells[i] = newRow.insertCell(i);
    }
    return newRow;
}

let journalData = [];

export function addJournal() {
    const newRow = addRow('tbl4');
    if (newRow) {
        const date4 = getDate();
        const jinputValue = document.getElementById("jinput").value;
        const jentryValue = document.getElementById("jentry").value;
    
        newRow.cells[0].textContent = date4;
        newRow.cells[1].textContent = jinputValue;
        newRow.cells[2].textContent = jentryValue;
        newRow.cells[3].innerHTML = '<input type="button" id="deletePRow" value="Delete">';


        journalData.push({
            date4: date4,
            title: jinputValue,
            entry: jentryValue,
        });
    }
}

export function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

document.addEventListener('click', function(event) {
    if (event.target.id === 'deletePRow') {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
        }
    }
});

export function saveJournalDataToLocalStorage() {
    let storedFormData4 = JSON.parse(localStorage.getItem('journalData')) || [];
    console.log(storedFormData4)
    if(!Array.isArray(storedFormData4)) {
        storedFormData4 = [];
    }
    storedFormData4 = storedFormData4.concat(journalData);
    localStorage.setItem('journalData', JSON.stringify(storedFormData4));
    console.log(storedFormData4)
    // Optionally, provide feedback to the user
    alert('Journal data saved to local storage.');
}

const submitjournalButton = document.getElementById('journalToday');
if (submitjournalButton) {
    console.log(submitjournalButton)
    submitjournalButton.addEventListener('click', saveJournalDataToLocalStorage())
}