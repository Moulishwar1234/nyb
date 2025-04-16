--JOINS  (Non - ANSI Syntax)
--Simple Join
--Simple Equi Join

SELECT
    e.*,
    d.department_name,
    d.location_id
FROM
    employees   e,
    departments d
WHERE
    e.department_id = d.department_id;
    
select * from employees;


--Simple Non-Equi Join

SELECT
    e.*,
    d.department_name
FROM
    employees   e,
    departments d
WHERE
    e.department_id != d.department_id;
    

SELECT
    e.*,
    d.department_id dept_department_id,
    d.department_name
FROM
    employees   e,
    departments d
WHERE
    e.department_id != d.department_id
ORDER BY e.employee_id;


select * from departments;

select 106* 26 from dual;


--Cross Join/Cartesian Product

SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
ORDER BY e.employee_id;
    
select count(*) from employees;  --107
select count(*) from departments; --27

select 107 * 27 from dual; --2889

--SELF Join

SELECT
    e1.*,
    e2.first_name manager_first_name,
    e2.last_name manager_last_name
FROM
    employees e1,
    employees e2
WHERE
    e1.manager_id = e2.employee_id;
    
    
--OUTER Join
--Left Outer Join

SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
WHERE
    e.department_id = d.department_id (+);
    
--Right Outer Join

SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
WHERE
    e.department_id (+) = d.department_id;
    
    
--Full Outer Join

SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
WHERE
    e.department_id = d.department_id (+)   --left outer join  --107
UNION
SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
WHERE
    e.department_id (+) = d.department_id;  --right outer join  --122


    SELECT
    OWNER,
    TABLE_NAME
FROM
    ALL_TABLES
WHERE
    TABLE_NAME LIKE '%EMP%';

SELECT
    E.EMPLOYEE_ID,
    E.FIRST_NAME,
    E.LAST_NAME,
    D.DEPARTMENT_NAME
FROM
         HR.EMPLOYEES E
    INNER JOIN HR.DEPARTMENTS D ON E.DEPARTMENT_ID = D.DEPARTMENT_ID;

CREATE TABLE EMPLOYEES (
    EMPLOYEE_ID   NUMBER,
    FIRST_NAME    VARCHAR2(50),
    LAST_NAME     VARCHAR2(50),
    DEPARTMENT_ID NUMBER
);

CREATE TABLE DEPARTMENTS (
    DEPARTMENT_ID   NUMBER,
    DEPARTMENT_NAME VARCHAR2(100)
);

SELECT
    E.EMPLOYEE_ID,
    E.FIRST_NAME,
    E.LAST_NAME,
    D.DEPARTMENT_NAME
FROM
    HR.EMPLOYEES   E
    LEFT JOIN HR.DEPARTMENTS D ON E.DEPARTMENT_ID = D.DEPARTMENT_ID;
SELECT
    E.EMPLOYEE_ID,
    E.FIRST_NAME,
    E.LAST_NAME,
    D.DEPARTMENT_NAME
FROM
    HR.EMPLOYEES   E
    RIGHT JOIN HR.DEPARTMENTS D ON E.DEPARTMENT_ID = D.DEPARTMENT_ID;