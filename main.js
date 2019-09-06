function buildPage(){
    buildHeader();  
}

    function buildHeader(){

        const headerContainer = document.querySelector(".header");

        headerContainer.innerHTML = `
        <h1>${data.nome}</h1>
        `
        const sectioncontainer = document.querySelector("section")

        sectioncontainer.innerHTML = `
            <p>${data.endereco.rua}</p>
        `
    }

    buildPage();