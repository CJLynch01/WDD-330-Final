import { getDate } from "./utils.mjs";

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
        // console.error(`Table with ID '${tableId}' not found`);
        return;
    }
    const newRow = table.insertRow(-1);
    const cells = [];
    for (let i = 0; i < 5; i++) {
        cells[i] = newRow.insertCell(i);
    }
    return newRow;
}

let primaryliftingData = [];

export function addPLift() {
    const newRow = addRow("tbl");
    if (newRow) {
        const date1 = getDate();
        const primaryliftsValue = document.getElementById("primarylifts").value;
        const plsetsValue = document.getElementById("plsets").value;
        const plrepsValue = document.getElementById("plreps").value;

        newRow.cells[0].textContent = date1;
        newRow.cells[1].textContent = primaryliftsValue;
        newRow.cells[2].textContent = plsetsValue;
        newRow.cells[3].textContent = plrepsValue;
        newRow.cells[4].innerHTML = '<input type="button" id="deletePRow" value="Delete">';
    
        primaryliftingData.push({
            date1: date1,
            primaryliftsValue: primaryliftsValue,
            plsetsValue: plsetsValue,
            plrepsValue: plrepsValue,
        });
        // savePrimaryLiftingDataToLocalStorage(primaryliftingData);
    }

}

let accessoryliftingData = [];

export function addALift() {
    const newRow = addRow('tbl2');
    if (newRow) {
        const date2 = getDate();
        const accessoryliftsValue = document.getElementById("accessorylifts").value;
        const alsetsValue = document.getElementById("alsets").value;
        const alrepsValue = document.getElementById("alreps").value;

        newRow.cells[0].textContent = date2;
        newRow.cells[1].textContent = accessoryliftsValue;
        newRow.cells[2].textContent = alsetsValue;
        newRow.cells[3].textContent = alrepsValue;
        newRow.cells[4].innerHTML = '<input type="button" id="deletePRow" value="Delete">';
    
        accessoryliftingData.push({
            date2: date2,
            accessoryliftsValue: accessoryliftsValue,
            alsetsValue: alsetsValue,
            alrepsValue: alrepsValue,
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

document.addEventListener('click', function(event) {
    if (event.target.id === 'deleteARow') {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
        }
    }
});

// Function to save lifting data to local storage
export function savePrimaryLiftingDataToLocalStorage() {
    localStorage.setItem('primaryliftingData', JSON.stringify(primaryliftingData));
    console.log(primaryliftingData)
    // Optionally, provide feedback to the user
    alert('Primary Lifting data saved to local storage.');
}

export function saveAccessoryLiftingDataToLocalStorage() {
    localStorage.setItem('accessoryliftingData', JSON.stringify(accessoryliftingData));
    console.log(accessoryliftingData)
    // Optionally, provide feedback to the user
    alert('Accessory Lifting data saved to local storage.');
}

const submitliftsButton = document.getElementById('workoutToday');
if (submitliftsButton) {
    console.log(submitliftsButton)
    submitliftsButton.addEventListener('click', savePrimaryLiftingDataToLocalStorage())
    submitliftsButton.addEventListener('click', saveAccessoryLiftingDataToLocalStorage())
}