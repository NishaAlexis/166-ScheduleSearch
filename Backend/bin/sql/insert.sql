INSERT INTO courseType
    ("courseType")
VALUES('General Education');

INSERT INTO courseType
    ("courseType")
VALUES('Major');

INSERT INTO subjects
    ("subjectName")
VALUES('Computer Science');

INSERT INTO subjects
    ("subjectName")
VALUES('Mathematics');

INSERT INTO subjects
    ("subjectName")
VALUES('Literature');

INSERT INTO subjectNum
    ("subjectId", "courseTypeId", "subjectNum", "subjectDesc")
VALUES('1', '2', '11', 'Introduction to Computer Science');

INSERT INTO subjectNum
    ("subjectId", "courseTypeId", "subjectNum", "subjectDesc")
VALUES('2', '2', '53', 'Elementary Analysis I');

INSERT INTO subjectNum
    ("subjectId", "courseTypeId", "subjectNum", "subjectDesc")
VALUES('1', '2', '56', 'Discrete Mathematical Structures in Computer Science 1');
