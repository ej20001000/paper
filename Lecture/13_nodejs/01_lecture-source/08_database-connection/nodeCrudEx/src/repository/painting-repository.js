const PaintingQuery = require('../database/painting-query');

exports.getAllPaintings = (connection) => {
    return new Promise((resolve, reject) => {

        connection.query(PaintingQuery.getAllPaintings(), (error, results) => {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
}

exports.getPaintingById = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query(PaintingQuery.getPaintingById(id), (error, results) => {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
}

exports.postNewPainting = (connection, painting) => {
    return new Promise((resolve, reject) => {
        connection.query(PaintingQuery.postNewPainting(), [painting.title, painting.category, painting.description, painting.artistNo, painting.fileLocation, painting.price, painting.year], (error, results) => {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
}

exports.updatePainting = (connection, painting, id) => {
    return new Promise((resolve, reject) => {
        connection.query(PaintingQuery.updatePainting(), [painting.title, painting.category, painting.description, painting.artistNo, painting.fileLocation, painting.price, painting.year, id], (error, results) => {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
}

exports.deletePainting = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query(PaintingQuery.deletePainting(), [id], (error, results) => {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
}