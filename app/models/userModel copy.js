// userModel.js
const db = require('../db');

class User {
    static async getAllUsers() {
        try {
            return await db.any('CALL get_all_users()');
        } catch (error) {
            throw error;
        }
    }

    static async getUserById(id) {
        try {
            return await db.oneOrNone('CALL get_user_by_id($1)', [id]);
        } catch (error) {
            throw error;
        }
    }

    static async createUser(name, email) {
        // try {
        //     // return await db.one('CALL create_user($1, $2)', [name, email]);
        //     return await db.none('CALL create_user($1, $2)', [name, email]);
        // } catch (error) {
        //     console.error('Custom Error executing getAllUsers:', error);
        //     throw error;
        // }

        // try {
        //     const result = await db.one('CALL create_user($1, $2)', [name, email]);
        //     console.log('Custom Last added row:', result.last_added_row);
        //     console.log('Custom result:', result);
        // } catch (error) {
        //     console.error('Custom Error executing create_user:', error);
        //     throw error;
        // }

        // try {
        //     // Assuming 'db' is your database connection object
        //     const result = await db.one('CALL create_user($1, $2, $3)', [name, email, { out: 'last_added_row', type: 'user' }]);
        //     console.log('Custom Last added row:', result.last_added_row);
        // } catch (error) {
        //     console.error('Custom Error executing create_user:', error);
        //     throw error;
        // }

        // try {
        //     const result = await db.one('CALL create_user($1, $2, $3)', [name, email, {}]);
        //     console.log('Custom Last added row:', result.last_added_row);
        // } catch (error) {
        //     console.error('Custom Error executing create_user:', error);
        //     throw error;
        // }
        
        // try {
        //     const result = await db.one('CALL create_user($1, $2, $3)', [name, email, null]);
        //     console.log('Last added row:', result.last_added_row);
        // } catch (error) {
        //     console.error('Custom Error executing create_user:', error);
        //     throw error;
        // }

        // try {
        //     const result = await db.one('CALL create_user($1, $2)', [name, email]);
        //     console.log('Last added row:', result);
            
        //     // Split the tuple into individual values
        //     const [id, name, email] = result.last_added_row;
        
        //     // Construct JSON response
        //     const lastAddedUser = {
        //         id,
        //         name,
        //         email
        //     };
        //     console.log('Last added user:', lastAddedUser);
            
        //     // Respond with JSON
        //     res.status(200).json(lastAddedUser);
        // } catch (error) {
        //     console.error('Custom Error executing create_user:', error);
        //     throw error;
        // }
        

        // try {
        //     const result = await db.one('CALL create_user($1, $2, $3)', [name, email, null]);
        //     console.log('Last added row:', result);
            
        //     // Split the tuple into individual values
        //     const [id, userName, userEmail] = result.last_added_row;
        
        //     // Construct JSON response
        //     const lastAddedUser = {
        //         id,
        //         name: userName,
        //         email: userEmail
        //     };
        //     console.log('Last added user:', lastAddedUser);
            
        //     // Respond with JSON
        //     res.status(200).json(lastAddedUser);
        // } catch (error) {
        //     console.error('Custom Error executing create_user:', error);
        //     throw error;
        // }

        
        // try {
        //     const result = await db.one('CALL create_user($1, $2, $3)', [name, email, null]);
        //     console.log('custom result:', result);
        //     console.log('custom result.Last added row:', result.last_added_row);
            
        //     // Split the tuple into individual values
        //     const [id, userName, userEmail] = result.last_added_row;
        
        //     // Construct JSON response
        //     const lastAddedUser = {
        //         id,
        //         name: userName,
        //         email: userEmail
        //     };
        //     console.log('Last added user:', lastAddedUser);
            
        //     return lastAddedUser;
        // } catch (error) {
        //     console.error('Custom Error executing create_user:', error);
        //     throw error;
        // }


        try {
            const result = await db.one('CALL create_user_data($1, $2, $3, $4, $5)', [name, email, null, null, null]);
            
            const { id, user_name, user_email } = result;
            
            // Construct JSON response
            const lastAddedUser = {
                id: result.out_id,
                user_name: result.out_name,
                user_email: result.out_email
            };
            
            return lastAddedUser;
        } catch (error) {
            console.error('Custom Error executing create_user:', error);
            throw error;
        }
        
        
        
        
        
        
    }
























    static async updateUser(id, name, email) {
        try {
            return await db.one('CALL update_user($1, $2, $3)', [id, name, email]);
        } catch (error) {
            throw error;
        }
    }

    static async deleteUser(id) {
        try {
            await db.none('CALL delete_user($1)', [id]);
            return 'User deleted successfully';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = User;
