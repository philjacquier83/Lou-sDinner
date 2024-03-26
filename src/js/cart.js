// on récupère le localStorage
let storedProducts = localStorage.getItem('productsSelected') ? JSON.parse(localStorage.getItem('productsSelected')) : []

let i
let totalBill = 0

// si panier vide, rendre incliquable le bouton Submit
let buttonSubmit = document.querySelector('#submitOrder')

if(storedProducts.length === 0) {
    buttonSubmit.disabled = true;
    buttonSubmit.opacity = 0.5;
} else {
    buttonSubmit.disabled = false;
    buttonSubmit.opacity = 1;
}

// on sélectionne la section où vont apparaître les produits
const sectionProducts = document.querySelector('.products');

// on crée une fonction qui va récupérer le produit et ses infos
// et créer sa ligne dans le container Panier
async function recupProduct(idProduct) {

    let productID = storedProducts[idProduct].id;

    const responseProducts = await fetch(`http://localhost:5173/api/products/${productID}`)
    const productCard = await responseProducts.json()

    // on crée le produit
    const articleProduct = document.createElement('article');
    articleProduct.className = "product__item"
    articleProduct.dataset.id = storedProducts[idProduct].id;

    // on crée le conteneur du produit
    const contentProduct = document.createElement('div');
    contentProduct.className = "product__item__content";

    // on indique la quantité (à partir du localStorage)
    const quantityProduct = document.createElement('span');
    quantityProduct.className = "quantityProduct";
    quantityProduct.style.display = "inline-block";
    quantityProduct.innerHTML = storedProducts(idProduct).quantity;

    // on indique le nom du produit (à partir de l'API)
    const nameProduct = document.createElement('span');
    nameProduct.className = "nameProduct";
    nameProduct.style.display = "inline-block";
    nameProduct.innerHTML = productCard.name;

    // on calcule le prix total du produit
    let fullPrice = parseFloat(productCard.price * storedProducts(idProduct).quantity).toFixed(2);

    // on indique le prix du produit
    const priceProduct = document.createElement('span');
    priceProduct.className = "priceProduct";
    priceProduct.style.display = "inline-block";
    priceProduct.innerHTML = `${fullPrice} $`

    // on crée le conteneur avec le bouton "supprimer"
    const removeContainer = document.createElement('span');
    removeContainer.className = "removeContainer"

    // on ajoute le logo Trash
    const removeProduct = document.createElement('p')
    removeProduct.className = "removeProduct"
    removeProduct.innerHTML = "Remove"

    // on met à jour le prix total
    totalBill += fullPrice
    const contentTotalBill = document.querySelector('.totalBill')
    contentTotalBill.innerHTML = parseFloat(totalBill).toFixed(2)

    // on relie le tout
    sectionProducts.appendChild(articleProduct)
    articleProduct.appendChild(contentProduct)
    articleProduct.appendChild(nameProduct)
    articleProduct.appendChild(priceProduct)
}

async function init() {
    sectionProducts.innerHTML = "";

    for(i=0; i < storedProducts.length; i++) {
        await recupProduct(i)
    }
}

init()