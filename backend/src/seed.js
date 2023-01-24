const mongoose = require('mongoose');
const EventModel = require('./models/eventModel')(mongoose); // import Event model
const UserModel = require('./models/userModel')(mongoose); // import Event model

const randomEvents = [
    {
        title: 'Event 1',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 0, 12),
        description: 'Description'
    },
    {
        title: 'Event 2',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 0, 12),
        description: 'Description'
    },

    {
        title: 'Event 3',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 0, 12),
        description: 'Description'
    },
    {
        title: 'Event 4',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 1, 12),
        description: 'Description'
    },

    {
        title: 'Event 5',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 1, 12),
        description: 'Description'
    },
    {
        title: 'Event 6',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 2, 12),
        description: 'Description'
    },

    {
        title: 'Event 7',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 2, 12),
        description: 'Description'
    },
    {
        title: 'Event 8',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 2, 12),
        description: 'Description'
    },

    {
        title: 'Event 9',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 3, 12),
        description: 'Description'
    },
    {
        title: 'Event 10',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 4, 12),
        description: 'Description'
    },

    {
        title: 'Event 11',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 5, 12),
        description: 'Description'
    },
    {
        title: 'Event 12',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 5, 12),
        description: 'Description'
    },
    // Add more events here
];

const admins = [
    {
        name: 'Francesco',
        surname: 'Foschini',
        email: 'fra@admin.it',
        phone: 364474,
        password: "password",
        category: 'Admin',
    },
    {
        name: 'Alessia',
        surname: 'Rocco',
        email: 'ale@admin.it',
        phone: 322456,
        password: "password",
        category: 'Admin',
    },

];

async function seedEvents() {
    try {
        const mongoHost = "localhost"//'MONGO_HOST' in env ? env.MONGO_HOST : "localhost"
        const mongoPort = 27017 //'MONGO_PORT' in env ? env.MONGO_PORT : 27017
        //const mongoUser = "admin" //'MONGO_USER' in env ? env.MONGO_USER : "admin"
        //const mongoPassword = "admin" //'MONGO_PASSWORD' in env ? env.MONGO_PASSWORD : "admin"
        //const mongoConnection = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/test`;
        const mongoConnection = `mongodb://${mongoHost}:${mongoPort}/test`

        console.log(mongoConnection)
        await mongoose.connect(mongoConnection)
        console.log('Connected to MongoDB');

        // elimino gli eventi esistenti
        await EventModel.deleteMany({});
        console.log('Existing events removed');

        // popolo la collezione eventi
        await EventModel.insertMany(randomEvents);
        console.log('Events seeded successfully');

        //elimino gli user esistenti
        await UserModel.deleteMany({})
        console.log('Existing users removed');

        // popolo la collezione users con i due admin
        await UserModel.insertMany(admins);
        console.log('Admins inserted successfully');

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
}

seedEvents()
