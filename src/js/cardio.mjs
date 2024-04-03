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
        console.error(`Table with ID '${tableId}' not found`);
        return;
    }
    const newRow = table.insertRow(-1);
    const cells = [];
    for (let i = 0; i < 7; i++) {
        cells[i] = newRow.insertCell(i);
    }
    return newRow;
}

export function addCardio() {
    const newRow = addRow('tbl3');
    if (newRow) {
        const date = getDate();
        newRow.cells[0].textContent = date;
        newRow.cells[1].textContent = document.getElementById("cardio").value;
        newRow.cells[2].textContent = document.getElementById("ctime").value;
        newRow.cells[3].textContent = document.getElementById("chours").value;
        newRow.cells[4].textContent = document.getElementById("cminutes").value;
        newRow.cells[5].textContent = document.getElementById("cmiles").value;
        newRow.cells[6].innerHTML = '<input type="button" id="deletePRow" value="Delete">';
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