const db = require('../../src/database/models');
const sequelize = db.sequelize;

const usersApiController = {
    userList:(req,res)=>{
        db.User.findAll()
        .then(users=>{
            let resp = {
                count: users.length, 
                users: users.map(user => {
                    return{
                        id: user.id,
                        name: user.fullname,
                        email: user.email,
                        detail: "/api/users/" + user.id
                    }
                })
            }
            res.json(resp)
        })
    },

    userDetail:(req,res)=>{
        db.User.findByPk(req.params.id)
        .then(user=>{
            let resp = {
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                avatar: user.avatar,
                urlImageAvatar: "/img/uploads/avatars/" + user.avatar,
            }
            res.json(resp)
        })
    }
}

module.exports = usersApiController;

