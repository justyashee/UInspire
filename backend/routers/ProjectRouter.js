const express = require('express');
const router = express.Router();
const Model = require('../models/ProjectModel');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/add', authenticateToken, async (req, res) => {
    try {
        // const data = req.body;
        req.body.user = req.user._id; // Attach user ID from token
        const doc = await Model.create(req.body);
        res.status(201).json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});


router.get('/getbyuser', authenticateToken, async (req, res) => {
    try {
        const userId = req.user._id;

        const docs = await Model.find({ user: userId });
        res.status(200).json(docs);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.get('/getall', async (req, res) => {
    try {
        const docs = await Model.find();
        res.status(200).json(docs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch all projects.', error: error.message });
    }
});


router.delete('/delete/:id', authenticateToken, async (req, res) => {
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
        const { prompt, projectId } = req.body;
        const userId = req.user._id;
        // const { generatedCode, title, description } = await callAIGeneratorService(prompt);
        const generatedResult = await require('../geminiService').getPromptResponse(prompt);

        // const newProjectData = {
        //     user: userId,
        //     title: title || prompt.substring(0, 50),
        //     prompt: prompt,
        //     code: generatedCode,
        //     description: description || 'AI generated component.',
        // };

        // const doc = Model.findByIdAndUpdate(newProjectData);

        res.status(201).json(generatedResult);

    } catch (error) {
        console.error('Generation Error:', error);
        res.status(500).json({ message: 'Failed to generate and save project.', error: error.message });
    }
});

router.post("/create", async (req, res) => {
    try {
        const { prompt, code, preview, createdAt } = req.body;
        const newProject = new Project({ prompt, code, preview, createdAt });
        await newProject.save();
        res.status(201).json({ message: "Project saved successfully", projectId: newProject._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error saving project" });
    }
});

router.post('/update-code', authenticateToken, async (req, res) => {
    try {
        const { projectId, code } = req.body;
        const userId = req.user._id;

        if (!projectId || !code) {
            return res.status(400).json({ message: 'projectId and code are required.' });
        }

        const doc = await Model.findByIdAndUpdate(
            projectId,
            { code: code, updatedAt: new Date() },
            { new: true }
        );

        if (!doc) {
            return res.status(404).json({ message: 'Project not found.' });
        }

        // Verify user owns this project
        if (doc.user.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'Unauthorized: You cannot update this project.' });
        }

        res.status(200).json({ message: 'Code updated successfully', doc });

    } catch (error) {
        console.error('Update Error:', error);
        res.status(500).json({ message: 'Failed to update code.', error: error.message });
    }
});

router.get('/getbyid/:id', authenticateToken, async (req, res) => {
    try {
        const doc = await Model.findById(req.params.id);
        
        if (!doc) {
            return res.status(404).json({ message: 'Project not found.' });
        }

        // Verify user owns this project
        if (doc.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Unauthorized.' });
        }

        res.status(200).json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch project.', error: error.message });
    }
});


module.exports = router;