// module.exports = async () => {
//
// }

const Users = require("../models/users");

const errorHandler = err => {
    console.log("Error: ", err);
};

// const user = await User.findAll()


module.exports = {
    list: function () {
        return Users
            .findAll({
                order: [
                    ['createdAt', 'DESC'],
                ]
            })
            .then(res => {
                // console.log()
                JSON.stringify(res);
            })
            .catch(errorHandler)
    }
};