const mongoose = require('mongoose');
const EventModel = require('./models/eventModel')(mongoose); // import Event model

const randomEvents = [
    {
        title: 'Event 1',
        author: 'Author 1',
        image: '',
        category: 'Category 1',
        date: new Date(),
        description: 'Description'
    },
    {
        title: 'Event 2',
        author: 'Author 2',
        image: '',
        category: 'Category 2',
        date: new Date(),
        description: 'Description'
    },

    {
        title: 'Event 3',
        author: 'Author 1',
        image: '',
        category: 'Category 1',
        date: new Date(),
        description: 'Description'
    },
    {
        title: 'Event 4',
        author: 'Author 2',
        image: '',
        category: 'Category 2',
        date: new Date(),
        description: 'Description'
    },

    {
        title: 'Event 5',
        author: 'Author 1',
        image: '',
        category: 'Category 1',
        date: new Date(),
        description: 'Description'
    },
    {
        title: 'Event 6',
        author: 'Author 2',
        image: '',
        category: 'Category 2',
        date: new Date(),
        description: 'Description'
    },

    {
        title: 'Event 7',
        author: 'Author 1',
        image: '',
        category: 'Category 1',
        date: new Date(),
        description: 'Description'
    },
    {
        title: 'Event 8',
        author: 'Author 2',
        image: '',
        category: 'Category 2',
        date: new Date(),
        description: 'Description'
    },

    {
        title: 'Event 9',
        author: 'Author 1',
        image: '',
        category: 'Category 1',
        date: new Date(),
        description: 'Description'
    },
    {
        title: 'Event 10',
        author: 'Author 2',
        image: '',
        category: 'Category 2',
        date: new Date(),
        description: 'Description'
    },

    {
        title: 'Event 11',
        author: 'Author 1',
        image: '',
        category: 'Category 1',
        date: new Date(),
        description: 'Description'
    },
    {
        title: 'Event 12',
        author: 'Author 2',
        image: '',
        category: 'Category 2',
        date: new Date(),
        description: 'Description'
    },
    // Add more events here
];

async function seedEvents() {
    try {
        const mongoHost = "mongodb"//'MONGO_HOST' in env ? env.MONGO_HOST : "localhost"
        const mongoPort = 27017 //'MONGO_PORT' in env ? env.MONGO_PORT : 27017
        const mongoUser = "admin" //'MONGO_USER' in env ? env.MONGO_USER : "admin"
        const mongoPassword = "admin" //'MONGO_PASSWORD' in env ? env.MONGO_PASSWORD : "admin"
        //const mongoConnection = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/test`;
        const mongoConnection = `mongodb://${mongoHost}:${mongoPort}/test`

        await mongoose.connect(mongoConnection)
        console.log('Connected to MongoDB');

        // Clear existing events
        await EventModel.deleteMany({});
        console.log('Existing events removed');

        // Insert new events
        await EventModel.insertMany(randomEvents);
        console.log('Events seeded successfully');

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
}

seedEvents();
