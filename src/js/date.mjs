export function getDate(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
    var today = new Date();
    var dd    = String(today.getDate()).padStart(2, '0');
    var mm    = months[today.getMonth()];
    var yyyy  = today.getFullYear();
  
    today = mm + " " + dd + ", " + yyyy;
    return today;
}

export function getSunday() {
    var sunday = 0;
    var fromDate = new Date(); //or any date you calculate from
    fromDate.setDate(fromDate.getDate() + (7 - fromDate.getDay()) + sunday);
        
    return fromDate.toLocaleDateString()
}

export function getMonday() {
    var monday = 1;
    var fromDate = new Date(); //or any date you calculate from
    fromDate.setDate(fromDate.getDate() + (7 - fromDate.getDay()) + monday);
        
    return fromDate.toLocaleDateString()
}

export function getTuesday() {
    var tuesday = 2;
    var fromDate = new Date(); //or any date you calculate from
    fromDate.setDate(fromDate.getDate() + (7 - fromDate.getDay()) + tuesday);
        
    return fromDate.toLocaleDateString()
}

export function getWednesday() {
    var wednesday = 3;
    var fromDate = new Date(); //or any date you calculate from
    fromDate.setDate(fromDate.getDate() + (7 - fromDate.getDay()) + wednesday);
        
    return fromDate.toLocaleDateString()
}

export function getThursday() {
    var thursday = 4;
    var fromDate = new Date(); //or any date you calculate from
    fromDate.setDate(fromDate.getDate() + (7 - fromDate.getDay()) + thursday);
        
    return fromDate.toLocaleDateString()
}

export function getFriday() {
    var friday = 5;
    var fromDate = new Date(); //or any date you calculate from
    fromDate.setDate(fromDate.getDate() + (7 - fromDate.getDay()) + friday);
        
    return fromDate.toLocaleDateString()
}

export function getSaturday() {
    var saturday = 6;
    var fromDate = new Date(); //or any date you calculate from
    fromDate.setDate(fromDate.getDate() + (7 - fromDate.getDay()) + saturday);
        
    return fromDate.toLocaleDateString()
}