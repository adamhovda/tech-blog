const sequelize = require('../config/connection');
const { User, blogPost, comment } = require('../models');

const userSeedData = require('./userSeedData.json');
const messageSeedData = require('./messageSeedData.json');
const commentSeedData = require('./commentSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

await User.bulkCreate(userSeedData);
await blogPost.bulkCreate(messageSeedData);
// await comment.bulkCreate(commentSeedData);



  process.exit(0);
};

seedDatabase();