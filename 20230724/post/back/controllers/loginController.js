const {User} = require('../models');
const bcrypt = require('bcrypt');

exports.Login = async(req,res)=>{
    try {
        const {user_id, user_pw} = req.body;

        const user = await User.findOne({where : {user_id}});

        if(user == null){
            return res.send('No Id');
        }

        const compare = bcrypt.compareSync(user_pw, user.user_pw);

        if(!compare){
            return res.send('Pw Error');
        }

        res.send(user);
    } catch (error) {
        
    }
}