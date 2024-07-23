INSERT INTO department (name)
VALUES  ("Human Resources")  
        ("Marketing")
        ("Sales")
        ("Information Technology")
        ("Administrative",)

INSERT INTO title_role (title, salary, department_id)
VALUES  ("Sales Executive", 65k, 3) --1
        ("Sales Manager", 85k, 3) --2
        ("Resources Assistant", 50k, 1) --3
        ("Resources Manager", 85k, 1) --4 
        ("Marketing Lead", 95k, 2) --5
        ("Technology Assistant", 120k, 4) --6
        ("Database Technologist", 175k, 4) --7
        ("Technology Manger", 220k, 4) --8
        ("Operations Manager", 195k, 5) --9
        ("Director of IT & HR ", 750k, 5) --10
        ("CFO of M&S", 1m, 5) --11
        ("CEO", 6m, 5) --12

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("David", "Niven" 3, 0)
        ("George", "Lazenby" 4, 1)
        ("Geoffrey", "Holder" 5, 0)
        ("Mads", "Mikkelsen" 1, 0)
        ("Gert", "Frobe" 2, 1)
        ("Richard", "Kiel" 6, 0)
        ("Timothy", "Dalton" 7, 0)
        ("Christopher", "Walken" 9, 1)
        ("Roger", "Moore" 8, 1)
        ("Daniel", "Craig" 10, 1)
        ("Pierce", "Brosnan" 11, 1)
        ("Shawn", "Connery" 12, 1)

