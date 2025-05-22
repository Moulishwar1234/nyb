-- 21/05/2025
-- NYB INFOTECH
-- Oracle Assessment - 4
-- Objective: Assess your understanding of real-world SQL scenarios using a sample employee database.
-- Scenario: You're managing a database for a company's HR department. Your task is to design and work with an 'employees' table using DDL, DML, and complex queries involving functions, joins, views, and constraints.
-- Instructions:
-- - Use Oracle SQL syntax.
-- - Enclose all string/date values in single quotes.
-- - Comment your queries for better readability.
-- - Avoid hardcoding values unless mentioned.
-- - Use table aliasing, meaningful column aliases, and formatting functions when needed.
-- Sample Table Structure
-- CREATE TABLE employees (
--   emp_id         NUMBER PRIMARY KEY,
--   emp_name       VARCHAR2(50) NOT NULL,
--   department     VARCHAR2(30),
--   salary         NUMBER(8,2),
--   hire_date      DATE,
--   job_title      VARCHAR2(30),
--   email          VARCHAR2(100) UNIQUE
-- );
-- Section A – DDL & Constraints (10 Marks)
-- 1.	Modify the employees table to add a column manager_id that references emp_id from the same table.
-- Creating the 'employees' table
CREATE TABLE employees (
  emp_id         NUMBER PRIMARY KEY,
  emp_name       VARCHAR2(50) NOT NULL,
  department     VARCHAR2(30),
  salary         NUMBER(8,2),
  hire_date      DATE,
  job_title      VARCHAR2(30),
  email          VARCHAR2(100) UNIQUE
);
-- Add manager_id column to employees table
ALTER TABLE employees
ADD manager_id NUMBER;

-- Add foreign key constraint: manager_id must reference emp_id in the same table
ALTER TABLE employees
ADD CONSTRAINT fk_manager
FOREIGN KEY (manager_id)
REFERENCES employees(emp_id);

-- Create departments table
CREATE TABLE departments (
  dept_id    NUMBER PRIMARY KEY,         -- Primary Key
  dept_name  VARCHAR2(30) NOT NULL,      -- Department Name must not be null
  location   VARCHAR2(50)                -- Optional location field
);

-- Add foreign key in employees table to reference departments.dept_name
ALTER TABLE employees
ADD CONSTRAINT fk_department
FOREIGN KEY (department)
REFERENCES departments(dept_name);

-- Create the departments table with a primary key
CREATE TABLE departments (
  dept_id    NUMBER PRIMARY KEY,      -- Unique department ID
  dept_name  VARCHAR2(30) NOT NULL,   -- Department name (must not be NULL)
  location   VARCHAR2(50)             -- Optional location field
);
-- Add a foreign key to employees table on department column
ALTER TABLE employees
ADD CONSTRAINT fk_emp_dept
FOREIGN KEY (department)
REFERENCES departments(dept_name);



-- Insert 5 sample employees into the employees table
INSERT INTO employees (
  emp_id, emp_name, department, salary, hire_date, job_title, email, manager_id
) VALUES (
  201, 'MOULI', 'HR', 55000, TO_DATE('2018-05-10', 'YYYY-MM-DD'), 'HR Manager', 'mouli@company.com', NULL
);

INSERT INTO employees (
  emp_id, emp_name, department, salary, hire_date, job_title, email, manager_id
) VALUES (
  202, 'sai', 'IT', 68000, TO_DATE('2019-07-15', 'YYYY-MM-DD'), 'Software Engineer', 'sai@company.com', 201
);

INSERT INTO employees (
  emp_id, emp_name, department, salary, hire_date, job_title, email, manager_id
) VALUES (
  203, 'nagendra', 'Finance', 62000, TO_DATE('2020-03-01', 'YYYY-MM-DD'), 'Accountant', 'nagendra@company.com', 201
);

INSERT INTO employees (
  emp_id, emp_name, department, salary, hire_date, job_title, email, manager_id
) VALUES (
  204, 'malik', 'Marketing', 59000, TO_DATE('2021-01-20', 'YYYY-MM-DD'), 'Marketing Analyst', 'malik@company.com', 201
);

INSERT INTO employees (
  emp_id, emp_name, department, salary, hire_date, job_title, email, manager_id
) VALUES (
  205, 'ram', 'IT', 71000, TO_DATE('2022-11-30', 'YYYY-MM-DD'), 'Senior Developer', 'ram @company.com', 202
);
COMMENT;

-- Update salary by 10% for employees hired before 2020
UPDATE employees
SET salary = salary * 1.10
WHERE hire_date < TO_DATE('2020-01-01', 'YYYY-MM-DD');

