const express = require('express');
const Publiser = require('../models/publisherModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const publiser = await Publiser.create(req.body);
    res.status(201).json(publiser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const publiser = await Publiser.find();
    res.status(200).json(publiser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const publiser = await Publiser.findById(req.params.id);
    if (!publiser) {
      return res.status(404).json({ message: 'Publisher not found' });
    }
    res.status(200).json(publiser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const publiser = await Publiser.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!publiser) {
      return res.status(404).json({ message: 'Publisher not found' });
    }
    res.json(publiser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const publiser = await Publiser.findByIdAndDelete(req.params.id);
    if (!publiser) {
      return res.status(404).json({ message: 'Publisher not found' });
    }
    res.json({ message: 'Publisher deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;