const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

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
    let users = await User.find({});
    console.log('users :>>', users);
    return res.json({ message: 'success', data: users });
});

app.post("/addUser", async (req, res) => {
    try {
        const { userName, interest, age, mobile, email } = req.body;

        console.log('interest :>>', interest);
        let intArr = interest.split(',')

        const newUser = new User({
            user: userName,
            interest: intArr,
            age,
            mobile,
            email,
        });

        await newUser.save();
        return res.json({ message: "User added successfully" });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});