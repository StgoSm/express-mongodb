const express = require('express');
const router = express.Router();

/* GET / */

router.get('/', (req, res, next) => {
    try {
        return res.json({});
    } catch(err) {
        // TODO: catch excpetion
    }
});

/* PUT / */

router.put('/:id', (req, res, next) => {
    try {
        return res.json({});
    } catch(err) {
        // TODO: catch excpetion
    }
});

/* DELETE / */

router.delete('/:id', (req, res, next) => {
    try {
        return res.json({});
    } catch(err) {
        // TODO: catch excpetion
    }
});

/* POST / */

router.post('/', (req, res, next) => {
    try {
        return res.json({});
    } catch(err) {
        // TODO: catch excpetion
    }
});

module.exports = router;