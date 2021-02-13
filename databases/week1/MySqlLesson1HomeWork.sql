
-- #1 Find out how many tasks are in the task table
SELECT COUNT(id) AS task_count FROM task;

-- #2 Find out how many tasks in the task table do not have a valid due date
 SELECT COUNT(id) AS invalid_due_date FROM task WHERE task.due_date IS NULL;
 
 -- #3 Find all the tasks that are marked as done
 SELECT t.title,s.name FROM task t INNER JOIN status s ON t.status_id= s.id where s.name ='Done';
 
 -- #4 Find all the tasks that are not marked as done
 SELECT t.title,s.name FROM task t INNER JOIN status s ON t.status_id = s.id where s.name ='Not started' or s.name = 'In progress';
 
 -- #5 Get all the tasks, sorted with the most recently created first
 SELECT * FROM task ORDER BY created DESC;
 
 -- #6 Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;

-- #7 Get the title and due date of all tasks where the title or description contains database
SELECT title,due_date,description FROM task WHERE title LIKE '%database%' OR description LIKE '%database%' ; 

-- #8 Get the title and status (as text) of all tasks
SELECT  title,status.name FROM task
INNER JOIN status ON status.id=status_id;

-- #9 Get the name of each status, along with a count of how many tasks have that status
SELECT status.name as names, COUNT(task.status_id) FROM task INNER JOIN status ON task.status_id = status.id group by names;

-- #10 Get the names of all statuses, sorted by the status with most tasks first
 SELECT status.name, COUNT(task.status_id)
 FROM task INNER JOIN status ON task.status_id = status.id
GROUP BY status.name ORDER BY COUNT(task.status_id) DESC;

