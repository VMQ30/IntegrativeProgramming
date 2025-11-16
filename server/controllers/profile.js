const Profile = require("../models/Profile");

const profile = async(req,res) => {
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

module.exports = { profile }