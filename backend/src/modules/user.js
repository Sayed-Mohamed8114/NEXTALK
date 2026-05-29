import mongoose, { Schema } from 'mongoose'; 
// the time stamps will help us to know the user from when he signup and these things 
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    email:{
        type: String ,
        require: true ,
        unique: true ,
    },
    password:{
        type: String,
        require: true ,
        minlength:7,
    },
    bio:{
        type:String , 
        default:"",
    },
    profilePic:{
        type:String,
        default:"",
    },
    nativeLanguage:{
        type:String,
        default:"",
    },
    learningLanguage:{
        type:String,
        default:"",
    },
    location:{
        type:String,
        default:""
    },
    // this what will decide if the user is able to go to other pages or stay at the signup mission
    inOnBoarding:{
        type:Boolean,
        default:false,
    },
    // so when you friend with someone you will take his id and put it in your friends array of objects that will contain the other users id 
    friends:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ]
},
{timestamps:true});

// then we will have to create a module based on our schema 

const User = mongoose.model("User",userSchema);

export default User; 
