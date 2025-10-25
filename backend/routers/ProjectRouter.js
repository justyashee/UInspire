const express = require('express');
const router = express.Router();
const Model = require('../models/ProjectModel'); 
const authenticateToken = require('../middleware/authenticateToken');

router.post('/add', async (req, res) => {
    try {
      
        const data = req.body;
        
      
        const doc = await Model.create(data); 
        res.status(201).json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});


router.get('/getbyuser/:userid', async (req, res) => {
    try {
        const userId = req.params.userid;
        
      
        const docs = await Model.find({ user: userId }); 
        res.status(200).json(docs);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});


router.delete('/delete/:id', async (req, res) => {
    try {
        const doc = await Model.findByIdAndDelete(req.params.id);
        if (doc) {
            res.status(200).json({ message: 'Project deleted successfully', doc });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});


router.post('/generate-and-save', authenticateToken, async (req, res) => {
    try {
        const { prompt } = req.body;
        const userId = req.user.id; 
        const { generatedCode, title, description } = await callAIGeneratorService(prompt); 

       
        const newProjectData = {
            user: userId,
            title: title || prompt.substring(0, 50),
            prompt: prompt,
            code: generatedCode,
            description: description || 'AI generated component.',
        };

        const doc = await ProjectModel.create(newProjectData);
        
        res.status(201).json(doc); 

    } catch (error) {
        console.error('Generation Error:', error);
        res.status(500).json({ message: 'Failed to generate and save project.', error: error.message });
    }
});

module.exports = router;