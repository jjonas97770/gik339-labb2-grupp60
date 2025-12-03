console.log("Hello, roni!");

const inputbox = document.querySelector("#divstyle"); // bare minimum //

const textfield = document.getElementsByClassName("textfield"); // bare minimum //

const button = document.querySelector(".Btn"); // bare minimum //

const box = document.querySelector(".box"); // bare minimum //

function handleInput(e) {  // bare minimum //
 

  // 1. Skriv ut avsändaren (target) till konsolen   // bare minimum //
  console.log(e.target); 

  // 2. Hämta name-attributet på fältet
  const fieldName = e.target.name; // bare minimum //

  console.log(fieldName);

  // 3. Om det är fältet "content" → skriv värdet i div:en
  if (fieldName === "content") {
    // bare minimum //

    box.textContent = e.target.value;
  } else {
    box.textContent = "Roni är kung"; // bare minimum //
  }
}

inputbox.addEventListener("change", () => {     // bare minimum //


  const colorField = textfields[0]; // första textfältet = color
  const colorValue = colorField.value; // det användaren skrev
  box.style.backgroundColor = colorValue;
});

button.addEventListener("click", () => {   // bare minimum //


  box.remove();
});


