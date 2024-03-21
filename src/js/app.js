import { getDate } from "./date.mjs";


    // Logic to render the view based on the path


window.addEventListener('popstate', handleRouteChange);

// Initialize the router
handleRouteChange();

function homeView() {
    return `<h1>Home Page</h1>`;
}


function dayWorkout() {
    // currentDate = getDate()
    return `<h1>Today's Workout</h1>
    ${getDate()}
    
    <button type="button" id="saveToday>Submit</button>
    `;
}

// Update handleRouteChange to render views
function handleRouteChange() {
    const path = window.location.pathname;
    let view;

    switch (path) {
        case '/day':
            view = dayWorkout();
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