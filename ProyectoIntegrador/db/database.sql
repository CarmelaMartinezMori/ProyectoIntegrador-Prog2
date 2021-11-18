CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR (50) NOT NULL,
apellido VARCHAR (100) NOT NULL,
nombreDeUsuario VARCHAR (100) UNIQUE NOT NULL,
email VARCHAR (50) UNIQUE NOT NULL,
password VARCHAR (500) NOT NULL,
fechaDeNacimiento  DATE NOT NULL,
fotoPerfil VARCHAR (200) NOT NULL,
celular INT NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE posteos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
pie VARCHAR (500) NOT NULL,
imagen VARCHAR (200) NOT NULL,
fecha DATE NOT NULL,
usuarios_id INT UNSIGNED NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (usuarios_id) REFERENCES usuarios (id)
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
texto VARCHAR (500) NOT NULL,
usuarios_id INT UNSIGNED NOT NULL,
posteos_id INT UNSIGNED NOT NULL,
creacion DATE NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (posteos_id) REFERENCES posteos (id),
FOREIGN KEY (usuarios_id) REFERENCES usuarios (id)
);


INSERT INTO usuarios
VALUES (DEFAULT, 'Martin', 'Palacio', 'martinpalacio', 'marpalacio@hotmail.com',  'Martin1234', '1999-07-14', 'foto2.jpg', 153586000, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Charly', 'Pintos', 'charlyypintos', 'pintoscharly@gmail.com',  'Charly1234', '1997-10-03', 'foto4.jpg', 153586001, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Justina', 'Dominguez', 'justidominguezz', 'justinadom@gmail.com',  'Justina1234', '2000-12-19', 'foto3.jpg', 153586001, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Manolo', 'Devalle', 'latin_lover_0101', 'mlover@hotmail.com',  'Manolo1234', '2000-07-05', 'foto5.jpg', 153586002, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Jorge Luis', 'Borges', 'jlborges', 'juanluisb86@hotmail.com',  'Juanluis1234', '1999-08-24', 'foto6.jpg', 153586003, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Carlos', 'Ramirez', 'cramirez', 'carlitos@gmail.com',  'Carlos1234', '1997-03-24', 'foto7.jpg', 153586004, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Martina', 'Suarez', 'martuuu_', 'martinasuarez@gmail.com',  'Martu1234', '2002-02-11', 'foto8.jpg', 153586005, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Sofia', 'Vazquez', 'sofivazquex', 'sofiaav@hotmail.com',  'Sofia1234', '1997-11-27', 'foto9.jpg', 153586006, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Santiago', 'Pons', 'santipons', 'santiagopons@gmail.com',  'Santi1234', '1999-08-10', 'foto10.jpg', 153586007, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Juana', 'Lopez', 'juanitalopez', 'juanalo@gmail.com',  'Juana1234', '2001-10-03', 'foto1.jpg', 153586009, DEFAULT, DEFAULT);
INSERT INTO usuarios
VALUES (DEFAULT, 'Carlos', 'Baute', 'carlitos', 'carlosbaute@gmail.com',  'Carlos1234', '1974-03-08', 'carlosbaute2.jpeg', 153586008, DEFAULT, DEFAULT);



INSERT INTO posteos
VALUES (DEFAULT, 'Tequeños <3', 'comida1.jpeg', '2021-09-24', 1, DEFAULT, DEFAULT);
INSERT INTO posteos
VALUES (DEFAULT, 'Una sopita', 'comida2.jpg', '2021-09-24', 3, DEFAULT, DEFAULT);
INSERT INTO posteos
VALUES (DEFAULT, 'Pizza', 'comida3.jpg', '2021-09-22', 2, DEFAULT, DEFAULT);
INSERT INTO posteos
VALUES (DEFAULT, 'Sushi', 'comida4.jpg', '2021-09-26', 4, DEFAULT, DEFAULT);
INSERT INTO posteos
VALUES (DEFAULT, 'Hamburguesa', 'comida5.jpg', '2021-09-27', 5, DEFAULT, DEFAULT);
INSERT INTO posteos
VALUES (DEFAULT, 'Cocinando nuevas cosas', 'comida6.jpg', '2021-09-25', 6, DEFAULT, DEFAULT);
INSERT INTO posteos
VALUES (DEFAULT, 'Cupcakes de vainilla', 'comida7.jpg', '2021-09-21', 7, DEFAULT, DEFAULT);
INSERT INTO posteos
VALUES (DEFAULT, 'Pasando el calor', 'comida8.jpg', '2021-09-23', 8, DEFAULT, DEFAULT);
INSERT INTO posteos
VALUES (DEFAULT, 'Pancakes caseros', 'comida9.jpg', '2021-09-24', 9, DEFAULT, DEFAULT);
INSERT INTO posteos
VALUES (DEFAULT, 'Sanguchito', 'comida0.jpg', '2021-09-25', 10, DEFAULT, DEFAULT);


INSERT INTO comentarios
VALUES (DEFAULT, 'Oh, se ve delicioso!', 1, 10, '2021-09-25', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'No mientas, eso es photoshop', 2, 10, '2021-09-25', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Con ese plato puedes chantajear a Shakira, jaja', 3, 10, '2021-09-25', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Hay que darle de comer a quienes mas lo necesitan.', 4, 10, '2021-09-25', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Que ricura por favorr', 5, 1, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Se ve espectacular', 6, 1, '2021-09-24', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Queremos comer', 7, 1, '2021-09-24', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Me encantaría la receta!!!', 8, 1, '2021-09-24', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Que rico! Dónde se consigue?', 9, 2, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'La receta?', 10, 2, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'ARTE PURO!!', 11, 2, '2021-09-22', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Quiero recetaa!! ', 1, 2, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Wow. Esto es genial.', 2, 3, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Yum', 3, 3, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Muy bueno, pero tienen todas las personas la igualdad de acceder a recursos?', 4, 3, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Hola, saludos', 5, 3, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Que deliciaa', 6, 4, '2021-09-26', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Que genial esta foto', 7, 4, '2021-09-26', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT 'que bueno se ve!', 8, 4, '2021-09-26', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Que hermoso, bendiciones ', 9, 4, '2021-09-26', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Quierooo!!!', 10, 5, '2021-09-27', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Sabroso', 11, 5, '2021-09-27', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Espectacularr!! ', 1, 5, '2021-09-27', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'que ricooo', 2, 5, '2021-09-27', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Estoy esperando la receta! :)', 3, 6, '2021-09-25', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Me mueroo, que rico', 4, 6, '2021-09-25', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Dónde puedo conseguir esto?!', 5, 6, '2021-09-25', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Me Encanta <3', 6, 6, '2021-09-26', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Divina la foto', 7, 7, '2021-09-21', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Woww, me muero por probar eso', 8, 7, '2021-09-21', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'muy bueno', 9, 7, '2021-09-22', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Espectacular es poco!!!', 10, 7, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Ríquisimo!', 11, 8, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Muy bueno', 1, 8, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'un manjar', 2, 8, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'me dio hambre', 3, 8, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'que bien se ve esto', 4, 8, '2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Genial!!!', 5, 9, '2021-09-24', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'muy buenas tus publicaciones', 6, 9, '2021-09-24', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'qué restaurante es?', 7, 9, '2021-09-24', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Woww', 8, 9, '2021-09-24', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Exquisitoo', 9, 10,'2021-09-24', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Me tentaste, ya me voy a comprar para comer', 10, 1,'2021-09-23', DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT, 'Que rico', 11, 10,'2021-09-25', DEFAULT, DEFAULT);
