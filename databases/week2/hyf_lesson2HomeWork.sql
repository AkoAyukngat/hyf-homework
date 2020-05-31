-- PART 1: Working with tasks

--  #1a: Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id:
INSERT INTO task (
title, 
description, 
created, 
updated, 
due_date, 
status_id)
VALUES (
'Midnight struggles', 
'Coding like a beast',
'2020-05-20 19:34:43', 
'2020-05-29 23:35:45', 
'2020-06-24 16:00:46', 
 1
 );
 SELECT * FROM task ORDER BY id DESC LIMIT 1;
 
 -- #1b: Change the title of a task:
UPDATE
    task
SET
    title = 'Tickets to paradise Hotel available'
WHERE
    id = 34;
 SELECT * FROM task WHERE id = 34;
 
 -- #1c Change a task due date:
UPDATE
    task
SET
    due_date = '2020-12-31 23:59:00'
WHERE
    status_id = 3 AND status_id = 2;
 
 SELECT*FROM task WHERE status_id IN (3 , 2);
 
-- #1d Change a task status:
UPDATE
    task 
SET
    status_id = 3
WHERE
    id = 35;
    
 SELECT * FROM task;  
 
 -- #1e Mark a task as complete:
  UPDATE
    task
 SET
    status_id = 1
WHERE 
     id = 36;
SELECT * FROM task;
    
-- #1f Delete a task:
DELETE FROM task 
WHERE
    id = 1;
SELECT * FROM task; 
 
-- -------------------------------------------------------- END OF PART ONE --------------------------------------------------------------------------------------

-- PART 2: School database 

-- #2a Class: with the columns: id, name, begins (date), ends (date):
CREATE TABLE class(
   `id` INT AUTO_INCREMENT,
   `class_name` VARCHAR(255),
   `start_date` DATE,
   `end_date` DATE,
   PRIMARY KEY(id)
);

-- #2b Student: with the columns: id, name, email, phone, class_id (foreign key):
CREATE TABLE student(
   `id` INT AUTO_INCREMENT,
   `student_name` VARCHAR(255),
   `email` VARCHAR(100),
   `phone` INT(10),
   `class_id` INT(10),
FOREIGN KEY (`class_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
PRIMARY KEY(id)
);

-- #2c Create an index on the name column of the student table:
CREATE INDEX full_name ON student(student_name);
Show indexes from student;

-- #2d Add a new column to the class table named status which can only have the following values:
--     not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD COLUMN status VARCHAR(255) AFTER end_date;

INSERT INTO class (id, class_name, start_date, end_date,status)
VALUES( 1, 'The Expendable Team','2020-09-02','2021-09-05', 'not-started');

INSERT INTO class (id, class_name, start_date, end_date,status)
VALUES( 4, 'Marvelous Wonder Class','2020-02-15','2021-02-20', 'ongoing');

INSERT INTO class (id, class_name, start_date, end_date,status)
VALUES( 8, 'Mrs Oyere Class of the Brave','2019-02-02','2020-02-05', 'finished');

SELECT * FROM class;

-- --------------------------------- END OF PART TWO ------------------------------------------------------------------------------------

-- PART 3: More queries

-- #3a Get all the tasks assigned to users whose email ends in @spotify.com:
SELECT t.title 
FROM user_task ut 
INNER JOIN task t ON ut.task_id=t.id 
WHERE ut.user_id IN (
    SELECT id
    FROM user 
    WHERE email LIKE '%@spotify.com'
);

-- #3b Get all the tasks for 'Donald Duck' with status 'Not started':
SELECT task.title
FROM task 
INNER JOIN user_task  ON task.id = user_task.task_id
INNER JOIN status  ON task.status_id = status.id 
WHERE user_task.user_id IN (
    SELECT id 
    FROM user
    WHERE name LIKE '%Donald Duck%'
    ) AND status_id LIKE 'Not started';
     

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number):
SELECT * FROM user 
INNER JOIN user_task ON 
user.id = user_task.user_id 
INNER JOIN task ON user_task.task_id = task.id 
WHERE user.name = 'Maryrose Meadows' AND month(created) = 09;


-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT count(*),MONTH(created) FROM task GROUP BY MONTH(created); 