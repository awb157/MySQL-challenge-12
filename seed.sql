USE emploee_db

INSERT INTO departments(name)
VALUES ("MANUFACTURING"),("LOGISTICS");
INSERT INTO roles (title,salary,dapartment_id)
VALUES ("engeneer",70000,1),("maneger",80000,2);

INSERT INTO emploees (first_name,last_name,role_id,manager_id)
VALUES ("austin","bennett",1,NULL),("summer","bennett",2,1);