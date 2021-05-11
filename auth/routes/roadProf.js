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

router.get('/road/all', function (req, res) {
    RoadProfile.find({}, function (err, data) {
        if (err) {
            res.send("ERROR");
            next();
        }
        res.json(data);
    })
});

router.get('/searchroad', (req, res, next) => {
    const searchedField = req.query.roadName;
    RoadProfile.find({roadName:{$regex: searchedField, $options: '$i'}})
        .then(data=>{
            res.send(data);
        })
   
});



module.exports = router;