console.log("Hello, roni!");


const inputbox = document.querySelector("#divstyle");


const textfield = document.getElementsByClassName("textfield");


const button = document.querySelector(".Btn");


const box = document.querySelector(".box");


    function handleInput(e) {
    // 1. Skriv ut avsändaren (target) till konsolen
    console.log(e.target);

    // 2. Hämta name-attributet på fältet
    const fieldName = e.target.name;
    console.log(fieldName);

    // 3. Om det är fältet "content" → skriv värdet i div:en
    if (fieldName === "content") {
        box.textContent = e.target.value;
    }
    else {
        box.textContent = "Roni är kung";
    }
}


inputbox.addEventListener("change", () => {
    const colorField = textfields[0];          // första textfältet = color
    const colorValue = colorField.value;       // det användaren skrev
    box.style.backgroundColor = colorValue; 

});

button.addEventListener("click", () => {
    box.remove();
});

