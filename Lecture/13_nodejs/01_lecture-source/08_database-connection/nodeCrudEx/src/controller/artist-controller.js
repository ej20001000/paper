const ArtistService = require('../service/artist-service');
const HttpStatus = require('http-status');

exports.getAllArtists = async (req, res, next) => {
    const artists = await ArtistService.getAllArtist();

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'Successfully retrieved all artists',
        data: artists
    });
}

exports.getArtistById = async (req, res, next) => {
    const id = req.params.id;

    const artist = await ArtistService.getArtistById(id);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'Successfully retrieved artist by id',
        data: artist
    });
}

exports.postNewArtist = async (req, res, next) => {
    const artist = req.body;

    const createdArtist = await ArtistService.postNewArtist(artist);

    res.status(HttpStatus.CREATED).send({
        status: HttpStatus.CREATED,
        message: 'Successfully created new artist',
        data: createdArtist
    });
}

exports.updateArtist = async (req, res, next) => {
    const id = req.params.id;
    const artist = req.body;

    const result = await ArtistService.updateArtist(artist, id);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'Successfully updated artist',
        data: result
    });
}

exports.deleteArtist = async (req, res, next) => {
    const id = req.params.id;

    const result = await ArtistService.deleteArtist(id);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'Successfully deleted artist',
        data: result
    });
}