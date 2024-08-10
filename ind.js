const express = require('express'); // for CJS (CommonJS Module)

const app = express();
const port = process.env.PORT || 30001;

let data = [
    { "name": "Arjun Tripathi", "course": "MCA", "roll_no": "14", "id": 1 },
    { "name": "Rahul Durgapal", "course": "MCA", "roll_no": "36", "id": 2 },
    { "name": "Aman Yadav", "course": "MCA", "roll_no": "08", "id": 3 }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET / - Get all users
app.get('/', (req, res) => {
    res.status(200).json(data);
});

// GET /:id - Get a single user by ID
app.get('/:id', (req, res) => {
    const found = data.find(item => item.id === parseInt(req.params.id));
    if (found) {
        res.status(200).json(found);
    } else {
        res.status(404).send('User not found');
    }
});

// POST / - Create a new user
app.post('/', (req, res) => {
    const { name, course, roll_no } = req.body;
    if (!name || !course || !roll_no) {
        return res.status(400).send('Missing user data');
    }

    const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
    const newItem = { id: newId, name, course, roll_no };
    data.push(newItem);
    res.status(201).json({ message: "User successfully created", user: newItem });
});

// PUT /:id - Update a user by ID
app.put('/:id', (req, res) => {
    const found = data.find(item => item.id === parseInt(req.params.id));
    if (found) {
        const { name, course, roll_no } = req.body;
        if (name) found.name = name;
        if (course) found.course = course;
        if (roll_no) found.roll_no = roll_no;

        res.status(200).json({ message: "User data updated", user: found });
    } else {
        res.status(404).send('User not found');
    }
});

// PATCH /:id - Partially update a user by ID
app.patch('/:id', (req, res) => {
    const found = data.find(item => item.id === parseInt(req.params.id));
    if (found) {
        if (req.body.name) found.name = req.body.name;
        if (req.body.course) found.course = req.body.course;
        if (req.body.roll_no) found.roll_no = req.body.roll_no;

        res.status(200).json({ message: "User data partially updated", user: found });
    } else {
        res.status(404).send('User not found');
    }
});

// DELETE /:id - Delete a user by ID
app.delete('/:id', (req, res) => {
    const index = data.findIndex(item => item.id === parseInt(req.params.id));
    if (index !== -1) {
        data.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
