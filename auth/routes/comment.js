const router = require('express').Router();
const Comments = require('../model/Feedbacks');
const Users = require('../model/User');
const Profile = require('../model/Profile');

router.post('/comments', async (req, res) => {
    
    const {roadId, text, userId} = req.body;
    const comment = await Comments.create({roadId, text, userId, createdAt: new Date()});
    if (!comment) return res.string(401).send('error');
    res.json({
        status: true,
        msg: 'POSTED'
    })
});

router.get('/comments', async (req, res) => {
    const {userId} = req.query;
    const {roadId} = req.query;

    const comments = (await Comments.find({userId})).map(f => f.toObject());

    const users = (await Users.find({_id: {$in: comments.map(f => f.from)}})).map(u => u.toObject());
    const profiles = (await Profile.find({userId: {$in: comments.map(f => f.from)}})).map(p => p.toObject());

    res.json(comments.map(f => ({
        ...f,
            userDetails: profiles.find(({userId}) => userId.toString() === f.from.toString())
    })));
});

module.exports = router;