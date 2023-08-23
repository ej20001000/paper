const express = require('express');
const router = express.Router();
const PaintingController = require('../controller/painting-controller');

router.get('/', PaintingController.getAllPaintings);
router.get('/:id', PaintingController.getPaintingById);
router.post('/', PaintingController.postNewPainting);
router.put('/:id', PaintingController.updatePainting);
router.delete('/:id', PaintingController.deletePainting);

module.exports = router;