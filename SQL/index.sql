--unique index:-
CREATE TABLE NYB_EMP_NEW_TEST (
    EMP_ID    NUMBER,
    EMP_NAME  VARCHAR(200),
    HIRE_DATE DATE,
    SALAR     NUMBER,
    DEPT_ID   NUMBER
);

INSERT INTO NYB_EMP_NEW_TEST VALUES ( 001,
                                      'Mouli',
                                      SYSDATE - 189,
                                      1000,
                                      10 );

INSERT INTO NYB_EMP_NEW_TEST VALUES ( 002,
                                      'Nagendra',
                                      SYSDATE - 189,
                                      1100,
                                      20 );

INSERT INTO NYB_EMP_NEW_TEST VALUES ( 003,
                                      'Yaswanth',
                                      SYSDATE - 189,
                                      1200,
                                      30 );

INSERT INTO NYB_EMP_NEW_TEST VALUES ( 004,
                                      'Vamsi',
                                      SYSDATE - 189,
                                      1300,
                                      40 );

INSERT INTO NYB_EMP_NEW_TEST VALUES ( 005,
                                      'sai',
                                      SYSDATE - 189,
                                      1400,
                                      50 );

INSERT INTO NYB_EMP_NEW_TEST VALUES ( 006,
                                      'charan',
                                      SYSDATE - 189,
                                      1500,
                                      60 );

COMMIT;

SELECT
    *
FROM
    NYB_EMP_NEW_TEST;
--composite index(multi-column index)
-- Assuming EMPLOYEES has dept_id, hire_date, salary
CREATE TABLE NYB_EMP_COMPOSITE_IDX_TABLE
    AS
        SELECT
            DEPT_ID,
            HIRE_DATE,
            SALARY
        FROM
            EMPLOYEES;

CREATE INDEX IDX_DEPT_HIRE ON
    NYB_EMP_COMPOSITE_IDX_TABLE (
        DEPT_ID,
        HIRE_DATE
    );

SELECT
    *
FROM
    NYB_EMP_COMPOSITE_IDX_TABLE
WHERE
        DEPT_ID = 80
    AND SALARY >= 10000;
CREATE TABLE NYB_EMP_COMPOSITE_IDX_TABLE AS
SELECT DEPT_ID, HIRE_DATE, SALARY FROM EMPLOYEES;
INSERT INTO NYB_EMP_COMPOSITE_IDX_TABLE
VALUES (100, TO_DATE('2022-01-01', 'YYYY-MM-DD'), 12000);
COMMIT;
SELECT * from NYB_EMP_COMPOSITE_IDX_TABLE;


--function based index

