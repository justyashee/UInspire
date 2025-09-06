const express = require('express');
const Model = require('../models/UserModel');
const { model } = require('mongoose');
const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');


router.post('/add', (req, res) => {
  console.log(req.body);
  // Here you would typically handle the request to add a user


  new Model(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });

});
router.get('/getall', (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);

    }).catch((err) => {
      res.status(500).json(err);

    });
});

//url params
router.get('/getbycity/:city', (req, res) => {
  console.log(req.params.city);
  Model.find({ city: req.params.city }) //to match the city from params
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/getbyemail/:email', (req, res) => {
  console.log(req.params.email);
  Model.findOne({ email: req.params.email }) //to find the first matching email from params and responds with object and not array and also in case of synatx error it responds with null
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/getbyid/:id', (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(result);
    });
});

router.delete('/delete/:id', (req, res) => {
  Model.findByIdAndDelete(req.params.id)  
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(result);
    });
});

router.put('/update/:id', (req,res) => {
  Model.findByIdAndUpdate(req.params.id, req.body,{ new: true })  //new:true to return the updated document at first send
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(result);
    });
});

router.get('/delete', (req, res) => {
  res.send('delete response from user router');
});
router.get('/id', (req, res) => {
  res.send('id response from user router');
});
router.get('/update', (req, res) => {
  res.send('update response from user router');
});

router.post('/authenticate', (req, res) => {
  const {email,password} = req.body;
  model.findOne({ email, password })
    .then((result) => {
      if (result) {
        //create token
        const{ _id, name } = result;
        jwt.sign(
          {_id, name},
          process.env.JWT_SECRET,
          { expiresIn: '1h' },
         //h=hours, m=minutes, d=days, nothing for seconds
          (err, token) => {
            if (err) {
              console.log(err);
              res.status(500).json(err);
            } else {
              res.status(200).json({ token });
            }
          }
        );

      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;