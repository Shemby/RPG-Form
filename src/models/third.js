const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Hemlocke27:Tarleton27@rpg-rkcju.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const PC = mongoose.model('PC', {
    name: {
        type: String
    },
    player: {
        type: String
    },
    Class: {
        type: String
    },
    Level: {
        type: Number
    },
    Race: {
        type: String
    },
    Alignment: {
        type: String
    },
    Deity: {
        type: String
    },
    Size: {
        type: String
    },
    Age: {
        type: Number
    },
    Gender: {
        type: String
    },
    Height: {
        type: Number
    },
    Weight: {
        type: Number
    },
    Eyes: {
        type: String
    },
    Hair: {
        type: String
    },
    Skin: {
        type: String
    },
    
} )



const Elmo = new PC({
    name: 'Elmo',

})