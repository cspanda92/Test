const express = require('express');
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const CountHits = mongoose.model('countHits');
var router = express.Router();
var count = 0;
router.get('/', (req, res) => {
    res.json('blank url in employee');
});

router.post('/add', (req, res) => {
    count += 1;

    var emp = new Employee();
    emp.fullName = req.body.fullName;
    emp.email = req.body.email;
    emp.mobile = req.body.mobile;
    emp.city = req.body.city;

    emp.save().then(data => {
        console.log(data)
        countHits('empAdd', count, res);
        res.status(200).json(data);
    })
        .catch(err => {
            res.json({ message: err });
        })
});
function countHits(url, count, res) {
    console.log('in count')
    CountHits.findOneAndUpdate({ url: url }, { url: url, count: count }, { new: true, upsert: true }, (err, doc) => {
        console.log(err)
    });
}
module.exports = router;