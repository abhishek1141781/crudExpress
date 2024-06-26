// userController.js
const UserService = require("../services/userService");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  static async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const newUser = await UserService.createUser(name, email);
      res.json(newUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const updatedUser = await UserService.updateUser(id, name, email);
      res.json(updatedUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const message = await UserService.deleteUser(id);
      res.json(message);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
}

module.exports = UserController;
