

Task 1: 
Please find all employees that have a salary greater than 3000 and less than 4000

    SELECT employee_id, last_name, first_name, salary
    FROM hr.employees
    WHERE salary > 30000 and salary < 40000;


SELECT employee_id, last_name, first_name, salary
FROM hr.employees
WHERE salary BETWEEN 30000 and 40000;


Task 2: 
List the employees whose last name is longer than 6 characters.

    SELECT employee_id, last_name, first_name
    FROM hr.employees
    WHERE last_name LIKE '______%';

    SELECT SUBSTRING(last_name, 1, 6) AS ExtractString, salary, job_id
    FROM hr.employees;

Task 3: 
 find all employees that have a salary greater than 8000, and those hired after 1996 (use implicit conversion of a date as a string to the DATE type)
    
    SELECT  last_name, salary, hire_date
    FROM hr.employees
    WHERE salary > 80000 and hire_date > ('1996-1-1');





Task 4: 
