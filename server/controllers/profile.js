const Profile = require("../models/Profile");

const createProfile = async(req,res) => {
    try {
        const profile = new Profile({ 
            user : req.user.id,
            ...req.body
        });

        await profile.save();

        res.json({
            success: true,
            message: "Profile Saved!"
        });
    } 
    
    catch (error) {
        res.json({
            success: false,
            message: 'Server Error'
        });
    }
}

const getProfile = async(req, res) => {
    try{
        const profile = await Profile.findOne({ user : req.user.id })

        if(!profile){
            return res.status(404).json({ 
                success : false,
                msg : 'Profile not Found' })
        }

        res.json({
            success : true,
            profile
        })
    }
    catch(error){
        res.status(500).json({ 
            success : false,
            msg : 'Server Error'
        })
    }
}

module.exports = { createProfile , getProfile }