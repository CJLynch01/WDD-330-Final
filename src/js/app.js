import { getDate,getSunday,getMonday,getTuesday,getWednesday,getThursday,getFriday,getSaturday } from "./date.mjs";
    // Logic to render the view based on the path


window.addEventListener('popstate', handleRouteChange);

// Initialize the router
handleRouteChange();

function homeView() {
    return ``;
}


function dayWorkout() {
    // currentDate = getDate()
    return `<h1>Today's Workout</h1>
    <div id="current-date">${getDate()}</div>

    <form>
        <fieldset>
        <legend>Primary Lifts</legend>
        <select name="primarylifts" id="primarylifts"></select>
            Sets:<input id="pset" type="text" name="plsets">
            Reps:<input id="prep" type="text" name="plreps">
        </fieldset>

        <fieldset>
        <legend>Accessory Lifts</legend>
        <select name="accessorylifts" id="accessorylifts"></select>
            Sets:<input type="text" name="alsets">
            Reps:<input type="text" name="alreps">
        </fieldset>
        
        <input type="button" name="add" value="Add Data" onclick="addLift();" class="btn btn-success">
    
    </form>

    <table id="tbl" class="table" border="1">
        <thead>
            <th>Date</th> 
            <th>Lift</th>
            <th>Sets</th>
            <th>Reps</th>
        </thead>
        <tbody>
         
        </tbody>
    </table>

    
    <button type="button" id="workoutToday">Submit</button>

    
    `;
}

function weekWorkout() {
    return `<h1>Next Week's Workouts</h1>
    
    <h2>Sunday: ${getSunday()}</h2>
    <h2>Monday: ${getMonday()}</h2>
    <h2>Tuesday: ${getTuesday()}</h2>
    <h2>Wednesday: ${getWednesday()}</h2>
    <h2>Thursday: ${getThursday()}</h2>
    <h2>Friday: ${getFriday()}</h2>
    <h2>Saturday: ${getSaturday()}</h2>

    `;
}

function journal() {
    return `<h1>Journal</h1>`;
}

// Update handleRouteChange to render views
function handleRouteChange() {
    const path = window.location.pathname;
    let view;

    switch (path) {
        case '/day':
            view = dayWorkout();
            break;

        case '/week':
            view = weekWorkout();
            break;

        case `/journal`:
            view = journal();
            break;

        default:
            view = homeView();
    }

    document.getElementById('app').innerHTML = view;
}

document.querySelectorAll('.route').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        history.pushState(null, '', this.href);
        handleRouteChange();
    });
});