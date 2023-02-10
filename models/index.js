const User = require('./user');
const blogPost = require('./blogPost');
const comment = require('./user');

User.hasMany(blogPost, {
    foreignKey: 'user_id'
});

blogPost.belongsTo(User, {
    foreignKey: "user_id"
});

// User.hasMany(comment, {
//     foreignKey: 'user_id'
// });

// comment.belongsTo(User, {
//     foreignKey: "user_id"
// });

blogPost.hasMany(comment, {
    foreignKey: "post_id"
});

comment.belongsTo(blogPost, {
    foreignKey: "post_id"
});

module.exports = { User, blogPost, comment};