import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {
    "name": "Astérix",
    "price": 29.99,
    "height": "8 cm",
    "description": "Astérix, le petit guerrier gaulois au courage démesuré, est connu pour sa ruse et son intelligence. Armé de sa célèbre potion magique, Astérix se lance dans des aventures héroïques pour défendre son village contre les légions romaines.",
    "image": "../../assets/image/produits/Asterix.jpg",
    "imageDescription": "Figurine d'Astérix"
  },
  {
    "name": "Obélix",
    "price": 29.99,
    "height": "12 cm",
    "description": "Obélix, l'ami fidèle d'Astérix, est un puissant tailleur de menhirs au cœur tendre. Sa force surhumaine résulte d'une chute dans la marmite de potion magique étant enfant. Toujours accompagné de son fidèle chien Idéfix (non inclus), Obélix est prêt à tout pour défendre les siens.",
    "image": "../../assets/image/produits/Obelix.jpg",
    "imageDescription": "Figurine d'Obélix"
  },
  {
    "name": "César",
    "price": 24.99,
    "height": "14 cm",
    "description": "Jules César, le redoutable empereur romain, est un personnage central dans les aventures d'Astérix et Obélix. Présenté avec sa toge imposante et son regard autoritaire, cette figurine capture l'influence de César sur la Gaule.",
    "image": "../../assets/image/produits/Cesar.jpg",
    "imageDescription": "Figurine de César"
  
  },
  {
    "name": "Idéfix",
    "price": 19.99,
    "height": "5 cm",
    "description": "Idéfix, le petit chien blanc d'Obélix, est toujours prêt à défendre ses amis. Sa figurine illustre sa loyauté et sa vivacité. Malgré sa petite taille, Idéfix joue un rôle essentiel dans les histoires d'Astérix et Obélix.",
    "image": "../../assets/image/produits/Idefix.jpg",
    "imageDescription": "Figurine d'Idéfix"
  
  },
  {
    "name": "Panoramix",
    "price": 24.99,
    "height": "14 cm",
    "description": "Panoramix, le druide du village, est le gardien du secret de la potion magique. Sa barbe blanche et son air sage cachent une grande sagesse. La figurine de Panoramix incarne la magie et la mystique qui entourent ce personnage emblématique.",
    "image": "../../assets/image/produits/Panoramix.jpg",
    "imageDescription": "Figurine de Panoramix"
  },
  {
    "name": "Falbala",
    "price": 24.99,
    "height": "12 cm",
    "description": "Falbala est une figure forte et indépendante. Sa figurine présente sa grâce et sa beauté, capturant l'esprit intrépide de cette Gauloise qui ne craint pas de se lancer dans l'aventure.",
    "image": "../../assets/image/produits/Falbala.jpg",
    "imageDescription": "Figurine de Falbala"
  }
  ]

  constructor() { }
}
