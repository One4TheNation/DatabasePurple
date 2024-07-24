\c cms_db

INSERT INTO department
        (name)
VALUES
        ('Marketing'),
        ('Engineering'),
        ('Business'),
        ('Administration');

INSERT INTO title_roles
        (title, salary, department_id)
VALUES
        ('Marketing Lead', 90000, 1),
        ('Marketing Director', 280000, 1),
        ('Lead Engineer', 250000, 2),
        ('Software Engineer', 120000, 2),
        ('Account Manager', 160000, 3),
        ('Accountant', 125000, 3),
        ('CFO', 6250000, 4),
        ('CEO', 23240000, 4);

INSERT INTO employee
        (first_name, last_name, role_id, manager_id)
VALUES
        ('Timothy', 'Dalton', 1, NULL),
        ('Rodger', 'Moore', 2, 1),
        ('Desmond', 'Llewelyn', 3, NULL),
        ('Ben', 'Whishaw', 4, 3),
        ('Pierce', 'Bronson', 5, NULL),
        ('Naomie', 'Harris', 6, 5),
        ('Daniel', 'Craig', 7, NULL),
        ('Sean', 'Connery', 8, 7);






