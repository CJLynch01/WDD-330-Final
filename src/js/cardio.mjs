import { getDate } from "./utils.mjs";

const url3 = "../json/cardio.json";

export function fetchcardio() {
    fetch(url3)
        .then(res => res.json())
        .then(data => loadList(data, 'cardio'))
        .catch(err => console.error(err));
}

function loadList(data, selectId) {
    const select = document.getElementById(selectId);
    select.innerHTML = '';
    for (const key in data) {
        const list = data[key];
        for (const item of list) {
            const option = document.createElement("option");
            option.text = item;
            option.value = item;
            select.appendChild(option);
        }
    }
}

export function addRow(tableId) {
    const table = document.getElementById(tableId);
    if (!table) {
        return;
    }
    const newRow = table.insertRow(-1);
    const cells = [];
    for (let i = 0; i < 7; i++) {
        cells[i] = newRow.insertCell(i);
    }
    return newRow;
}

let cardioData = [];

export function addCardio() {
    const newRow = addRow('tbl3');
    if (newRow) {
        const date3 = getDate();
        const cardioValue = document.getElementById("cardio").value;
        const ctimeValue = document.getElementById("ctime").value;
        const choursValue = document.getElementById("chours").value;
        const cminutesValue = document.getElementById("cminutes").value;
        const cmilesValue = document.getElementById("cmiles").value;

        newRow.cells[0].textContent = date3;
        newRow.cells[1].textContent = cardioValue;
        newRow.cells[2].textContent = ctimeValue;
        newRow.cells[3].textContent = choursValue;
        newRow.cells[4].textContent = cminutesValue;
        newRow.cells[5].textContent = cmilesValue;
        newRow.cells[6].innerHTML = '<input type="button" id="deletePRow" value="Delete">';
    
        cardioData.push({
            date3: date3,
            exercise: cardioValue,
            time: ctimeValue,
            hours: choursValue,
            minutes: cminutesValue,
            miles: cmilesValue
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

export function saveCardioDataToLocalStorage() {
    let storedFormData3 = JSON.parse(localStorage.getItem('cardioData')) || [];
    console.log(storedFormData3)
    if(!Array.isArray(storedFormData3)){
        storedFormData3 = [];
    }
    storedFormData3 = storedFormData3.concat(cardioData);
    localStorage.setItem('cardioData', JSON.stringify(storedFormData3));
    // Optionally, provide feedback to the user
    alert('Cardio data saved to local storage.');
}

const submitcardioButton = document.getElementById('cardioToday');
if (submitcardioButton) {
    console.log(submitcardioButton)
    submitcardioButton.addEventListener('click', saveCardioDataToLocalStorage())
}