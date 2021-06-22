const router = require('express').Router();
const Comments = require('../model/Comments');
const Users = require('../model/User');
const Profile = require('../model/Profile');

router.post('/', async (req, res) => {
    const {roadId, text, userId, userName} = req.body;
    const comment = await Comments.create({roadId, text, userId, userName, createdAt: new Date()});
    if (!comment) return res.string(401).send('error');
    res.json({
        status: true,
        msg: 'POSTED'
    })
});


module.exports = router;
