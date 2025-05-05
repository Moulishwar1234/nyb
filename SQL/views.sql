--froce view
--it is used to difine a view on non existing table/another view
 --it is non exsting table 
 --All objects -> current schema specific objects
 --DBS-> all schema related datebase objectss
SELECT
    *
FROM
    ALL_OBJECTS
WHERE
        OBJECT_TYPE = 'Table'
    AND OWNER = 'Rk'
    AND OBJECT_NAME = 'XXNYB_FROCE_DEMO_V';

CREATE FORCE VIEW XXNYB_FROCE_DEMO_V AS
    SELECT
        *
    FROM
        XXNY_DEMO_FROCE_TABLE;

 ---vertical view---

CREATE VIEW EMP_VERTICAL_VS AS
    SELECT
        EMP_ID        AS EMPLOYE_ID,
        EMP_NAME      AS EMPLOYE_NAME,
        EMP_LASTNAME  AS EMPLOYE_LASTNAME,
        EMP_FIRSTNAME AS EMPLOYE_FIRSTNAME,
        EMP_PHNO      AS EMPLOYE_PHONE_NO
    FROM
        EMPLOYEES;

SELECT * FROM EMP_VERTICAL_VS   

--Horizontal view---

CREATE VIEW EMP_HORIZONTAL_VS AS
SELECT *
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 100;

SELECT * FROM EMP_HORIZONTAL_VS;



---functional view---
CREATE VIEW emp_functional_vse AS
SELECT
    EMPLOYEES.DEPARTMENT_ID,
    MAX(EMPLOYEES.SALARY) AS max_salary,
    MIN(EMPLOYEES.SALARY) AS min_salary
FROM EMPLOYEES
GROUP BY EMPLOYEES.DEPARTMENT_ID
ORDER BY EMPLOYEES.DEPARTMENT_ID;




