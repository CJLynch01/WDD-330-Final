


// Function to retrieve cardio data from local storage
export function getPrimaryDataFromLocalStorage() {
    const data = localStorage.getItem('primaryliftingData');
    return data ? JSON.parse(data) : [];
}

// Function to retrieve journal data from local storage
export function getAccessoryDataFromLocalStorage() {
    const data = localStorage.getItem('accessoryliftingData');
    return data ? JSON.parse(data) : [];
}

// Function to retrieve journal data from local storage
export function getCardioDataFromLocalStorage() {
    const data = localStorage.getItem('cardioData');
    return data ? JSON.parse(data) : [];
}

// Function to retrieve journal data from local storage
export function getJournalDataFromLocalStorage() {
    const data = localStorage.getItem('journalData');
    return data ? JSON.parse(data) : [];
}