import { getDate } from "./date.mjs";

const url1 = "../json/primary.json";
const url2 = "../json/accessory.json";

export function fetchprimarylift() {
    fetch(url1)
        .then(res => res.json())
        .then(data => loadList(data, 'primarylifts'))
        .catch(err => console.error(err));
}

export function fetchaccessorylift() {
    fetch(url2)
        .then(res => res.json())
        .then(data => loadList(data, 'accessorylifts'))
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
    for (let i = 0; i < 5; i++) {
        cells[i] = newRow.insertCell(i);
    }
    return newRow;
}

export function addPLift() {
    const newRow = addRow('tbl');
    if (newRow) {
        const date = getDate();
        newRow.cells[0].textContent = date;
        newRow.cells[1].textContent = document.getElementById("primarylifts").value;
        newRow.cells[2].textContent = document.getElementById("plsets").value;
        newRow.cells[3].textContent = document.getElementById("plreps").value;
        newRow.cells[4].innerHTML = '<input type="button" id="deletePRow" value="Delete">';
    }
}

export function addALift() {
    const newRow = addRow('tbl2');
    if (newRow) {
        const date = getDate();
        newRow.cells[0].textContent = date;
        newRow.cells[1].textContent = document.getElementById("accessorylifts").value;
        newRow.cells[2].textContent = document.getElementById("alsets").value;
        newRow.cells[3].textContent = document.getElementById("alreps").value;
        newRow.cells[4].innerHTML = '<input type="button" id="deleteARow" value="Delete">';
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

document.addEventListener('click', function(event) {
    if (event.target.id === 'deleteARow') {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
        }
    }
});