export function getDate(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
    var today = new Date();
    var dd    = String(today.getDate()).padStart(2, '0');
    var mm    = months[today.getMonth()];
    var yyyy  = today.getFullYear();
  
    today = mm + " " + dd + ", " + yyyy;
    return today;
}

export function saveLiftingDataToLocalStorage() {
    const liftingTodayButton = document.getElementById('workoutToday');
    if (liftingTodayButton) {
        liftingTodayButton.addEventListener('click', function() {
            // Get data from input fields
            const date1 = getDate();
            const primaryLift = document.getElementById('primarylifts').value;
            const set1 = document.getElementById('pset').value;
            const rep1 = document.getElementById('prep').value;

            const date2 = getDate();
            const accessoryLift = document.getElementById('accessorylifts').value;
            const set2 = document.getElementById('aset').value;
            const rep2 = document.getElementById('arep').value;
            
            // Create an object to store the data
            const primaryliftingData = {
                date1: date1,
                primaryLift: primaryLift,
                set1: set1,
                rep1: rep1,
            };

            const accessoryliftingData = {
                date2: date2,
                accessoryLift: accessoryLift,
                set2: set2,
                rep2: rep2,
            };

            // Save the data to local storage
            localStorage.setItem('primaryliftingData', JSON.stringify(primaryliftingData));
            localStorage.setItem('accessoryliftingData', JSON.stringify(accessoryliftingData));

            // Optionally, you can provide some feedback to the user
            alert('Cardio data saved to local storage.');
        });
    }
}

export function saveCardioDataToLocalStorage() {
    const cardioTodayButton = document.getElementById('cardioToday');
    if (cardioTodayButton) {
        cardioTodayButton.addEventListener('click', function() {
            // Get data from input fields
            const date = getDate();
            const exercise = document.getElementById('cardio').value;
            const time = document.getElementById('ctime').value;
            const hours = document.getElementById('chours').value;
            const minutes = document.getElementById('cminutes').value;
            const miles = document.getElementById('cmiles').value;

            // Create an object to store the data
            const cardioData = {
                date: date,
                exercise: exercise,
                time: time,
                hours: hours,
                minutes: minutes,
                miles: miles
            };

            // Save the data to local storage
            localStorage.setItem('cardioData', JSON.stringify(cardioData));

            // Optionally, you can provide some feedback to the user
            alert('Cardio data saved to local storage.');
        });
    }
}

export function saveJournalDataToLocalStorage() {
    const journalTodayButton = document.getElementById('journalToday');
    if (journalTodayButton) {
        journalTodayButton.addEventListener('click', function() {
            // Get data from input fields
            const date3 = getDate();
            const title = document.getElementById('jinput').value;
            const entry = document.getElementById('jentry').value;

            // Create an object to store the data
            const journalData = {
                date3: date3,
                title: title,
                entry: entry,
            };

            // Save the data to local storage
            localStorage.setItem('journalData', JSON.stringify(journalData));

            // Optionally, you can provide some feedback to the user
            alert('Cardio data saved to local storage.');
        });
    }
}