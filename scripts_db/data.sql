/*Inserción datos USERS*/
INSERT INTO users (fullname, email, pass, pass_sin_cryp, avatar, admin) VALUES ('Admin Pikachu','pikachu@pokemon.com','$2a$10$NzH72FTX3Ku7s0IGrmP1Je5Tg3tzdZElzbNRo/uampeM64Ez6TFc6','pika123','1660876648128.JPG',1);

INSERT INTO users (fullname, email, pass, pass_sin_cryp, avatar, admin) VALUES ('Juan Fuego','charizard@generic.com','$2a$10$v.q6TTbVueysJTOHzzbueeBlokB2VMavx.Oyo1UJtJfJYqPT84mHe','pass321','1660877673874.JPG',0);

/*Inserción datos PRODUCTS*/
INSERT INTO products (product_name, description, price, image) VALUES('Salto Tandem','Salto con instructor desde más de 3.300 metros.',400,'tandemItem.JPG');

INSERT INTO products (product_name, description, price, image) VALUES('Curso para principiantes','Este innovador curso acelerado de cada libre es la manera más rápida, eficiente y segura de aprender paracaidismo. Con unos pocos días, eres capaz de saltar de un avión solo.',1800,'1659233896442.JPG');

INSERT INTO products (product_name, description, price, image) VALUES('Curso con Wingsuit','Los paracaidistas con experiencia, tienen la opcion de realizar este excitante curso con traje con alas.',2100,'wingsuitItem.JPG');

INSERT INTO products (product_name, description, price, image) VALUES('Curso para Avanzados','Ofrecemos esta opcion para quienes les interesa capacitarte para ser intructor de este apasionado deporte.',2500,'cursoProItem.JPG');

COMMIT;