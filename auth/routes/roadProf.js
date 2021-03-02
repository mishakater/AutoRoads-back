const router = require('express').Router();
const RoadProfile = require('../model/RoadProfile');

router.post('/road', async (req, res) => {
    const roadProfile = new RoadProfile({
        roadName: req.body.roadName,
        region: req.body.region,
        direction: req.body.direction,
        length: req.body.length,

    });
    try {
        const savedRoadProfile = await roadProfile.save();
        res.send(savedRoadProfile);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;