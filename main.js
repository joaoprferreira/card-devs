function buildPage(){
    buildHeader();  
    buildSection();
    buildProdutos();
}

    function buildHeader(){

        const headerContainer = document.querySelector(".header");

        headerContainer.innerHTML = `
        <h1>${data.nome+" - "+data.cnpj}</h1>
        `
    }
    function buildSection(){

        const sectionContainer = document.querySelector("section")

        sectionContainer.innerHTML = `
            <p>${data.endereco.rua}</p>
        `
    }
        
    function buildProdutos(){
        const cardsProdutos = document.querySelector(".cards")

        cardsProdutos.innerHTML = `
        <h1>Produtos</h1>
        <div class="box">
        <div class="card">
        <img src="${data.produtos[0].imagem_url}" alt="" srcset="">
        <h2>${data.produtos[0].nome}</h2>
        <h5>R$${data.produtos[0].preco}</h5>
        </div>

        <div class="card">
        <img src="${data.produtos[1].imagem_url}" alt="" srcset="">
        <h2>${data.produtos[1].nome}</h2>
        <h5>R$${data.produtos[1].preco}</h5>
        </div>
        </div>
        `
    }
        
    
    buildPage();