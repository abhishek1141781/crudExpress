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
        try {
            // return await db.one('CALL create_user($1, $2)', [name, email]);
            return await db.none('CALL create_user($1, $2)', [name, email]);
        } catch (error) {
            console.error('Error executing getAllUsers:', error);
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
