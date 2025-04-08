--All Constraints
--Create a table and define all constraints
-- XXNYB_EMP_COURSES
-- columns: course_no, course_name, employee_id, course_description, comments
-- Parent Table: XXNYB_EMPLOYEES_TEST Ref: EMPLOYEE_ID

CREATE TABLE XXNYB_EMP_COURSES (
    COURSE_NO          NUMBER,
    COURSE_NAME        VARCHAR2(200) NOT NULL,
    EMPLOYEE_ID        NUMBER NOT NULL,
    DEPARTMENT_ID      NUMBER NOT NULL,
    COURSE_DESCRIPTION VARCHAR2(500),
    COURSE_RATING      VARCHAR2(10) DEFAULT 'NA',
    COMMENTS           VARCHAR2(500),
    CONSTRAINT COURSE_NO_PK PRIMARY KEY ( COURSE_NO ),
    CONSTRAINT EMP_ID_FK FOREIGN KEY ( EMPLOYEE_ID )
        REFERENCES XXNYB_EMPLOYEES_TEST ( EMPLOYEE_ID ),
    CONSTRAINT DEPARTMENT_ID_CHK CHECK ( DEPARTMENT_ID <= 100 )
);

--Define Primary Key After the table definition

ALTER TABLE XXNYB_EMP_COURSES ADD CONSTRAINT COURSE_NO_PK PRIMARY KEY ( COURSE_NO );

--drop composite primary key on xxnyb_employees_test

ALTER TABLE XXNYB_EMPLOYEES_TEST DROP CONSTRAINT EMP_PK;

--define primary key on employee_id from xxnyb_employees_test

ALTER TABLE XXNYB_EMPLOYEES_TEST ADD CONSTRAINT EMP_ID_PK PRIMARY KEY ( EMPLOYEE_ID );

--delete the duplicate data

SELECT
    *
FROM
    XXNYB_EMPLOYEES_TEST
ORDER BY
    EMPLOYEE_ID;

--ROWID
SELECT
    XET.ROWID,
    LENGTH(XET.ROWID),
    XET.*
FROM
    XXNYB_EMPLOYEES_TEST XET
ORDER BY
    XET.ROWID DESC;

SELECT
    XET.ROWID,
    XET.*
FROM
    XXNYB_EMPLOYEES_TEST XET
WHERE
    XET.EMPLOYEE_ID = 1002
ORDER BY
    XET.ROWID DESC;

DELETE FROM XXNYB_EMPLOYEES_TEST
WHERE
    ROWID = 'AAATeTAAPAAAAIeAAB';

COMMIT;

--ROWNUM
SELECT
    *
FROM
    (
        SELECT
            XET.ROWID,
            XET.*
        FROM
            XXNYB_EMPLOYEES_TEST XET
        WHERE
            XET.EMPLOYEE_ID = 1001
        ORDER BY
            XET.ROWID DESC
    ) EMP_TEST
WHERE
    ROWNUM < 3;

SELECT
    E.ROWID,
    E.*
FROM
    EMPLOYEES E
WHERE
    ROWNUM < 12;