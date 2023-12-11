const {User} = require('../models');
const bcrypt = require('bcrypt');

exports.SignUp = async(req,res)=>{
    try {
        const {user_id,user_pw,nickname} = req.body;

        const hash = bcrypt.hashSync(user_pw,10);

        const user = await User.findOne({where : {user_id}});

        if(user != null){
            return res.send('이미 아이디가 존재합니다.');
        }

        await User.create({
            user_id,
            user_pw : hash,
            nickname
        })

        res.send();
    } catch (error) {
        console.log('사인업 컨트롤러에서 가입하다 에러남');
        console.log(error);
    }
}