DROP TABLE IF EXISTS favRestaurants; 
 
 
CREATE TABLE favRestaurants ( 
    restaurant_id INT NOT NULL PRIMARY KEY,
    restaurant_name VARCHAR(100), 
    restaurant_description TEXT(255),
    street VARCHAR(100), 
    housenum INT,
    city VARCHAR(100), 
    country VARCHAR(100), 
    geo POINT NOT NULL,
    img VARCHAR(250)
); 

INSERT INTO favRestaurants (restaurant_id, restaurant_name, restaurant_description, street, housenum, city, country, geo, img)
VALUES
    (1, "Toyo", "The best sushi in Barcelona", "Carrer del Torrent de l'Olla", 8, "Barcelona", "Spain", POINT(41.398738, 2.1611252), "https://images.unsplash.com/photo-1581781870027-04212e231e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"),
    (2, "El Rabipelao", "Amazing Venezuelan veggie food and cocktails", "Carrer del Torrent d'en Vidalet", 22, "Barcelona", "Spain", POINT(41.4037055, 2.1598503), "https://images.unsplash.com/photo-1640718534338-466077731ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80"),
    (3, "El Kiltro", "Cozy Mexican restaurant with Czech beer on the tap", "Carrer del Montseny", 13, "Barcelona", "Spain", POINT(41.4018337, 2.1544437), "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"),
    (4, "Racó de la Vila", "Where I take my visits for Paella", "Carrer de la Ciutat de Granada", 33, "Barcelona", "Spain", POINT(41.3974371, 2.1990673), "https://images.unsplash.com/photo-1630175889154-13c84d513e1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"),
    (5, "La Paradeta", "Part of a chain, but with original concept and fresh fish", "Carrer de Riego", 27, "Barcelona", "Spain", POINT(41.3766194, 2.1383174), "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80");

