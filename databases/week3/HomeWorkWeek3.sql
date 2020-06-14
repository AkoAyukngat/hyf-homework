CREATE DATABASE `meal_sharing` DEFAULT CHARACTER SET utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE `meal_sharing`;
SET NAMES utf8mb4;

CREATE TABLE  `meal` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` VARCHAR(255) NOT NULL,
 `description` text NULL DEFAULT NULL,
 `location` VARCHAR(255) NOT NULL,
 `due_date` DATETIME NOT NULL,
 `max_reservations` int(10) unsigned NOT NULL,
 `price` VARCHAR(255) NOT NULL,
 `created_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int(10) unsigned NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `created_date` DATE NOT NULL,
 CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Review`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` VARCHAR(255) NOT NULL,
 `description` text NULL DEFAULT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `ratings` int(10) unsigned NOT NULL,
 `created_date` DATE NOT NULL,
 CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- MEAL TABLE ---------------------------------------------------------------------------------------

insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (1, 'Horseradish Root', 'embrace strategic e-commerce', '55421 Cody Place', '2020-05-19', 14, '€40,95', '2019-07-20');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (2, 'Sprouts - China Rose', 'architect vertical web-readiness', '49 Merry Circle', '2020-05-08', 8, '€32,02', '2019-10-20');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (3, 'Potato - Sweet', 'deploy one-to-one e-services', '52396 Annamark Way', '2019-09-25', 1, '€25,62', '2019-09-16');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (4, 'Tomatoes - Cherry, Yellow', 'streamline B2B infomediaries', '6836 Norway Maple Way', '2020-05-18', 12, '€33,60', '2019-10-29');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (5, 'Nantucket Pine Orangebanana', 'recontextualize seamless vortals', '218 Carberry Lane', '2019-08-28', 1, '€26,95', '2020-02-12');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (6, 'Raisin - Dark', 'engineer 24/365 web-readiness', '69306 Nova Lane', '2019-07-16', 8, '€12,39', '2020-03-21');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (7, 'Cookie Choc', 'deliver plug-and-play channels', '128 Dakota Parkway', '2019-08-28', 15, '€49,72', '2019-09-05');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (8, 'Pepper - Sorrano', 'enable compelling mindshare', '17045 Hanson Point', '2019-12-21', 9, '€30,59', '2019-06-13');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (9, 'Salmon - Whole, 4 - 6 Pounds', 'expedite seamless web services', '83967 Lakewood Gardens Center', '2020-01-22', 12, '€35,21', '2019-09-13');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (10, 'Wine - Chianti Classico Riserva', 'matrix viral bandwidth', '0895 Granby Junction', '2019-10-16', 8, '€40,21', '2020-05-11');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (11, 'Lambcasing', 'implement virtual networks', '723 Blue Bill Park Alley', '2020-02-03', 15, '€42,22', '2019-11-17');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (12, 'Bok Choy - Baby', 'harness virtual e-commerce', '44 Susan Alley', '2019-09-15', 7, '€40,88', '2020-05-06');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (13, 'Wasabi Powder', 'envisioneer global ROI', '3 Hagan Drive', '2020-03-07', 10, '€42,81', '2019-09-30');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (14, 'Mini - Vol Au Vents', 'productize efficient e-commerce', '6 Badeau Way', '2020-04-25', 11, '€17,34', '2020-03-09');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (15, 'Remy Red', 'iterate dynamic content', '9006 Merchant Hill', '2020-01-23', 9, '€22,17', '2019-09-25');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (16, 'Longos - Penne With Pesto', 'productize real-time metrics', '4 Twin Pines Pass', '2020-05-07', 10, '€31,43', '2019-11-30');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (17, 'Chick Peas - Dried', 'leverage efficient action-items', '0561 Brown Trail', '2020-02-01', 1, '€14,53', '2019-09-19');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (18, 'Wine - Spumante Bambino White', 'engineer back-end deliverables', '68085 Westerfield Road', '2020-03-13', 4, '€36,59', '2019-09-09');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (19, 'Allspice - Jamaican', 'productize frictionless users', '36 Karstens Crossing', '2020-03-08', 11, '€41,22', '2019-12-14');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (20, 'Beef - Tenderloin Tails', 'target front-end technologies', '059 Jay Terrace', '2019-09-18', 4, '€29,34', '2020-04-28');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (21, 'Buffalo - Short Rib Fresh', 'exploit impactful e-business', '9572 Del Mar Avenue', '2019-06-06', 4, '€16,77', '2020-02-15');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (22, 'Bread - Wheat Baguette', 'synthesize user-centric paradigms', '4 Stoughton Hill', '2019-08-16', 2, '€45,68', '2019-10-04');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (23, 'Wine - White, Schroder And Schyl', 'morph proactive applications', '109 Washington Pass', '2020-03-08', 4, '€35,31', '2019-11-16');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (24, 'Wine - Coteaux Du Tricastin Ac', 'extend end-to-end infrastructures', '17773 Merchant Hill', '2020-05-25', 15, '€42,37', '2019-06-09');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (25, 'Mushroom - Porcini, Dry', 'enhance transparent relationships', '13525 Riverside Parkway', '2019-09-20', 11, '€27,31', '2019-12-19');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (26, 'Appetizer - Shrimp Puff', 'innovate one-to-one niches', '39 Heffernan Trail', '2020-02-14', 9, '€15,81', '2019-06-19');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (27, 'Tuna - Bluefin', 'morph holistic users', '93 Bluestem Park', '2019-09-13', 8, '€15,62', '2019-10-05');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (28, 'Squid U5 - Thailand', 'synthesize cutting-edge e-services', '0992 Stuart Junction', '2020-03-31', 5, '€24,68', '2019-06-09');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (29, 'Island Oasis - Raspberry', 'unleash 24/7 e-services', '191 Summerview Pass', '2019-10-07', 10, '€20,77', '2019-10-27');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (30, 'Bacardi Raspberry', 'implement interactive interfaces', '0 Debs Court', '2019-12-11', 1, '€26,73', '2020-04-27');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (31, 'Nantucket - Orange Mango Cktl', 'deploy user-centric functionalities', '9239 Pearson Trail', '2019-08-19', 4, '€31,13', '2020-02-18');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (32, 'Wine - White, Ej', 'deliver mission-critical solutions', '90298 East Hill', '2020-03-25', 13, '€30,26', '2020-01-12');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (33, 'Pickerel - Fillets', 'orchestrate innovative portals', '32 Buhler Trail', '2020-02-18', 10, '€41,09', '2020-01-02');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (34, 'Pancetta', 'maximize 24/7 paradigms', '04 Kipling Trail', '2019-08-20', 5, '€30,22', '2020-05-14');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (35, 'Vinegar - Rice', 'reinvent world-class users', '25 Ronald Regan Pass', '2019-06-22', 8, '€38,74', '2019-12-29');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (36, 'Ham Black Forest', 'transition one-to-one metrics', '8 Petterle Trail', '2019-11-18', 6, '€26,93', '2019-12-13');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (37, 'Raisin - Golden', 'transform leading-edge users', '864 Fairview Plaza', '2020-04-07', 9, '€13,12', '2020-05-22');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (38, 'Lid Coffee Cup 8oz Blk', 'cultivate sexy systems', '212 Surrey Crossing', '2020-01-09', 4, '€36,56', '2020-04-06');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (39, 'Soup - Beef Conomme, Dry', 'integrate transparent supply-chains', '69 Algoma Center', '2019-06-15', 8, '€42,17', '2019-07-01');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (40, 'Muffin Puck Ww Carrot', 'brand 24/7 mindshare', '1550 Surrey Plaza', '2019-07-14', 11, '€13,20', '2020-02-12');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (41, 'Split Peas - Green, Dry', 'extend global models', '316 Namekagon Parkway', '2019-09-27', 12, '€30,77', '2019-10-24');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (42, 'Beer - True North Lager', 'evolve revolutionary convergence', '40314 Banding Plaza', '2020-04-16', 5, '€10,75', '2020-04-18');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (43, 'Coffee - Irish Cream', 'incentivize back-end infomediaries', '85192 Lyons Center', '2019-09-10', 2, '€19,12', '2019-12-27');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (44, 'Chips Potato All Dressed - 43g', 'morph mission-critical bandwidth', '3 Hermina Junction', '2019-11-10', 13, '€34,77', '2019-12-17');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (45, 'Kale - Red', 'cultivate open-source systems', '109 Burning Wood Park', '2019-06-10', 2, '€13,46', '2020-04-08');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (46, 'Lettuce - Radicchio', 'engineer integrated communities', '657 Banding Plaza', '2020-03-07', 13, '€33,04', '2019-11-23');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (47, 'Shrimp - 150 - 250', 'visualize customized paradigms', '51297 Lyons Alley', '2020-01-16', 2, '€42,40', '2019-10-06');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (48, 'Pate - Cognac', 'integrate cross-media e-tailers', '15 Orin Terrace', '2020-05-16', 13, '€33,96', '2020-02-11');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (49, 'Seedlings - Clamshell', 'strategize turn-key convergence', '74 Schmedeman Circle', '2019-06-11', 1, '€42,59', '2019-11-11');
insert into meal (id, title, description, location, due_date, max_reservations, price, created_date) values (50, 'Chicken - Bones', 'reinvent turn-key e-business', '155 Buhler Pass', '2019-10-03', 7, '€18,02', '2020-05-15');

-- RESERVATION TABLE ---------------------------------------------------

insert into reservation (id, number_of_guests, meal_id, created_date) values ('335', 11, 1, '2019-10-18');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('308', 10, 2, '2019-07-30');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('164', 11, 3, '2020-01-10');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('841', 6, 4, '2019-07-05');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('969', 7, 5, '2020-05-17');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('584', 1, 6, '2019-11-18');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('655', 14, 7, '2019-08-18');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('959', 10, 8, '2020-03-21');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('725', 1, 9, '2020-03-13');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('310', 7, 10, '2019-09-04');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('295', 6, 11, '2019-12-10');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('639', 1, 12, '2020-01-11');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('650', 10, 13, '2019-10-24');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('436', 4, 14, '2020-03-11');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('608', 13, 15, '2019-12-13');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('230', 1, 16, '2019-06-23');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('031', 9, 17, '2020-05-11');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('616', 12, 18, '2019-08-09');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('830', 6, 19, '2020-01-11');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('376', 9, 20, '2020-03-10');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('195', 15, 21, '2020-02-22');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('460', 12, 22, '2019-06-06');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('944', 11, 23, '2019-10-27');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('816', 14, 24, '2019-06-30');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('790', 15, 25, '2020-04-12');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('097', 15, 26, '2019-12-12');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('654', 13, 27, '2019-06-06');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('595', 3, 28, '2019-06-06');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('389', 7, 29, '2019-11-28');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('369', 2, 30, '2020-01-19');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('622', 15, 31, '2019-06-06');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('176', 8, 32, '2020-05-27');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('542', 10, 33, '2020-03-16');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('947', 7, 34, '2019-12-24');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('601', 6, 35, '2019-09-22');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('466', 6, 36, '2019-12-26');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('615', 6, 37, '2019-08-21');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('007', 6, 38, '2019-12-13');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('757', 10, 39, '2019-11-29');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('292', 4, 40, '2020-06-03');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('463', 11, 41, '2020-01-16');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('574', 6, 42, '2020-01-07');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('780', 5, 43, '2020-03-10');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('157', 10, 44, '2020-05-06');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('486', 13, 45, '2019-07-18');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('231', 3, 46, '2019-09-15');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('915', 9, 47, '2019-08-01');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('957', 3, 48, '2019-09-09');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('665', 5, 49, '2019-07-31');
insert into reservation (id, number_of_guests, meal_id, created_date) values ('734', 8, 50, '2020-01-12');

-- REVIEW TABLE --------------------------------------------------------------------------

insert into review (id, title, description, meal_id, ratings, created_date) values ('049', 'Oil - Sunflower', 'poor', 1, 2, '2019-12-23');
insert into review (id, title, description, meal_id, ratings, created_date) values ('007', 'Wine - Red, Concha Y Toro', 'very poor', 2, 1, '2020-04-24');
insert into review (id, title, description, meal_id, ratings, created_date) values ('030', 'Salt - Celery', 'moderate', 3, 3, '2019-09-02');
insert into review (id, title, description, meal_id, ratings, created_date) values ('014', 'Pastry - Raisin Muffin - Mini', 'very poor', 4, 1, '2020-06-15');
insert into review (id, title, description, meal_id, ratings, created_date) values ('444', 'Apple - Fuji', 'good', 5, 4, '2019-08-06');
insert into review (id, title, description, meal_id, ratings, created_date) values ('056', 'Appetiser - Bought', 'moderate', 6, 3, '2019-12-27');
insert into review (id, title, description, meal_id, ratings, created_date) values ('993', 'Pork - Tenderloin, Fresh', 'poor', 7, 2, '2020-01-21');
insert into review (id, title, description, meal_id, ratings, created_date) values ('785', 'Pepper - Chipotle, Canned', 'moderate', 8, 3, '2020-03-25');
insert into review (id, title, description, meal_id, ratings, created_date) values ('898', 'Bread - Calabrese Baguette', 'very good', 9, 5, '2019-08-05');
insert into review (id, title, description, meal_id, ratings, created_date) values ('035', 'Veal - Ground', 'good', 10, 4, '2019-10-09');
insert into review (id, title, description, meal_id, ratings, created_date) values ('496', 'Crab - Back Fin Meat, Canned', 'moderate', 11, 3, '2020-06-02');
insert into review (id, title, description, meal_id, ratings, created_date) values ('849', 'Cookie - Oatmeal', 'poor', 12, 2, '2020-02-09');
insert into review (id, title, description, meal_id, ratings, created_date) values ('691', 'Veal - Striploin', 'moderate', 13, 3, '2019-09-09');
insert into review (id, title, description, meal_id, ratings, created_date) values ('507', 'Foil Wrap', 'moderate', 14, 3, '2019-09-14');
insert into review (id, title, description, meal_id, ratings, created_date) values ('156', 'Tart - Lemon', 'very good', 15, 5, '2020-06-26');
insert into review (id, title, description, meal_id, ratings, created_date) values ('673', 'Syrup - Pancake', 'very poor', 16, 1, '2020-03-09');
insert into review (id, title, description, meal_id, ratings, created_date) values ('320', 'Nutmeg - Ground', 'good', 17, 4, '2019-09-06');
insert into review (id, title, description, meal_id, ratings, created_date) values ('786', 'Wine - Carmenere Casillero Del', 'good', 18, 4, '2020-04-18');
insert into review (id, title, description, meal_id, ratings, created_date) values ('863', 'Gherkin', 'good', 19, 4, '2020-02-07');
insert into review (id, title, description, meal_id, ratings, created_date) values ('919', 'Bok Choy - Baby', 'good', 20, 4, '2020-05-19');


--  MEAL QUERIES --------------------------------------------------------------------------

-- Get all meals:
SELECT * FROM meal;

-- Add a new meal:
INSERT INTO meal(id, title, description, location, due_date, max_reservations, price, created_date)
VALUES('58','Fufu & Eru','Cameroon cultural food heritage','Kembong Town,Manyu 1','2020-06-14','12','€52.01','2020-06-04');

-- Get a meal with any id, fx 1:
SELECT * FROM meal WHERE id LIKE '48';

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes:
UPDATE meal
SET 
title = 'Ndole & Plantain',
description ='Cameroon special delicacy',
location ='Douala-Akwa,Cameroon',
price ='€50.99',
due_date = '2020-06-6 13:29:59'
WHERE id =17;
SELECT * FROM meal WHERE id =17;

-- Delete a meal with any id, fx 1:
DELETE FROM meal
WHERE id = 38;


-- RESERVATION QUERIES ------------------------------------------------------------------------------

-- Get all reservations:
SELECT * FROM reservation;

-- Add a new reservation:
INSERT INTO reservation(id, number_of_guests, meal_id, created_date)
VALUES('941','28','37','2020-06-05');

-- Get a reservation with any id, fx 1:
SELECT * FROM reservation WHERE id = '195';

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes:
UPDATE reservation
SET 
id = '001',
number_of_guests ='12',
meal_id ='27',
created_date = '2020-05-26'
WHERE id = 230;

-- Delete a reservation with any id, fx 1:
DELETE FROM reservation
WHERE id = 639;


-- REVIEW QUERIES --------------------------------------------------------------------------------------

-- Get all reviews:
SELECT * FROM review;

-- Add a new review:
INSERT INTO review (id, title, description, meal_id, ratings, created_date)
VALUES('101','It was a nice day at your restuarant','Extremly Good','46','10','2020-05-15');

-- Get a review with any id, fx 1:
SELECT * FROM review WHERE id = '444';

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes:
UPDATE review
SET 
id = '186',
title ='Very delicious experience'
WHERE id = 156;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 507;


-- FUNCTIONALITY ----------------------------------------------------------------------------------------------------

-- Get meals that has a price smaller than a specific price fx 90:
SELECT * FROM meal 
WHERE price <= '€20';

-- Get meals that still has available reservations:
SELECT * FROM meal m
INNER JOIN reservation r
ON m.id = r.meal_id
WHERE max_reservations > number_of_guests;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde:
SELECT * FROM meal 
WHERE title LIKE '%soup%';

-- Get meals that has been created between two dates:
SELECT * FROM meal 
WHERE created_date 
BETWEEN '2020-05-01' AND '2020-06-05';

-- Get only specific number of meals fx return only 5 meals:
SELECT * FROM meal LIMIT 8;

-- Get the meals that have good reviews:
SELECT m.title,rw.description, rw.ratings FROM meal m
INNER JOIN review rw
ON m.id = rw.meal_id
WHERE rw.ratings >= 4;

-- Get reservations for a specific meal sorted by created_date:
SELECT r.id,m.title,r.created_date FROM reservation r
INNER JOIN meal m
ON m.id = r.meal_id
WHERE m.id = 19
ORDER BY r.created_date DESC;

-- Sort all meals by average number of stars in the reviews:
SELECT m.id, m.title, m.description, avg(r.ratings) as average_review
FROM meal m
INNER JOIN review r
ON m.id = r.meal_id
GROUP BY r.meal_id
ORDER BY average_review DESC;

-- END OF WEEK 3 HOMEWORK -----------------------------------------------------------------------------------------