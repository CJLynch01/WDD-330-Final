export function getDate(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
    var today = new Date();
    var dd    = String(today.getDate()).padStart(2, '0');
    var mm    = months[today.getMonth()];
    var yyyy  = today.getFullYear();
  
    today = mm + " " + dd + ", " + yyyy;
    return today;
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], {type: "text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.click();
}

export function exportplCSV(filename) {
    var csv = [];
    var table = document.getElementById("exportedpl")
    var rows = table.querySelectorAll("tr");
    
    var filename = 'primaryliftingdata'

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) {
            // If the cell value contains a comma, enclose it within double quotes
            var cellValue = cols[j].innerText;
            if (cellValue.includes(',')) {
                cellValue = '"' + cellValue + '"';
            }
            row.push(cellValue);
        }
        
        csv.push(row.join(","));        
    }

    downloadCSV(csv.join("\n"), filename);
}

export function exportalCSV(filename) {
    var csv = [];
    var table = document.getElementById("exportedal")
    var rows = table.querySelectorAll("tr");
    
    var filename = 'accessoryliftingdata'

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) {
            // If the cell value contains a comma, enclose it within double quotes
            var cellValue = cols[j].innerText;
            if (cellValue.includes(',')) {
                cellValue = '"' + cellValue + '"';
            }
            row.push(cellValue);
        }
        
        csv.push(row.join(","));        
    }

    downloadCSV(csv.join("\n"), filename);
}

export function exportcCSV(filename) {
    var csv = [];
    var table = document.getElementById("exportedc")
    var rows = table.querySelectorAll("tr");
    
    var filename = 'cardiodata'

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) {
            // If the cell value contains a comma, enclose it within double quotes
            var cellValue = cols[j].innerText;
            if (cellValue.includes(',')) {
                cellValue = '"' + cellValue + '"';
            }
            row.push(cellValue);
        }
        
        csv.push(row.join(","));        
    }

    downloadCSV(csv.join("\n"), filename);
}

export function exportjCSV(filename) {
    var csv = [];
    var table = document.getElementById("exportedj")
    var rows = table.querySelectorAll("tr");
    
    var filename = 'journaldata'

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) {
            // If the cell value contains a comma, enclose it within double quotes
            var cellValue = cols[j].innerText;
            if (cellValue.includes(',')) {
                cellValue = '"' + cellValue + '"';
            }
            row.push(cellValue);
        }
        
        csv.push(row.join(","));        
    }

    downloadCSV(csv.join("\n"), filename);
}