let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();


// Model
let userSchema = require('../models/users');

// CREATE
router.route('/create-user').post((req, res, next) => {
    userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ
router.route('/').get((req, res) => {
    userSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  })

// Get
router.route('/edit-user/:id').get((req, res) => {
    userSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Update
router.route('/update-user/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Candidate updated successfully !')
      }
    })
  })

  // Delete
router.route('/delete-user/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

module.exports = router;