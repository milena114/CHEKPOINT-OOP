//Créez une classe d'objet pour le produit afin de stocker les propriétés pour l'id, le nom et le prix du produit.
class Produit {
    constructor(id, nom, prix) {
        this.id = id;        // Identifiant du produit
        this.nom = Nike;      // Nom du produit
        this.prix = 25000;    // Prix du produit
    }
}
//Créez une classe d'objet pour l'élément du panier d'achat afin de stocker les propriétés pour le produit et sa quantité.

class ElementPanier {
    constructor(produit, quantite) {
        this.produit = chaussure;  // Produit associé à cet élément
        this.quantite = 3; // Quantité de ce produit dans le panier
    }

    // Méthode pour calculer le prix total pour cet élément
    prixTotal() {
        return this.produit.prix * this.quantite;
    }
}
class Panier {
    constructor() {
        this.elements = []; // Tableau pour stocker les éléments du panier
    }

    // Méthode pour ajouter un produit au panier
    ajouterProduit(produit, quantite) {
        const element = new ElementPanier(produit, quantite);
        this.elements.push(element);
    }

    // Méthode pour calculer le total du panier
    prixTotalPanier() {
        return this.elements.reduce((total, element) => {
            return total + element.prixTotal();
        }, 0);
    }

    // Méthode pour afficher les éléments du panier
    afficherContenu() {
        this.elements.forEach(element => {
            console.log(`${element.quantite} x ${element.produit.nom} : ${element.prixTotal()}€`);
        });
        console.log(`Total : ${this.prixTotalPanier()}€`);
    }
}
//Ajoutez les méthodes pour :

class Panier {
    constructor() {
        this.elements = []; // Tableau pour stocker les éléments du panier
    }

    // Méthode pour ajouter un produit au panier
    ajouterProduit(produit, quantite) {
        const elementExist = this.elements.find(element => element.produit.id === produit.id);
        if (elementExist) {
            // Si le produit existe déjà, on augmente la quantité
            elementExist.quantite += quantite;
        } else {
            // Sinon, on ajoute un nouvel élément
            const element = new ElementPanier(produit, quantite);
            this.elements.push(element);
        }
    }

    // Méthode pour supprimer un produit du panier
    supprimerProduit(id) {
        this.elements = this.elements.filter(element => element.produit.id !== id);
    }

    // Méthode pour obtenir le total des éléments dans le panier
    totalElements() {
        return this.elements.reduce((total, element) => total + element.quantite, 0);
    }

    // Méthode pour calculer le total du panier
    prixTotalPanier() {
        return this.elements.reduce((total, element) => total + element.prixTotal(), 0);
    }

    // Méthode pour afficher les éléments du panier
    afficherContenu() {
        if (this.elements.length === 0) {
            console.log("Le panier est vide.");
            return;
        }
        this.elements.forEach(element => {
            console.log(`${element.quantite} x ${element.produit.nom} : ${element.prixTotal()}€`);
        });
        console.log(`Total : ${this.prixTotalPanier()}€`);
        console.log(`Nombre total d'articles : ${this.totalElements()}`);
    }

    // Méthode pour vider le panier
    viderPanier() {
        this.elements = [];
    }
}

//Passez à tester la capacité de nos objets à 
// Test des fonctionnalités

// 1. Créer des produits
const produit1 = new Produit(1, "T-shirt", 20);
const produit2 = new Produit(2, "Jeans", 40);
const produit3 = new Produit(3, "Casquette", 15);

// 2. Créer un panier d'achat
const monPanier = new Panier();

// 3. Ajouter des éléments au panier
monPanier.ajouterProduit(produit1, 2); // 2 T-shirts
monPanier.ajouterProduit(produit2, 1); // 1 Jeans
monPanier.ajouterProduit(produit3, 3); // 3 Casquettes
monPanier.ajouterProduit(produit1, 1); // Ajoute 1 T-shirt de plus

// 4. Afficher le contenu du panier
console.log("Contenu du panier :");
monPanier.afficherContenu();

// 5. Supprimer un élément du panier
console.log("Suppression du Jeans (ID: 2) :");
monPanier.supprimerProduit(2); // Supprime le Jeans

// Afficher le panier après suppression
console.log("Après suppression :");
monPanier.afficherContenu(); // Affiche le contenu du panier mis à jour




