const PaintingRepository = require('../repository/painting-repository');
const getConnection = require('../database/connection');

exports.getAllPaintings = () => {
    return new Promise((resolve, reject) => {
        const connection = getConnection();

        const results = PaintingRepository.getAllPaintings(connection);

        connection.end();

        resolve(results);
    });
}

exports.getPaintingById = (id) => {
    return new Promise((resolve, reject) => {
        const connection = getConnection();

        const results = PaintingRepository.getPaintingById(connection, id);

        connection.end();

        resolve(results);
    });
}

exports.postNewPainting = (painting) => {
    return new Promise(async (resolve, reject) => {
        const connection = getConnection();

        connection.beginTransaction();
        
        try {
            const results = await PaintingRepository.postNewPainting(connection, painting);
            connection.commit();

            const createdPainting = PaintingRepository.getPaintingById(connection, results.insertId);

            resolve(createdPainting);

        } catch (error) {
            connection.rollback();
            reject(error);
        } finally {
            connection.end();
        }
    });
}

exports.updatePainting = (painting, id) => {
    return new Promise(async (resolve, reject) => {
        const connection = getConnection();

        connection.beginTransaction();

        try {
            const results = await PaintingRepository.updatePainting(connection, painting, id);
            connection.commit();

            resolve(results);
        } catch (error) {
            connection.rollback();
            reject(error);
        } finally {
            connection.end();
        }
    });
}

exports.deletePainting = (id) => {
    return new Promise(async (resolve, reject) => {
        const connection = getConnection();

        connection.beginTransaction();

        try {
            const results = await PaintingRepository.deletePainting(connection, id);
            connection.commit();

            resolve(results);
        } catch (error) {
            connection.rollback();
            reject(error);
        } finally {
            connection.end();
        }
    });
}