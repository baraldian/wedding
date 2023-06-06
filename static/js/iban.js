function displayInfo() {
    const name = "Andrea Baraldi";
    const iban = "IT90A062305";
    const surname = "CRÉDIT AGRICOLE ITALIA S.P.A." +
        "Filiale di RONCOFERRARO 46037";
    const iban2 = "7890000040393310";
    const infoDiv = document.getElementById("info");
    infoDiv.innerHTML = `${name} </br>${surname}<br> <span id="iban">${iban}${iban2}</span>`;
    const ibanElement = document.getElementById("iban");
    // ibanElement.style.cursor = "pointer";
    // ibanElement.addEventListener("click", selectAndCopyIBAN);
    document.getElementById("show-iban").style.display = "none";
}

function copyIBAN() {
    const ibanElement = document.getElementById("iban");
    const ibanText = ibanElement.innerText.replace(/\s/g, ""); // remove spaces from IBAN
    navigator.clipboard.writeText(ibanText);
    alert(`IBAN copiato ${ibanText} to clipboard!`);
}

function selectAndCopyIBAN() {
    const ibanElement = document.getElementById("iban");
    const ibanText = ibanElement.innerText;
    const range = document.createRange();
    range.selectNodeContents(ibanElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    navigator.clipboard.writeText(ibanText);
    alert(`IBAN copiato.`);
}