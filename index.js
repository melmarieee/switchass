var comButtons = document.querySelectorAll("button").length;
console.log(comButtons);

for (var i = 0; i < comButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){

    var commercial = this.innerText;
    console.log("commercial");
    switch (commercial) {
        case "Mcdo":
            var Mcdo = new Audio("sounds/Mcdo.mp3");
            Mcdo.play();
            break;

        case "Sm":
            var Sm = new Audio("sounds/Sm.mp3");
            Sm.play();
            break;

        case "Jollibee":
            var Jollibee = new Audio("sounds/Jollibee.mp3");
            Jollibee.play();
            break;

        case "Selecta":
            var Selecta = new Audio("sounds/Selecta.mp3");
            Selecta.play();
            break;

        case "Rexona":
            var Rexona = new Audio("sounds/Rexona.mp3");
            Rexona.play();
            break;

        case "Ritemed":
            var Ritemed = new Audio("sounds/Ritemed.mp3");
            Ritemed.play();
            break;

        default:
            break;
        }
    });
}