DROP TABLE IF EXISTS favRestaurants; 
 
 
CREATE TABLE favRestaurants ( 
    restaurant_id INT NOT NULL PRIMARY KEY,
    restaurant_name VARCHAR(100), 
    restaurant_description TEXT(255),
    street VARCHAR(100), 
    housenum INT,
    city VARCHAR(100), 
    country VARCHAR(100), 
    geo POINT NOT NULL
); 

INSERT INTO favRestaurants (restaurant_id, restaurant_name, restaurant_description, street, housenum, city, country, geo)
VALUES
    (1, "Toyo", "The best sushi in Barcelona", "Carrer del Torrent de l'Olla", 8, "Barcelona", "Spain", POINT(41.398738, 2.1611252)),
    (2, "El Rabipelao", "Amazing Venezuelan veggie food and cocktails", "Carrer del Torrent d'en Vidalet", 22, "Barcelona", "Spain", POINT(41.4037055, 2.1598503)),
    (3, "El Kiltro", "Cozy Mexican restaurant with Czech beer on the tap", "Carrer del Montseny", 13, "Barcelona", "Spain", POINT(41.4018337, 2.1544437)),
    (4, "New Day", "Small bistro, but very tasty spring rolls", "Riegrova", 3, "Pilsen", "Czech Republic", POINT(49.7472719, 13.3759195)),
    (5, "La Frenchie", "My favourite brunch place", "Smetanovy Sady", 6, "Pilsen", "Czech Republic", POINT(49.7453357, 13.37462));

