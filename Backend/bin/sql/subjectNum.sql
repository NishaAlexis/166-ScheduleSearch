create table subjectNum
(
    id serial PRIMARY KEY,
    "subjectId" INTEGER not NULL,
    "courseTypeId" INTEGER NOT NULL,
    "subjectNum" varchar(8) not null,
    "isOffered" boolean not null,
    "subjectDesc" VARCHAR(128),
    "yearLvl" INTEGER,
    "semester" INTEGER,
    FOREIGN key("subjectId") REFERENCES subjects(id),
    FOREIGN KEY("courseTypeId") REFERENCES courseType(id)
)
