const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {

    const queryText = 'SELECT * FROM feedback';
    pool.query(queryText)
        .then((result) => {
            console.log(' feedback query results: ', result);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('error making feedback db query:', err);
            res.sendStatus(500);
        });
});

module.exports = router;
