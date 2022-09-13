# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Recipe.create!([
    { "title": "Lasagnes à la bolognaise", "description": "Faire revenir gousses hachées d'ail et les oignons émincés dans un peu d'huile d'olive.", "carbohydrates": rand(20..60), "calories": rand(1..13)},
    { "title": "Chili con carne", "description": "Mélanger le chili, le cumin, le concentré de tomates, et incorporer le tout au boeuf. Ajouter les haricots, le bouillon, du sel et du poivre", "carbohydrates": rand(20..60), "calories": rand(1..13)},  
    { "title": "Tomates farcies", "description": "Couper le haut des tomates et les évider. Poivrer et saler l'intérieur. Mettre la farce à l'intérieur et remettre les chapeaux.", "carbohydrates": rand(20..60), "calories": rand(1..13)},  
    { "title": "Rougail saucisse", "description": "Coupez les saucisses en troncons de 1,5 cm puis faites les revenir avec les oignons. Au bout de 5 mn, ajoutez les tomates coupées en petits morceaux et les aromates (le piment en morceaux).", "carbohydrates": rand(20..60), "calories": rand(1..13)},  
    { "title": "Risotto aux champignons
    ", "description": "Séparer les champignons en deux (préférer des cèpes) : une partie servira à élaborer le bouillon et cuira avec le riz. L'autre partie sera poêlé au dernier moment pour la présentation et mettre en avant le champignon tout en conservant une texture ferme. Emincer un petit peu d'ail, d'échalote et de persil séparément et réserver.", "carbohydrates": rand(20..60), "calories": rand(1..13)}, 

    ]);