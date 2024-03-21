import { getDate } from "./date.mjs";


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
    ${getDate()}
    
    <button type="button" id="workoutToday">Submit</button>
    `;
}

function weekWorkout() {
    return `<h1>This Week's Workout</h1>`;
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