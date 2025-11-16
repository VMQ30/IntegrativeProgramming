const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signUpUser = async(req, res) => {
    const { firstName , lastName , email , password } = req.body

    try{
        const exists = await User.findOne({ email })
        if(exists){
            return res.status(400).json({ 
                success : false,
                msg : 'Email Already Exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            firstName,
            lastName,
            email,
            password : hashedPassword
        })

        await user.save()

        res.json( { 
            success : true,
            msg : 'Sign Successful'
        })
    }

    catch( error ){
        res.status(500).json({ 
            success : false,
            msg : 'Server Error' 
        })
    }
}

const loginUser = async( req , res ) => {
    const { email , password } = req.body

    try{
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({ 
                success : false,
                msg : 'Invalid Credentials' 
            })
        }

        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
            return res.status(400).json({ 
                success : false,
                msg : 'Invalid Credentials' 
            })
        }
        
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ 
            success : true,
            msg: "Login successful" ,
            token
        });
    }
    catch{
        res.status(500).json({ 
            success : false,
            msg : 'Server Error' 
        })
    }
}

module.exports = { signUpUser , loginUser }