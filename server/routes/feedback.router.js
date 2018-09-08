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

router.post('/', (req, res) => {
    console.log('add feedback post /feedback', req.body)
    const queryText = 'INSERT INTO feedback ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)';
    pool.query(queryText, [
            req.body.feeling, 
            req.body.understanding, 
            req.body.support, 
            req.body.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error making insert query', err, req.body);
            res.sendStatus(500);
        });
});

module.exports = router;
