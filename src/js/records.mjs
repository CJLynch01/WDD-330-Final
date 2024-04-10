import { getLocalStorage } from "./utils.mjs";


export function displayPrimaryLiftingDataFromLocalStorage() {
    // Retrieve primary lifting data from local storage
    const storedData = getLocalStorage('primaryliftingData');
    const outputElement1 = document.getElementById('exportedbodypl');
    console.log(storedData)
    renderListWithTemplate(primaryLiftTemplate, outputElement1, storedData)
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
    console.log(list)
    list.forEach(primaryLiftTemplate)
    console.log(primaryliftNew)
    // const htmlString = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, primaryliftNew + "");
}

export function primaryLiftTemplate(item) {
    const newItem = `
    <tr>
        <td>${item.date1}</td>
        <td>${item.primaryliftsValue}</td>
        <td>${item.plsetsValue}</td>
        <td>${item.plrepsValue}</td>
    </tr>
    `;

    primaryliftNew = primaryliftNew + newItem
}