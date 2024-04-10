```sql
DROP PROCEDURE IF EXISTS create_user_data;

-- Create stored procedure for creating a new user and returning the last added row
CREATE OR REPLACE PROCEDURE create_user(name VARCHAR, email VARCHAR, OUT last_added_row users)
AS $$
BEGIN
    INSERT INTO users (name, email)
    VALUES (name, email)
    RETURNING * INTO last_added_row;
END;
$$ LANGUAGE plpgsql;

ERROR: column reference "id" is ambiguous
CREATE OR REPLACE PROCEDURE create_user_data(in_name VARCHAR, in_email VARCHAR, OUT id INT, OUT out_name VARCHAR, OUT out_email VARCHAR)
AS $$
BEGIN
    INSERT INTO users (name, email)
    VALUES (in_name, in_email)
    RETURNING id, name, email INTO id, out_name, out_email;
END;
$$ LANGUAGE plpgsql;

ERROR: parameter name "name" used more than once
CREATE OR REPLACE PROCEDURE create_user_out_data(name VARCHAR, email VARCHAR, OUT id INT, OUT name VARCHAR, OUT email VARCHAR)
AS $$
BEGIN
    INSERT INTO users (name, email)
    VALUES (name, email)
    RETURNING id, name, email INTO id, name, email;
END;
$$ LANGUAGE plpgsql;



CREATE OR REPLACE PROCEDURE create_user_data(in_name VARCHAR, in_email VARCHAR, OUT out_id INT, OUT out_name VARCHAR, OUT out_email VARCHAR)
AS $$
BEGIN
    INSERT INTO users (name, email)
    VALUES (in_name, in_email)
    RETURNING users.id, users.name, users.email INTO out_id, out_name, out_email;
END;
$$ LANGUAGE plpgsql;


