const getConnection = require('../database/connection');
const ArtistRepository = require('../repository/artist-repository');

exports.getAllArtist = () => {
    return new Promise((resolve, reject) => {
        const connection = getConnection();

        const results = ArtistRepository.getAllArtists(connection);

        connection.end();

        resolve(results);
    });
};

exports.getArtistById = (id) => {
    return new Promise((resolve, reject) => {
        const connection = getConnection();

        const results = ArtistRepository.getArtistById(connection, id);

        connection.end();

        resolve(results);
    });
}

exports.postNewArtist = (artist) => {
    return new Promise(async (resolve, reject) => {
        const connection = getConnection();

        connection.beginTransaction();
        
        try {
            const results = await ArtistRepository.postNewArtist(connection, artist);
            connection.commit();
    
            const insertedRow = ArtistRepository.getArtistById(connection, results.insertId);
    
            resolve(insertedRow);


        } catch (error) {
            connection.rollback();

            reject(error);
        } finally {
            connection.end();
        }
    });
}

exports.updateArtist = (artist, id) => {
    return new Promise(async (resolve, reject) => {
        const connection = getConnection();

        connection.beginTransaction();

        try {
            await ArtistRepository.updateArtist(connection, artist, id);
            connection.commit();

            resolve(ArtistRepository.getArtistById(connection, id));
        } catch (error) {
            connection.rollback();

            reject(error);
        } finally {
            connection.end();
        }
    });
}

exports.deleteArtist = (id) => {
    return new Promise(async (resolve, reject) => {
        const connection = getConnection();

        connection.beginTransaction();

        try {
            const results = await ArtistRepository.deleteArtist(connection, id);
            connection.commit();

            if(results.affectedRows === 0) {
                resolve(null);
            }

            resolve(results);

        } catch (error) {
            connection.rollback();

            reject(error);
        } finally {
            connection.end();
        }
    });
}