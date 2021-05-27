const router = require('express').Router();
const Ratings = require('../model/Ratings');

const sum = (...terms) => terms.reduce((a, t) => a + t, 0);
const mean = (...xs) => sum(...xs) / xs.length;

router.post('/rate', async (req, res) => {
  const {
    userId,
    roadId,
    criteria: {
      roadSurface,
      technicalMeans,
      engineeringArrangement,
      serviceObjects,
      sanitaryElements,
      artificialConstructions
    }
  } = req.body;

  console.log(req.body);

  try {
    const rating = await Ratings.create({
      ratedBy: userId,
      roadId,
      roadSurface,
      technicalMeans,
      engineeringArrangement,
      serviceObjects,
      sanitaryElements,
      artificialConstructions,
      mean: mean(roadSurface, technicalMeans, engineeringArrangement, serviceObjects, sanitaryElements, artificialConstructions),
    });

    res.json(rating);

  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
