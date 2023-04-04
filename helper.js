const user = function(data) {
    return data + ' is logged in';
};

//console.log(helper('fozail'));

let id = function(id) {
    return id;
}

let email = function(email) {
    return email;
}

// module.exports.user = user;
// module.exports.id = id;
// module.exports.email = email;


module.exports = {
    user: user, //key-value pair
    id, //only if key and value is same
    email
}