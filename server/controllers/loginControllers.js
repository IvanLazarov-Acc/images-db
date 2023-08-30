
const User = require("../database/models/User.js");

const registerUser = async (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const [user, created] = await User.findOrCreate({
            where: { email, username },
            defaults: { username, email, password },
        });

        if (created) {
            res.status(201).json({ message: 'User created', user });
        } else {
            res.status(200).json({ message: 'User found', user });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }

};

const loginUser = async (req, res) => {

    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;


};

const getUsers = async (req, res) => {
    const users = await User.findAll({});
    console.log(users)
    res.send(users);
};

module.exports = {
    getUsers, loginUser, registerUser
};