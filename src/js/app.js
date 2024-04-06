import { getDate } from "./utils.mjs";
import { fetchprimarylift, fetchaccessorylift, addPLift, addALift, savePrimaryLiftingDataToLocalStorage, saveAccessoryLiftingDataToLocalStorage } from "./lifts.mjs";
import { fetchcardio, addCardio, saveCardioDataToLocalStorage } from "./cardio.mjs";
import { saveJournalDataToLocalStorage } from "./journal.mjs";

// Define the handleRouteChange function
function handleRouteChange() {
    const path = window.location.pathname;
    let view;

    switch (path) {
        case '/':
            view = homeView();
            break;
        case '/day':
            view = dayWorkout();
            fetchprimarylift();
            fetchaccessorylift();
            addPLift();
            addALift();
            savePrimaryLiftingDataToLocalStorage();
            saveAccessoryLiftingDataToLocalStorage();
            break;
        case '/cardio':
            view = cardio();
            fetchcardio();
            addCardio();
            saveCardioDataToLocalStorage();
            break;
        case '/journal':
            view = journal();
            saveJournalDataToLocalStorage();
            break;
        case '/records':
            view = records();
            break;
        default:
            view = homeView();
    }

    // Render the view
    document.getElementById('app').innerHTML = view;
}

// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the router
    handleRouteChange();

    // Add event listeners to the route links
    document.querySelectorAll('.route').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            history.pushState(null, '', this.href);
            handleRouteChange();
        });
    });

    // Add event listener to the add lift button
    const addLiftButton = document.getElementById('addLiftButton');
    if (addLiftButton) {
        addLiftButton.addEventListener('click', addPLift);
    }

    // Add event listener to the add accessory button
    const addAccessoryButton = document.getElementById('addAccessoryButton');
    if (addAccessoryButton) {
        addAccessoryButton.addEventListener('click', addALift);
    }

    const submitliftsButton = document.getElementById('workoutToday');
    if (submitliftsButton) {
        submitliftsButton.addEventListener('click', savePrimaryLiftingDataToLocalStorage, saveAccessoryLiftingDataToLocalStorage)
    }



    //Add event listener to the add cardio button
    const addCardioButton = document.getElementById('addCardioButton');
    if (addCardioButton) {
        addCardioButton.addEventListener('click', addCardio);
    }
});

// Define the home view function
function homeView() {
    return ``;
}

// Define the day workout view function
function dayWorkout() {
    return `
    <h1>Today's Workout</h1>
    <div id="current-date">${getDate()}</div>

    <form>
        <fieldset>
            <legend>Primary Lifts</legend>
            <select name="primarylifts" id="primarylifts"></select>
            Sets:<input id="plsets" type="text" name="plsets">
            Reps:<input id="plreps" type="text" name="plreps">
            <input id="addLiftButton" type="button" value="Add Data">
        </fieldset>

        <fieldset>
            <legend>Accessory Lifts</legend>
            <select name="accessorylifts" id="accessorylifts"></select>
            Sets:<input id="alsets" type="text" name="alsets">
            Reps:<input id="alreps" type="text" name="alreps">
            <input id="addAccessoryButton" type="button" value="Add Data">
        </fieldset>
    </form>

    <table id="tbl" class="table" border="1">
        <thead>
            <th>Date</th> 
            <th>Primary Lift</th>
            <th>Sets</th>
            <th>Reps</th>
        </thead>
        <tbody></tbody>
    </table>

    <table id="tbl2" class="table" border="1">
        <thead>
            <th>Date</th> 
            <th>Accessory Lift</th>
            <th>Sets</th>
            <th>Reps</th>
        </thead>
        <tbody></tbody>
    </table>

    <button type="button" id="workoutToday">Submit</button>
    `;
}

// Define the cardio view function
function cardio() {
    return `
    <h1>Cardio</h1>
    <div id="current-date">${getDate()}</div>

    <form>
        <fieldset>
            <legend>Cardio</legend>
            <select name="cardio" id="cardio"></select>
            Time:<input id="ctime" type="text" name="ctime">
            Hours:<input id="chours" type="text" name="chours">
            Minutes:<input id="cminutes" type="text" name="cminutes">
            Miles:<input id="cmiles" type="text" name="cmiles">
            <input id="addCardioButton" type="button" value="Add Data">
        </fieldset>

        </fieldset>
    </form>
    
        <table id="tbl3" class="table" border="1">
            <thead>
                <th>Date</th> 
                <th>Exercise</th>
                <th>Time</th>
                <th>Hours</th>
                <th>Minutes</th>
                <th>Miles</th>
            </thead>
            <tbody></tbody>
        </table>

        <button type="button" id="cardioToday">Submit</button>

`;
}

// Define the journal view function
function journal() {
    return `<h1>Journal</h1>
            <h2>Create New Entry</h2>
            <div id="jdate">${getDate()}</div>
            Title: <input type="text" id="jinput" />
            Entry: <input type="text" id="jentry" />
            <button type="button" id="journalToday">Submit</button>
            `;
}

// Define the records view function
function records() {
    return `
    <h1>Records</h1>

    <fieldset>
        <legend>Primary Weight Training Entries</legend>
            <table id="exportedpl" class="table" border="1">
                <thead>
                <th>Date</th> 
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
                </thead>
            </table>
    </fieldset>

    <fieldset>
        <legend>Accessory Weight Training Entries</legend>
            <table id="exportedal" class="table" border="1">
                <thead>
                    <th>Date</th> 
                    <th>Exercise</th>
                    <th>Sets</th>
                    <th>Reps</th>
                </thead>
            </table>
    </fieldset>

    <fieldset>
        <legend>Cardio Entries</legend>
            <table id="exportedc" class="table" border="1">
                <thead>
                    <th>Date</th> 
                    <th>Exercise</th>
                    <th>Time</th>
                    <th>Hours</th> 
                    <th>Minutes</th>
                    <th>Miles</th>
                </thead>
            </table>
    </fieldset>

    <fieldset>
    <legend>Journal Entries</legend>
        <table id="exportedj" class="table" border="1">
            <thead>
                <th>Date</th> 
                <th>Title</th>
                <th>Entry</th>
            </thead>
        </table>
</fieldset>
    `;
}