const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min:6,
        max:255
    },
    email:{
        type:String,
        required: true,
        max: 255,
        min: 6
    },
    hashPassword:{
        type:String,
        required: true,
        max: 1024,
        min:6
    },
    phone:{
        type:String,
        required:true,
        max:10,
        min:10
    },
    swoosh_handle:{
        type:String,
        max:255,
        min:6
    },
    swoosh_level:{
        type:String,
        default:"noob"
    },
    date:{
        type: Date,
        default: Date.now
    },
    profile_url:{
        type:String,
        default:undefined
    },
    thumbnail:{
        type:String,
        default:undefined
    },
    reviews:{
        type:Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    },
    bookings:{
        type:Array,
        default:[]
    },
    favorites:{
        type:Array,
        default:[]
    },
    photos:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model('user',UserScheme)