const express = require('express');
const router = express.Router();
const Attendee = require('../models/AttendeeModel');


router.get('/', async (req, res) => {
  try {
    const attendees = await Attendee.find({});
    res.status(200).json(attendees);
  } catch (err) {
    console.log(err);
  }
});

router.get('/team/:num', async (req, res) => {
  // console.log(req.params);
  const attendees = await Attendee.find({ team: req.params.num });
  res.status(200).json(attendees);
});

// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB
// FIXME: REMOVE NODE MODULES FROM GITHUB

module.exports = router;
