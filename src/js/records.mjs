import { getLocalStorage } from "./utils.mjs";


// ------------------Primary Lift 
export function displayPrimaryLiftingDataFromLocalStorage() {
    // Retrieve primary lifting data from local storage
    const storedData1 = getLocalStorage('primaryliftingData');
    const outputElement1 = document.getElementById('exportedbodypl');
    renderListWithTemplate(primaryLiftTemplate, outputElement1, storedData1)
}

let primaryliftNew = "";

export function renderListWithTemplate(
    templateFn,
    parentElement,
    list,
    position = "afterbegin",
    clear = true
  ) {
    if (clear) {
      parentElement.innerHTML = "";
      primaryliftNew = "";
    }
    list.forEach(primaryLiftTemplate)
    parentElement.insertAdjacentHTML(position, primaryliftNew + "");
}

export function primaryLiftTemplate(item1) {
    const newItem1 = `
    <tr>
        <td>${item1.date1}</td>
        <td>${item1.primaryliftsValue}</td>
        <td>${item1.plweightValue}</td>
        <td>${item1.plsetsValue}</td>
        <td>${item1.plrepsValue}</td>
    </tr>
    `;

    primaryliftNew = primaryliftNew + newItem1
}

// ------------------Accessory Lift 
export function displayAccessoryLiftingDataFromLocalStorage() {
    // Retrieve primary lifting data from local storage
    const storedData2 = getLocalStorage('accessoryliftingData');
    const outputElement2 = document.getElementById('exportedbodyal');
    renderListWithTemplate2(accessoryLiftTemplate, outputElement2, storedData2)
}

let accessoryliftNew = "";

export function renderListWithTemplate2(
    templateFn,
    parentElement,
    list,
    position = "afterbegin",
    clear = true
  ) {
    if (clear) {
      parentElement.innerHTML = "";
      accessoryliftNew = "";
    }
    list.forEach(accessoryLiftTemplate)
    // const htmlString = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, accessoryliftNew + "");
}

export function accessoryLiftTemplate(item2) {
    const newItem2 = `
    <tr>
        <td>${item2.date2}</td>
        <td>${item2.accessoryliftsValue}</td>
        <td>${item2.alweightValue}</td>
        <td>${item2.alsetsValue}</td>
        <td>${item2.alrepsValue}</td>
    </tr>
    `;

    accessoryliftNew = accessoryliftNew + newItem2
}

// ------------------Cardio 
export function displayCardioDataFromLocalStorage() {
    // Retrieve primary lifting data from local storage
    const storedData3 = getLocalStorage('cardioData');
    const outputElement3 = document.getElementById('exportedbodyc');
    renderListWithTemplate3(cardioTemplate, outputElement3, storedData3);
}

let cardioNew = "";

export function renderListWithTemplate3(
    templateFn,
    parentElement,
    list,
    position = "afterbegin",
    clear = true
  ) {
    if (clear) {
      parentElement.innerHTML = "";
      cardioNew = "";
    }
    list.forEach(cardioTemplate);
    parentElement.insertAdjacentHTML(position, cardioNew + "");
}

export function cardioTemplate(item3) {
    const newItem3 = `
    <tr>
        <td>${item3.date3}</td>
        <td>${item3.exercise}</td>
        <td>${item3.time}</td>
        <td>${item3.hours}</td>
        <td>${item3.minutes}</td>
        <td>${item3.miles}</td>
    </tr>
    `;
    cardioNew = cardioNew + newItem3
}

// ------------------Journal 
export function displayJournalDataFromLocalStorage() {
    // Retrieve primary lifting data from local storage
    const storedData4 = getLocalStorage('journalData');
    const outputElement4 = document.getElementById('exportedbodyj');
    renderListWithTemplate4(journalTemplate, outputElement4, storedData4);
}

let journalNew = "";

export function renderListWithTemplate4(
    templateFn,
    parentElement,
    list,
    position = "afterbegin",
    clear = true
  ) {
    if (clear) {
      parentElement.innerHTML = "";
      journalNew = "";
    }
    list.forEach(journalTemplate)
    // const htmlString = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, journalNew + "");
}

export function journalTemplate(item4) {
    const newItem4 = `
    <tr>
        <td>${item4.date4}</td>
        <td>${item4.title}</td>
        <td>${item4.entry}</td>
    </tr>
    `;

    journalNew = journalNew + newItem4
}