CREATE TABLE EMPLOYEES (
    EMP_ID     NUMBER PRIMARY KEY,
    EMP_NAME   VARCHAR2(50),
    SALARY     NUMBER(10, 2) CHECK (SALARY > 0),
    DOJ        DATE,
    MANAGER_ID NUMBER,
    DEPT_ID    NUMBER
);

INSERT INTO EMPLOYEES (
    EMP_ID,
    EMP_NAME,
    SALARY,
    DOJ,
    MANAGER_ID,
    DEPT_ID
) VALUES ( 101,
           'MOULISHWAR',
           50000,
           TO_DATE('2024-06-01', 'YYYY-MM-DD'),
           NULL,
           10 );

INSERT INTO EMPLOYEES (
    EMP_ID,
    EMP_NAME,
    SALARY,
    DOJ,
    MANAGER_ID,
    DEPT_ID
) VALUES ( 102,
           'SAI RAJ',
           60000,
           TO_DATE('2024-03-15', 'YYYY-MM-DD'),
           NULL,
           20 );

INSERT INTO EMPLOYEES (
    EMP_ID,
    EMP_NAME,
    SALARY,
    DOJ,
    MANAGER_ID,
    DEPT_ID
) VALUES ( 103,
           'MALIK',
           55000,
           TO_DATE('2024-01-10', 'YYYY-MM-DD'),
           NULL,
           10 );

INSERT INTO EMPLOYEES (
    EMP_ID,
    EMP_NAME,
    SALARY,
    DOJ,
    MANAGER_ID,
    DEPT_ID
) VALUES ( 104,
           'SHARMA',
           47000,
           TO_DATE('2023-11-22', 'YYYY-MM-DD'),
           NULL,
           30 );

INSERT INTO EMPLOYEES (
    EMP_ID,
    EMP_NAME,
    SALARY,
    DOJ,
    MANAGER_ID,
    DEPT_ID
) VALUES ( 105,
           'RAVI KUMAR',
           65000,
           TO_DATE('2022-08-14', 'YYYY-MM-DD'),
           NULL,
           20 );

INSERT INTO EMPLOYEES (
    EMP_ID,
    EMP_NAME,
    SALARY,
    DOJ,
    MANAGER_ID,
    DEPT_ID
) VALUES ( 106,
           'C,M,R',
           52000,
           TO_DATE('2023-05-09', 'YYYY-MM-DD'),
           NULL,
           10 );

INSERT INTO EMPLOYEES (
    EMP_ID,
    EMP_NAME,
    SALARY,
    DOJ,
    MANAGER_ID,
    DEPT_ID
) VALUES ( 107,
           'SAI REDDY',
           58000,
           TO_DATE('2024-02-01', 'YYYY-MM-DD'),
           NULL,
           30 );

INSERT INTO EMPLOYEES (
    EMP_ID,
    EMP_NAME,
    SALARY,
    DOJ,
    MANAGER_ID,
    DEPT_ID
) VALUES ( 108,
           'VIKAS DESAI',
           49000,
           TO_DATE('2023-09-30', 'YYYY-MM-DD'),
           NULL,
           40 );

SELECT
    EMP_ID,
    EMP_NAME,
    DOJ
FROM
    EMPLOYEES
WHERE
    DOJ >= ADD_MONTHS(SYSDATE, -60);

SELECT
    EMP_ID,
    EMP_NAME,
    SALARY,
    SALARY * 12 AS ANNUAL_SALARY
FROM
    EMPLOYEES;

SELECT
    EMP_ID,
    EMP_NAME,
    DOJ,
    FLOOR(MONTHS_BETWEEN(SYSDATE, DOJ) / 12) AS YEARS_OF_SERVICE
FROM
    EMPLOYEES;

UPDATE EMPLOYEES
SET
    SALARY = SALARY * 1.10
WHERE
    SALARY < 30000;