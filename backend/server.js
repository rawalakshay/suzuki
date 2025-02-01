const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const connectDB = require('./database');
connectDB();
const User = require('./models/Users');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send({ message: 'Server is running on port 3001' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json({ message: 'success', data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post("/addUser", [
    body('user').notEmpty().withMessage('User is required'),
    body('interest').notEmpty().withMessage('Interest is required'),
    body('age').isInt({ min: 18 }).withMessage('Age must be a number and at least 18'),
    body('mobile')
    .matches(/^[789]\d{9}$/)
    .withMessage('Mobile number must be a valid Indian mobile number'),
    body('email').isEmail().withMessage('Email is invalid')
], async (req, res) => {
    const errors = validationResult(req);
    console.log('errors :>>', errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ err: errors.array()[0].msg });
    }

    try {
        const { user, interest, age, mobile, email } = req.body;
        const intArr = interest.split(',');

        const newUser = new User({
            user,
            interest: intArr,
            age,
            mobile,
            email,
        });

        await newUser.save();
        res.json({ message: "User added successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

app.delete("/deleteUser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "id is required" });
        }
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});