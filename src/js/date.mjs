export function getDate(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
    var today = new Date();
    var dd    = String(today.getDate()).padStart(2, '0');
    var mm    = months[today.getMonth()];
    var yyyy  = today.getFullYear();
  
    today = mm + " " + dd + ", " + yyyy;
    return today;
  }
  
getDate();