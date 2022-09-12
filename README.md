# CheckThisFood

## 1. Présentation - The Glucid Project aka CheckThisFood

>Présente en un ou deux paragraphes ton application. Commence par le besoin&nbsp;: à quel besoin réponds-tu ? Puis décris ton application brièvement de manière compréhensible. Si c'est long, chiant et ennuyeux, les gens vont s'arrêter à ce paragraphe. Si c'est trop vague, les gens vont penser que tu ne sais pas ce que tu veux. C'est normal d'être dans le brouillard, mais ce n'est pas normal de ne pas pouvoir décrire son application en un paragraphe.

Application qui permet d'obtenir des infos nutritionnelles sur des aliments ou recettes. Les utilisateurs peuvent poster et rechercher.

## 2. Parcours utilisateur
>Décris le parcours utilisateur de ton application. En matière de produit à quoi elle ressemblera.

- basiques : authentification..
- je peux rechercher un aliment ou une recette
- je peux voir les attributs nutritionnels de ces derniers
- je peux poster un aliment ou une recette
- je peux modérer en tant qu'admin : mettre les recettes/alim en top tendances (cf. Gem 'active-admin')

Bonus / Optionnel
- je peux voir un feed des derniers postes (ou optionnellement selon mes goûts / catégories)
- je peux noter un post
- je peux suivre tati Jeannine
- je peux accéder à un calculateur nutritionnels : il additionne les apports des aliments

## 3. Concrètement et techniquement
Dans cette partie, tu pourras décrire l'aspect technique du projet.

### 3.1. Base de données
>Comment tu vois la base de données de l'application ?

PostgreSQL
- users
- profile (si on ne modifie pas le modèle devise)
- item : type:"recipe/food", category:category (model), name, description (optionnal), choisir_champs_nutriments, ratable:boolean, likes:integer
- category: name:"fruits..."
- trends_table : name, category, multiple_items

### 3.2. Front
>Quels sont les composants dont vous aurez besoin ? Aurez-vous besoin d'un peu de front dynamique avec JavaScript pour la faire fonctionner ?

En React.js

Views :
- home
- search
- create
- profile

Elements :
- food item
- recipe item

### 3.3. Backend
>De quoi avez-vous besoin pour le backend ? Quelles sont les APIs en back que vous allez brancher et utiliser ?

Backend :
-> API Rails 
(on partira sur une base similaire à celle-ci : https://github.com/0xKubitus/my-Rails-Backend-API_Boilerplate)

APIs externes
- APIs de BDD de nutrition => https://platform.fatsecret.com/api/Default.aspx?screen=rapih

### 3.4. Mes besoins techniques
>Balance ici tes compétences, puis tes besoins pour les 2 personnes restantes.

On est full et on gère 😎

## 4. La version minimaliste, mais fonctionnelle qu'il faut avoir livrée la première semaine
>Nous allons vous demander de livrer une version minimaliste, mais fonctionnelle à la fin de la première semaine. Décris ce que vous voulez avoir fait à la fin de la première semaine. Pense minimaliste, fonctionnel, efficace. Comment avec le moins de code possible vous arrivez à donner une version fonctionnelle de l'application ?

>Ceci s'appelle le MVP, pour Minimum Viable Product. Voici un exemple de MVP pour un site que tu connais bien, celui de THP&nbsp;: les gens peuvent s'enregistrer sur le site, puis s'inscrire à une session. S'ils s'inscrivent, ils ont accès à tout le cursus qui est hébergé sur la plateforme. Nous nous occuperons à la main d'envoyer des emails pour annoncer le début de la session et nous ferons les groupes à la main. Spoiler&nbsp;: THP a commencé comme ceci ;)

- Authentification
- Pouvoir lire, créer et chercher des items
- Obtenir des items directement depuis une ou plusieurs APIs alimentaires
- Pouvoir trier les items par catégories dans le feed

## 5. La version que l'on présentera aux jurys
>La deuxième semaine vous allez ajouter des fonctionnalités pour améliorer l'expérience utilisateur de votre application. Quelles fonctionnalités tu aimerais bien ajouter ?

- Likes, commentaires
- Authentification avec google, facebook ou autre
- Tests unitaires
- Suivre des gens
	- Voir ces personnes en priorité dans le feed
	- Pouvoir gérer les abonnements dans le profil / paramètres
- Calculateur nutritionnel si on additionne des aliments entre eux

## 6. Notre mentor
>Qui est ton mentor ?

El famoso SonFaya (Xavier Grenouillet de son vrai nom) nous accompagne gracieusement pour ce projet !

## 7. Trello du projet
https://trello.com/b/woR8ynzb/check-this-food
