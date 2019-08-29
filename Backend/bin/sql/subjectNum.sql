create table subjectNum
(
    id serial PRIMARY KEY,
    "subjectId" INTEGER not NULL,
    "courseTypeId" INTEGER NOT NULL,
    "subjectNum" INTEGER not null,
    "subjectDesc" VARCHAR(64),
    FOREIGN key("subjectId") REFERENCES subjects(id),
    FOREIGN KEY("courseTypeId") REFERENCES courseType(id)
)
