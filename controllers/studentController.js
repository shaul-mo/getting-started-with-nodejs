const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/student.model');

router.get('/', (req, res) => {
  res.render('student/addOrEdit', {
    viewTitle: 'Insert Student'
  });
});

router.post('/', (req, res) => {
  if (!req.body.hasOwnProperty('_id')) {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

function insertRecord(req, res) {
  const student = new Student(req.body);
  student.save()
    .then(doc => {
      if (doc) {
        res.redirect('/student/list');
      } else {
        console.error('Error during Insert: Document not saved');
      }
    })
    .catch(err => {
      console.error('Error during Insert:', err);
    });
}

function updateRecord(req, res) {
  Student.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then(doc => {
      if (doc) {
        res.redirect('/student/list');
      } else {
        console.error("Error during update: Document not found");
      }
    })
    .catch(err => {
      console.error("Error during update:", err);
    });
}

router.get('/list', (req, res) => {
  Student.find()
    .then(docs => {
      // Convert Mongoose documents to plain objects
      const plainObjects = docs.map(doc => doc.toObject());
      res.render('student/list', {
        list: plainObjects
      });
    })
    .catch(err => {
      console.error('Error in retrieval:', err);
    });
});

router.get('/:id', (req, res) => {
  Student.findById(req.params.id)
    .then(doc => {
      if (doc) {
        // Convert Mongoose document to plain object
        const student = doc.toObject();
        res.render('student/addOrEdit', {
          viewTitle: 'Update Student',
          student: student
        });
      } else {
        console.error("Error retrieving student:", err);
        // Handle document not found case (e.g., redirect to error page)
        res.status(404).render('error', { message: 'Student not found' }); // Example error handling
      }
    })
    .catch(err => {
      console.error("Error retrieving student:", err);
      // Handle server-side errors (e.g., database connection issues)
      res.status(500).render('error', { message: 'Internal Server Error' }); // Example error handling
    });
});

router.get('/delete/:id', (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(doc => {
      if (doc) {
        res.redirect('/student/list');
      } else {
        console.error('Error in deletion:', err);
      }
    })
    .catch(err => {
      console.error('Error in deletion:', err);
    });
});

module.exports = router;
