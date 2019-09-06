function buildPage(){
    buildHeader();  
    buildSection();
    buildProdutos();
    buildClientes();
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
        var produtos = data.produtos;
        var text = "";
        var i;
        for (i = 0, len = produtos.length; i < len; i++) {
            text += `
            <div class="box">
            <div class="card">
            <img src="${produtos[i].imagem_url}">
            <h1>${produtos[i].nome}</h1>
            <h4>R$${produtos[i].preco}<h4>
            </div>
            </div>`;
          }
        cardsProdutos.innerHTML = text;
        
    }
    function buildClientes(){
        const cardsClientes = document.querySelector(".cards_clientes")
        var clientes = data.clientes;
        var text = "";
        var i;
        for (i = 0, len = clientes.length; i < len; i++) {
            text += `
            <div class="box">
            <div class="card">
            <h1>${clientes[i].nome}</h1>
            <h2>${clientes[i].cpf}</h2>
            <h4>R$${clientes[i].telefone}<h4>
            </div>
            </div>`;
          }
        cardsClientes.innerHTML = text;
        
    }
        
    
    buildPage();