/*document.querySelector("html").addEventListener("click", function(){
    alert("Pare de me cutucar!");
});*/

    const myImage = document.querySelector("img");
    myImage.onclick = () => { //Considera uma função;
        let mySrc = myImage.getAttribute("src");
        if(mySrc === "images/messi.jpg"){
            myImage.setAttribute("src","images/copamessi.jpg");
        }else{
            myImage.setAttribute("src", "images/messi.jpg");
        }
    };


    let myButton = document.querySelector("button");
    let myHead = document.querySelector("h1");

    function setUserName() {
        let myName = prompt("Digite o seu nome: ");
        if (!myName) {
            alert("Por favor, insira um nome válido.");
            return;
        }
        localStorage.setItem("name", myName);
        myHead.textContent = 'Messi é o GOAT, ' + myName;
    }

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        let storagedName = localStorage.getItem("name");
        myHead.textContent = 'Messi é o GOAT, ' + storagedName;
    }

    myButton.onclick = () => {
        setUserName();
    };


