// Uppgift 4  dom funktioner 

// 1. Checkboxen – getElementById
const checkbox = document.getElementById("divStyle");

// 2. Alla textfält – getElementsByClassName
const textfields = document.getElementsByClassName("textfield");

// 3. Knappen – querySelector på klass
const button = document.querySelector(".Btn");

// 4. Div-rutan – getElementById
const box = document.querySelector("#box");





//  Uppgift 5  fördefinierad funktion 
function handleInput(e) {
  // Skriv ut avsändaren (target) till konsolen
  console.log(e.target);

  //  Läs name-attributet och skriv ut det
  const fieldName = e.target.name;
  console.log(fieldName);

  // Om name/id är "content"  skriv värdet till div-elementet
  if (fieldName === "content") {
    box.innerHTML = e.target.value;
  } 
}

// Uppgift 6  eventlyssnare 

// a) Textfälten  kör handleInput när man skriver
for (let i = 0; i < textfields.length; i++) {
  textfields[i].addEventListener("input", handleInput);
}

// b) Checkboxen – ändra bakgrundsfärg på box utifrån färg-fältet
checkbox.addEventListener("change", function () {
  const colorField = textfields[0];      // första textfältet = färg
  let colorValue = colorField.value;     // det användaren skrev

  box.style.backgroundColor = colorValue;
});

// c) Knappen  ta bort div-elementet
button.addEventListener("click", function () {
  box.remove();
});