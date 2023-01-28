const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const EventModel = require('./models/eventModel')(mongoose); // import Event model
const UserModel = require('./models/userModel')(mongoose); // import Event model

/******************************** INITIAL EVENTS ************************************/
const randomEvents = [
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 1',
        author: '',
        category: 'concert',
        date: new Date(2023, 0, 11),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 2',
        author: '',
        category: 'birthday',
        date: new Date(2023, 0, 12),
        description: 'Description',
        users: []
    },

    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 3',
        author: '',
        category: 'party',
        date: new Date(2023, 0, 13),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 4',
        author: '',
        category: 'concert',
        date: new Date(2023, 1, 14),
        description: 'Description',
        users: []
    },

    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 5',
        author: '',
        category: 'birthday',
        date: new Date(2023, 1, 15),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 6',
        author: '',
        category: 'party',
        date: new Date(2023, 2, 16),
        description: 'Description',
        users: []
    },

    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 7',
        author: '',
        category: 'concert',
        date: new Date(2023, 2, 17),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 8',
        author: '',
        category: 'birthday',
        date: new Date(2023, 2, 18),
        description: 'Description',
        users: []
    },

    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 9',
        author: '',
        category: 'concert',
        date: new Date(2023, 3, 19),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 10',
        author: '',
        category: 'party',
        date: new Date(2023, 4, 20),
        description: 'Description',
        users: []
    },

    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 11',
        author: '',
        category: 'birthday',
        date: new Date(2023, 5, 21),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 12',
        author: '',
        category: 'party',
        date: new Date(2023, 6, 22),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 13',
        author: '',
        category: 'birthday',
        date: new Date(2023, 7, 22),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 14',
        author: '',
        category: 'concert',
        date: new Date(2023, 8, 12),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 15',
        author: '',
        category: 'concert',
        date: new Date(2023, 8, 8),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 16',
        author: '',
        category: 'birthday',
        date: new Date(2023, 4, 9),
        description: 'Description',
        users: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        title: 'Event 17',
        author: '',
        category: 'party',
        date: new Date(2023, 5, 11),
        description: 'Description',
        users: []
    },
    // Add more events here
];

/******************************* INITIAL USERS *************************************/

const initial_users = [
    {
        _id: new mongoose.mongo.ObjectId(),
        name: 'Francesco',
        surname: 'Foschini',
        email: 'fra@admin.it',
        phone: 364474,
        password: "password",
        birthday: new Date(1998, 9, 17),
        category: 'a',
        inscriptions: [],
        my_organizations: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        name: 'Alessia',
        surname: 'Rocco',
        email: 'ale@admin.it',
        phone: 322456,
        password: "password",
        birthday: new Date(1998, 6, 16),
        category: 'a',
        inscriptions: [],
        my_organizations: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        name: 'Andrea',
        surname: 'leonardi',
        email: 'leo@user.it',
        phone: 32567234,
        password: "password",
        birthday: new Date(1998, 5, 14),
        category: 'p',
        inscriptions: [randomEvents[0]._id, randomEvents[1]._id],
        my_organizations: []
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        name: 'Marco',
        surname: 'Solaroli',
        email: 'sola@organizer.it',
        phone: 3253748,
        password: "password",
        birthday: new Date(1998, 11, 27),
        category: 'o',
        inscriptions: [],
        my_organizations: [randomEvents[0]._id, randomEvents[2]._id,
            randomEvents[4]._id, randomEvents[6]._id, randomEvents[8]._id,
            randomEvents[10]._id,]
    },
    {
        _id: new mongoose.mongo.ObjectId(),
        name: 'Elisa',
        surname: 'Sintoni',
        email: 'elisa@organizer.it',
        phone: 3374902,
        password: "password",
        birthday: new Date(1998, 10, 18),
        category: 'o',
        inscriptions: [],
        my_organizations: [randomEvents[1]._id, randomEvents[3]._id,
            randomEvents[5]._id, randomEvents[7]._id, randomEvents[9]._id,
            randomEvents[11]._id]
    },
];

/*** HASH DELLE PASSWORD ***/

initial_users.forEach(user => {
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
            console.log(err);
        }
        user.password = hash
    })
})

/***Popolo gli eventi con i suoi iscritti e il suo autore***/

randomEvents[0].users = [initial_users[2]._id]
randomEvents[1].users = [initial_users[2]._id]
randomEvents[0].author = initial_users[3]._id
randomEvents[1].author = initial_users[4]._id
randomEvents[2].author = initial_users[3]._id
randomEvents[3].author = initial_users[4]._id
randomEvents[4].author = initial_users[3]._id
randomEvents[5].author = initial_users[4]._id
randomEvents[6].author = initial_users[3]._id
randomEvents[7].author = initial_users[4]._id
randomEvents[8].author = initial_users[3]._id
randomEvents[9].author = initial_users[4]._id
randomEvents[10].author = initial_users[3]._id
randomEvents[11].author = initial_users[4]._id
randomEvents[12].author = initial_users[3]._id
randomEvents[13].author = initial_users[4]._id
randomEvents[14].author = initial_users[3]._id
randomEvents[15].author = initial_users[4]._id
randomEvents[16].author = initial_users[3]._id


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

        // popolo la collezione users gli users iniziali
        await UserModel.insertMany(initial_users);
        console.log('Initial users inserted successfully');
        console.log(initial_users[3].my_organizations.length)

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
}

seedEvents()
