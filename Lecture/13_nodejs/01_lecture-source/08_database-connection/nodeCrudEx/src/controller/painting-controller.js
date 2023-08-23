const PaintingService = require('../service/painting-service');
const HttpStatus = require('http-status');

exports.getAllPaintings = async (req, res) => {
    const results = await PaintingService.getAllPaintings();
    
    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'Successfully retrieved all paintings',
        data: results
    });

}

exports.getPaintingById = async (req, res) => {
    const id = req.params.id;

    const result = await PaintingService.getPaintingById(id);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'Successfully retrieved painting by id',
        data: result
    });

}

exports.postNewPainting = async (req, res) => {

    const painting = req.body;

    const results = await PaintingService.postNewPainting(painting);

    res.status(HttpStatus.CREATED).send({
        status: HttpStatus.CREATED,
        message: 'Successfully created new painting',
        data: results
    });

}

exports.updatePainting = async (req, res) => {

    const id = req.params.id;
    const painting = req.body;

    const results = await PaintingService.updatePainting(painting, id);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'Successfully updated painting',
        data: results
    });

}

exports.deletePainting = async (req, res) => {

    const id = req.params.id;
    
    const results = await PaintingService.deletePainting(id);

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'Successfully deleted painting',
        data: results
    });
    
}
