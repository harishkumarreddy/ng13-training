const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, User, Student, Product } = require('./models');

// sync database
async function syncDatabase(forse = false) {
    try {
        // stop printing sequelize queries
        sequelize.options.logging = false;


        await sequelize.sync({ force: forse });
        console.log('Database synced successfully!');
        // create 10 users
        for (let i = 0; i < 10; i++) {
            await User.create({
                name: `User ${i+1}`,
                email: `user${i+1}@mail.com`,
                password: `welcome${i+1}`,
                age: 20 + i,
                contact: `+91 99999999${i+1}`
            });
        }

        // create 10 students
        for (let i = 0; i < 10; i++) {
            await Student.create({
                name: `Student ${i+1}`,
                age: 20 + i,
                contact: `+91 99999999${i+1}`,
                address: `Address ${i+1}`,
                email: `student${i+1}@mail.com`,
            });
        }

        // create 10 products
        for (let i = 0; i < 10; i++) {
            await Product.create({
                name: `Product ${i+1}`,
                price: 100 + i,
                quantity: 10 + i
            });
        }
    } catch (error) {
        console.error('Error syncing database:', error);
    } finally {
        // await sequelize.close();
    }
}

syncDatabase(true);
const app = express();
app.use(bodyParser.json());
// CORS exception
app.use(cors());

const port = 8080;

// Define your routes here
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// user CRUD
// create
app.post('/users', async (req, res) => {
    const { name, email, password, age, contact } = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password,
            age,
            contact
        });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// read all
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// read one
app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where: {
                id
            }
        });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// update
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password, age, contact } = req.body;
    try {
        const user = await User.findOne({
            where: {
                id
            }
        });
        user.name = name;
        user.email = email;
        user.password = password;
        user.age = age;
        user.contact = contact;
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// delete
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where: {
                id
            }
        });
        await user.destroy();
        res.json({
            message: 'User deleted successfully!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// student CRUD
// create
app.post('/students', async (req, res) => {
    const { name, age, contact, address, email } = req.body;
    try {
        const student = await Student.create({
            name,
            age,
            contact,
            address,
            email
        });
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// read all
app.get('/students', async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// read one
app.get('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findOne({
            where: {
                id
            }
        });
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// update
app.put('/students/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, contact, address, email } = req.body;
    try {
        const student = await Student.findOne({
            where: {
                id
            }
        });
        student.name = name;
        student.age = age;
        student.contact = contact;
        student.address = address;
        student.email = email;
        await student.save();
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// delete
app.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findOne({
            where: {
                id
            }
        });
        await student.destroy();
        res.json({
            message: 'Student deleted successfully!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// product CRUD
// create
app.post('/products', async (req, res) => {
    const { name, price, quantity } = req.body;
    try {
        const product = await Product.create({
            name,
            price,
            quantity
        });
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// read all
app.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// read one
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({
            where: {
                id
            }
        });
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// update
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    try {
        const product = await Product.findOne({
            where: {
                id
            }
        });
        product.name = name;
        product.price = price;
        product.quantity = quantity;
        await product.save();
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// delete
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({
            where: {
                id
            }
        });
        await product.destroy();
        res.json({
            message: 'Product deleted successfully!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// order CRUD
// create
app.post('/orders', async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        const order = await Order.create({
            userId,
            productId,
            quantity
        });
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// read all
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// read one
app.get('/orders/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findOne({
            where: {
                id
            }
        });
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// update
app.put('/orders/:id', async (req, res) => {
    const { id } = req.params;
    const { userId, productId, quantity } = req.body;
    try {
        const order = await Order.findOne({
            where: {
                id
            }
        });
        order.userId = userId;
        order.productId = productId;
        order.quantity = quantity;
        await order.save();
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// delete
app.delete('/orders/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findOne({
            where: {
                id
            }
        });
        await order.destroy();
        res.json({
            message: 'Order deleted successfully!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}\n\n`);

    // print all routes in the console as a table with SNO, METHOD, PATH
    const table = [];
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            const { path } = middleware.route;
            const { methods } = middleware.route;
            const method = Object.keys(methods)[0].toUpperCase();
            table.push({
                SNO: table.length + 1,
                METHOD: method,
                PATH: path
            });
        }
    }
    );
    console.table(table);
});
