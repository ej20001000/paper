exports.getAllPaintings = () => {
    return `
        SELECT * FROM  TBL_PAINTING
        `;
}


exports.getPaintingById = (id) => {

    return `
        SELECT * FROM TBL_PAINTING
        WHERE PAINT_NO = ${id}`;
}

exports.postNewPainting = () => {
 
    return `
        INSERT INTO TBL_PAINTING (TITLE, CATEGORY, DESCRIPTION, ARTIST_NO, FILE_LOCATION, PRICE, YEAR)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
}

exports.updatePainting = () => {
    return `
        UPDATE TBL_PAINTING
        SET TITLE = ?, CATEGORY = ?, DESCRIPTION = ?, ARTIST_NO = ?, FILE_LOCATION = ?, PRICE = ?, YEAR = ?
        WHERE PAINT_NO = ?
        `;
}

exports.deletePainting = () => {
    return `
        DELETE FROM TBL_PAINTING
        WHERE PAINT_NO = ?
        `;
}