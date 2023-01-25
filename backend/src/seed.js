const mongoose = require('mongoose');
const EventModel = require('./models/eventModel')(mongoose); // import Event model
const UserModel = require('./models/userModel')(mongoose); // import Event model

const randomEvents = [
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 1',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 0, 12),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 2',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 0, 12),
        description: 'Description',
        users: []
    },

    {
        title: 'Event 3',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 0, 12),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 4',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 1, 12),
        description: 'Description',
        users: []
    },

    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 5',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 1, 12),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 6',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 2, 12),
        description: 'Description',
        users: []
    },

    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 7',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 2, 12),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 8',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 2, 12),
        description: 'Description',
        users: []
    },

    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 9',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 3, 12),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 10',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 4, 12),
        description: 'Description',
        users: []
    },

    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 11',
        author: 'Author 1',
        image: '',
        category: 'Category1',
        date: new Date(2023, 5, 12),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 12',
        author: 'Author 2',
        image: '',
        category: 'Category2',
        date: new Date(2023, 5, 12),
        description: 'Description',
        users: []
    },
    // Add more events here
];

const admins = [
    {
        _id: new mongoose.mongo.ObjectId(),
        name: 'Francesco',
        surname: 'Foschini',
        email: 'fra@admin.it',
        phone: 364474,
        password: "password",
        category: 'Admin',
        events: [randomEvents[0]._id, randomEvents[1]._id]
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        name: 'Alessia',
        surname: 'Rocco',
        email: 'ale@admin.it',
        phone: 322456,
        password: "password",
        category: 'Admin',
        events: []
    },

];

randomEvents[0].users = [admins[0]._id]
randomEvents[1].users = [admins[0]._id]

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
