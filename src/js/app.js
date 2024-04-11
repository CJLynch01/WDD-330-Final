import { getDate } from "./utils.mjs";
import { fetchprimarylift, fetchaccessorylift, addPLift, addALift, savePrimaryLiftingDataToLocalStorage, saveAccessoryLiftingDataToLocalStorage } from "./lifts.mjs";
import { fetchcardio, addCardio, saveCardioDataToLocalStorage } from "./cardio.mjs";
import { addJournal, saveJournalDataToLocalStorage } from "./journal.mjs";
import { visualizer } from "./music";
import { displayAccessoryLiftingDataFromLocalStorage, displayPrimaryLiftingDataFromLocalStorage, displayCardioDataFromLocalStorage, displayJournalDataFromLocalStorage } from "./records.mjs";
import { exportplCSV, exportalCSV, exportcCSV, exportjCSV } from "./utils.mjs";
import { displayResults } from "./weather.mjs";

window.onload = function(){
    visualizer();
    displayResults();
}

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
            break;
        case '/cardio':
            view = cardio();
            fetchcardio();
            break;
        case '/journal':
            view = journal();
            break;
        case '/records':
            view = records();
            break;
        default:
            view = homeView();
    }

    // Render the view
    document.getElementById('app').innerHTML = view;

    if (path === '/day') {
        document.getElementById('workoutToday').addEventListener('click', savePrimaryLiftingDataToLocalStorage);
        document.getElementById('workoutToday').addEventListener('click', saveAccessoryLiftingDataToLocalStorage);
        document.getElementById('addLiftButton').addEventListener('click', addPLift);
        document.getElementById('addAccessoryButton').addEventListener('click', addALift);    
    }

    if (path === '/cardio') {
        document.getElementById('cardioToday').addEventListener('click', saveCardioDataToLocalStorage);
        document.getElementById('addCardioButton').addEventListener('click', addCardio);
    }

    if (path === '/journal') {
        document.getElementById('journalToday').addEventListener('click', saveJournalDataToLocalStorage);
        document.getElementById('addJournalButton').addEventListener('click', addJournal);
    }

    if (path === '/records') {
        displayPrimaryLiftingDataFromLocalStorage();
        displayAccessoryLiftingDataFromLocalStorage();
        displayCardioDataFromLocalStorage();
        displayJournalDataFromLocalStorage();
        document.getElementById('exportplcsv').addEventListener('click', exportplCSV);
        document.getElementById('exportalcsv').addEventListener('click', exportalCSV);
        document.getElementById('exportccsv').addEventListener('click', exportcCSV);
        document.getElementById('exportjcsv').addEventListener('click', exportjCSV);
    }
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
            Weight:<input id="plweight" type="text" name="plweight">
            Sets:<input id="plsets" type="text" name="plsets">
            Reps:<input id="plreps" type="text" name="plreps">
            <input id="addLiftButton" type="button" value="Add Data">
        </fieldset>

        <fieldset>
            <legend>Accessory Lifts</legend>
            <select name="accessorylifts" id="accessorylifts"></select>
            Weight:<input id="alweight" type="text" name="alweight">
            Sets:<input id="alsets" type="text" name="alsets">
            Reps:<input id="alreps" type="text" name="alreps">
            <input id="addAccessoryButton" type="button" value="Add Data">
        </fieldset>
    </form>

    <div class="scrollable">
        <table id="tbl" class="table" border="1">
            <thead>
                <th>Date</th> 
                <th>Primary Lift</th>
                <th>Weight</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Remove</th>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <div class="scrollable">
        <table id="tbl2" class="table" border="1">
            <thead>
                <th>Date</th> 
                <th>Accessory Lift</th>
                <th>Weight</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Remove</th>
            </thead>
            <tbody></tbody>
        </table>
    </div>

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
    
        <div class="scrollable">
            <table id="tbl3" class="table" border="1">
                <thead>
                    <th>Date</th> 
                    <th>Exercise</th>
                    <th>Time</th>
                    <th>Hours</th>
                    <th>Minutes</th>
                    <th>Miles</th>
                    <th>Remove</th>
                </thead>
                <tbody></tbody>
            </table>
        </div>

        <button type="button" id="cardioToday">Submit</button>

`;
}

// Define the journal view function
function journal() {
    return `
    <h1>Journal</h1>
    <div id="jdate">${getDate()}</div>

    <form>
        <fieldset>
            <legend>Create New Entry</legend>
            Title: <input type="text" id="jinput" name="jinput">
            Entry: <input type="text" id="jentry" name="jentry">
            <input id="addJournalButton" type="button" value="Add Data">
        </fieldset>
    </form>  

        <div class="scrollable">
            <table id="tbl4" class="table" border="1">
                <thead>
                    <th>Date</th> 
                    <th>Title</th>
                    <th>Entry</th>
                    <th>Remove</th>
                </thead>
                <tbody></tbody>
            </table>
        </div>

    <button type="button" id="journalToday">Submit</button>

            `;
}

// Define the records view function
function records() {
    return `
    <h1>Records</h1>

        <fieldset>
            <legend>Primary Weight Training Entries</legend>
            <button type="button" id="exportplcsv">Export Primary Lifting Data To CSV</button>
            <div class="scrollable">
                <table id="exportedpl" class="table" border="1">
                    <thead>
                        <tr>
                            <th>Date</th> 
                            <th>Exercise</th>
                            <th>Weight</th>
                            <th>Sets</th>
                            <th>Reps</th>
                        </tr>
                    </thead>
                    <tbody id="exportedbodypl">
                    </tbody>
                </table>
            </div>
        </fieldset>

        <fieldset>
            <legend>Accessory Weight Training Entries</legend>
            <button type="button" id="exportalcsv">Export Accessory Lifting Data To CSV</button>
            <div class="scrollable">
                <table id="exportedal" class="table" border="1">
                    <thead>
                        <tr>
                            <th>Date</th> 
                            <th>Exercise</th>
                            <th>Weight</th>
                            <th>Sets</th>
                            <th>Reps</th>
                        </tr>
                    </thead>
                    <tbody id="exportedbodyal">
                    </tbody>
                </table>
            </div>   
        </fieldset>   

        <fieldset>
            <legend>Cardio Entries</legend>
            <button type="button" id="exportccsv">Export Cardio Data To CSV</button>
            <div class="scrollable">
                <table id="exportedc" class="table" border="1">
                    <thead>
                        <tr>
                            <th>Date</th> 
                            <th>Exercise</th>
                            <th>Time</th>
                            <th>Hours</th> 
                            <th>Minutes</th>
                            <th>Miles</th>
                        </tr>
                    </thead>
                    <tbody id="exportedbodyc">
                    </tbody>
                </table>
            </div>
        </fieldset>

        <fieldset>
        <legend>Journal Entries</legend>
        <button type="button" id="exportjcsv">Export Journal Data To CSV</button>
        <div class="scrollable">
            <table id="exportedj" class="table" border="1">
                <thead>
                    <tr>
                        <th>Date</th> 
                        <th>Title</th>
                        <th>Entry</th>
                    </tr>
                </thead>
                <tbody id="exportedbodyj">
                </tbody>
            </table>
        </div>
    </fieldset>
</div>
    `;
}