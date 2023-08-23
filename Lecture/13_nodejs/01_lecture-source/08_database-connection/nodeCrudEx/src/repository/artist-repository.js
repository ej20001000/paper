const ArtistQuery = require('../database/artist-query');

exports.getAllArtists = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query(ArtistQuery.getAllArtist(), (error, results, fields) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
}

exports.getArtistById = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query(ArtistQuery.getArtistById(id), (error, results, fields) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
}

exports.postNewArtist = (connection, artist) => {
    return new Promise((resolve, reject) => {
        connection.query(ArtistQuery.postNewArtist(), [artist.name, artist.phoneNum], (error, results, fields) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
}

exports.updateArtist = (connection, artist, id) => {
    return new Promise((resolve, reject) => {
        connection.query(ArtistQuery.updateArtist(), [artist.name, artist.phoneNum, id], (error, results, fields) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
}

exports.deleteArtist = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query(ArtistQuery.deleteArtist(), [id], (error, results, fields) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
}