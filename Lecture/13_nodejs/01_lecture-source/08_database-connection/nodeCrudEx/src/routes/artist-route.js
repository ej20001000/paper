const express = require('express');
const router = express.Router();
const ArtistController = require('../controller/artist-controller');

router.get('/', ArtistController.getAllArtists);
router.get('/:id', ArtistController.getArtistById);
router.post('/', ArtistController.postNewArtist);
router.put('/:id', ArtistController.updateArtist);
router.delete('/:id', ArtistController.deleteArtist);

module.exports = router;