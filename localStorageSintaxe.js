// Objeto javaScript
const pet = {
    id: "321654",
    name:"meu gato",
    email: 'meugato@mypet.com',
    active: true,
    posts: [
        {
            id:"654987",
            title:"myPost_1",
            body: "Hello World",
        },
        {
            id:"321987",
            title:"myPost_2",
            body: "Bom dia!"
        }
    ]
}
//Create
localStorage.setItem("name", "meuGato")
localStorage.setItem("pet", JSON.stringify(pet))()

//Ler
const nome = localStorage.getItem("name")
console.log(nome)
const conteudo = document.getElementById("conteudo")
conteudo.innerHTML = nome


//Exemplos
localStorage.setItem('myCat', 'Tom');
var cat = localStorage.getItem('myCat');
localStorage.removeItem('myCat');
localStorage.clear();