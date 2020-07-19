// Escribir el código solamente en este archivo
document.addEventListener("DOMContentLoaded", async() => {
    
    //DOM Variables
    const banner = document.querySelector("#banner header h2");
    const introSection = document.querySelector("#intro");
    const firstSection = document.querySelector(".first i");
    const secondSection = document.querySelector(".second i");
    let firstSectionText = document.querySelector('.first header h2');
    let secondSectionText = document.querySelector('.second header h2')
    const itemsButton = document.querySelector("#itemsButton");
    const itemsSection = document.querySelector("#itemsSection");

    //Username input
    const welcome = username => {
        username = prompt("Ingrese nombre de usuario: ");
        banner.innerHTML = "Bienvenido " + username; 
    }
    welcome();

    //Swapping first and second elements
    const mainElement = element => {
        // Text to show
        const textoDestacado = "Elemento destacado";
        const textoSecundario = "Elemento secundario"

        //Main classes
        mainClass = document.querySelector('.first i').getAttribute('class');
        secondClass = document.querySelector('.second i').getAttribute('class');
        
        
        //Toggle main texts and classes
        introSection.addEventListener('click', () => {
            
            if ( document.querySelector('.first i').className.match(mainClass)) {
                firstSectionText.innerHTML = textoSecundario;
                secondSectionText.innerHTML = textoDestacado;
                firstSection.setAttribute("class", secondClass);
                secondSection.setAttribute("class", mainClass);

            } else {
                firstSectionText.innerHTML = textoDestacado;
                secondSectionText.innerHTML = textoSecundario;
                secondSection.setAttribute("class", secondClass);
                firstSection.setAttribute("class", mainClass);
            }
        })
    }
    mainElement()

    //Incorporate items to "My works" section 
    let contador = 2;
    itemsButton.addEventListener('click', () => {
        //Create HTML needed elements
        let div = document.createElement("div");
        let section = document.createElement("section");
        let header = document.createElement("header");
        let h3 = document.createElement("h3");
        let p = document.querySelector('#secondDiv section p').cloneNode(true);

        //Div and section classes clonning
        divClass = document.querySelector('#secondDiv').getAttribute('class');
        sectionClass = document.querySelector('.box').getAttribute('class');
        div.setAttribute("class", divClass);
        section.setAttribute('class', sectionClass);

        //Item + number
        contador ++;
        h3.innerHTML = "Item " + contador;

        //DOM manipulation
        itemsSection.appendChild(div)
        div.appendChild(section)
        section.appendChild(header)
        header.appendChild(h3)
        section.appendChild(p)
    });
});