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
            const result = await db.oneOrNone('CALL get_user_by_id_data($1, $2, $3)', [id, null, null]);

            if (result.out_name !== null) {
                const user = {
                    id: id,
                    name: result.out_name,
                    email: result.out_email
                };
                return user;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    
    }

    static async createUser(name, email) {

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
            const result = await db.one('CALL update_user_data($1, $2, $3, $4, $5)', [id, name, email, null, null]);
            
            const updatedUser = {
                id: result.out_id,
                user_name: result.out_name,
                user_email: result.out_email
            };
            
            return updatedUser;
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
