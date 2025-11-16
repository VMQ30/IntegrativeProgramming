const User = require('../models/User')
const bcrypt = require('bcryptjs')

const signUpUser = async(req, res) => {
    const { firstName , lastName , email , password } = req.body

    try{
        const exists = await User.findOne({ email })
        if(exists){
            return res.status(400).json({ msg : 'Email Already Exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            firstName,
            lastName,
            email,
            password : hashedPassword
        })

        await user.save()

        res.json( { msg : 'Sign Successful'})
    }

    catch( error ){
        res.status(500).json({ msg : 'Server Error' })
    }
}

const loginUser = async( req , res ) => {
    const { email , password } = req.body

    try{
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({ msg : 'Invalid Credentials' })
        }

        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
            return res.status(400).json({ msg : 'Invalid Credentials' })
        }
        
        res.json({ msg: "Login successful" });
    }
    catch{
        res.status(500).json({ msg : 'Server Error' })
    }
}

module.exports = { signUpUser , loginUser }