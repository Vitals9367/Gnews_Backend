const express = require('express');
const router = express.Router();

const search_log = require('../models/search_log');
const click_log = require('../models/click_log');

router.get('/search', async (req,res) => {
    try{
        const logs = await search_log.find();
        res.json(logs);
    }catch(err){
        res.status(500).json({message: err.message});
    }
})

router.post('/search', async (req,res) => {
    const log = new search_log({
        keyword:req.body.keyword,
    })

    try{
        const new_search_log = await log.save();
        res.status(201).json(new_search_log);
    }catch(err){
        res.status(400).json({message: err.message});
    }

})

router.get('/click', async (req,res) => {
    try{
        const logs = await click_log.find();
        res.json(logs);
    }catch(err){
        res.status(500).json({message: err.message});
    }
})

router.post('/click', async (req,res) => {
    const log = new click_log({
        article:req.body.article,
    })

    try{
        const new_click_log = await log.save();
        res.status(201).json(new_click_log);
    }catch(err){
        res.status(400).json({message: err.message});
    }
})

module.exports = router;