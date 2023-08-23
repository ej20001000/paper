exports.getAllArtist = () => {
    return `SELECT * FROM TBL_ARTIST`;
}

exports.getArtistById = (id) => {
    return `SELECT * FROM TBL_ARTIST WHERE ARTIST_NO = ${id}`;
}

exports.postNewArtist = () => {
    return`
        INSERT INTO TBL_ARTIST (NAME, PHONE_NUM)
        VALUES (?, ?)
        `;
}

exports.updateArtist = () => {
    return `
        UPDATE TBL_ARTIST
        SET NAME = ?, PHONE_NUM = ?
        WHERE ARTIST_NO = ?
        `;
}

exports.deleteArtist = () => {
    return `
        DELETE FROM TBL_ARTIST
        WHERE ARTIST_NO = ?
        `;
}