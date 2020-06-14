
CREATE TABLE cocoa_production (
	`product_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`product_name` VARCHAR(255) NOT NULL,
	`start_date` DATETIME NOT NULL,
	`due_date` DATETIME NULL DEFAULT NULL,
	`product_location` FLOAT NOT NULL,
    `price` DECIMAL(10,2) NOT NULL CHECK (price >= 0),
     PRIMARY KEY (`product_id`,`product_name`),
     FOREIGN KEY (`price`) REFERENCES customer(`order_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE product_status (
	`status_id`  INT(20) NOT NULL,
	`status_name` VARCHAR(255) NOT NULL,
     FOREIGN KEY (`status_name`) REFERENCES customer(`customer_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE delivery (
	`order_id` INT(20) NOT NULL,
	`product_name` VARCHAR(255) NOT NULL,
	`product_id` INT(20) NOT NULL,
	`delivery_date` DATETIME NOT NULL,
	`phone` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`chauffeur_name` VARCHAR(255) NOT NULL,
    CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE customer (
	`customer_id` INT(20)NOT NULL,
	`customer_name` VARCHAR(255) NOT NULL,
	`phone` VARCHAR(255) NULL,
	`email` VARCHAR(255) NOT NULL,
	`order_id` INT(20) NOT NULL,
	`address` VARCHAR(255) NOT NULL,
	`order_date`DATETIME NOT NULL,
	`product_id` INT(20) NOT NULL,
     PRIMARY KEY(`customer_id`,`order_id`),
     FOREIGN KEY (`order_id`) REFERENCES customer(`customer_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


