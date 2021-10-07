const bcrypt = require('bcrypt');
const saltRounds = 10;

// Export for other file
module.exports.encryptPassword = function(password, callback) {
    return bcrypt.hash(password, saltRounds, callback)
}