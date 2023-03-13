const express = require('express')
const router = express.Router();
const artData = require('../model/art')

// add 
router.post('/', async (req, res) => {
    try {

        const data = req.body;
        const tosave = await artData(data); //to check the compactabuility of model and dfata
        await tosave.save()
        res.json({ status: 'success', message: 'Art added successfully' }).status(201)


    } catch (error) {

        console.log(error)
        res.json({ status: 'error', message: 'Art not added' + error }).status(500)



    }
})

// read 

router.get('/', async (req, res) => {
    try {
        const data = await artData.find()
        res.json({ status: 'success', data: data }).status(200)
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', message: error }).status(500)


    }

})

// delete 

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await artData.findByIdAndDelete(id)
        res.json({ status: 'success', data: data }).status(200)

    } catch (error) {
        res.json({ status: 'error', message: error }).status(500)

    }




})

// update 
router.put('/:id', async (req, res) => {

    try {

        const id = req.params.id
        const data = req.body
        const tosave = { $set: data }
        const toupdate = await artData.findByIdAndUpdate(id, tosave, { new: true })
        res.json({ status: 'success', data: toupdate }).status(200)

    } catch (error) {
        res.json({ status: 'error', message: error }).status(500)

    }

})



module.exports = router