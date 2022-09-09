function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}


var isThemeDark = false;

function darkLightMode(){

    let calculator = document.querySelector(".calculator");
    calculator.classList.toggle("dark");
    


    let asdfg = document.querySelectorAll(".buttons");
    asdfg.forEach(element => {
        element.classList.toggle("darkMode");
    });

    let resultbox = document.querySelector(".resultBox");
    resultbox.classList.toggle("DarkThema");

    const bodyElement = document.body;

    if (isThemeDark){
        bodyElement.style = "background-color:#07D2C7;";
        isThemeDark = false;
    } else{
        bodyElement.style = "background-color:black;";
        isThemeDark = true;
    }
    

}
