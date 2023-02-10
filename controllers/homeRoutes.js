const router = require('express').Router();
const { AsyncQueueError } = require('sequelize');
const { blogPost } = require('../models');

//Get homepage and display post titles
router.get('/', async (req, res) => {
try {
    const dbPostData = await blogPost.findAll({


    });

    const posts = dbPostData.map((blogmessage) =>
        blogmessage.get({ plain: true})
    );

    res.render('home', {
        title: "Blog Posts",
        posts
    });
}catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// get request to pull up message body
router.get('/message/:id', async (req,res) => {
    try {
        const dbMessageData = await blogPost.findByPk(req.params.id);

        const message = dbMessageData.get({ plain: true})

        res.render('message', {message});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

      }
});

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    // if (req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('login');
  });




module.exports = router;