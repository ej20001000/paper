class postNewPaintingDTO {
    title;
    category;
    description;
    artistNo;
    fileLocation;
    price;
    year;

    constructor(data) {
        this.title = data.title;
        this.category = data.category;
        this.description = data.description;
        this.artistNo = data.artistNo;
        this.fileLocation = data.fileLocation;
        this.price = data.price;
        this.year = data.year;
    }
    
}

module.exports = postNewPaintingDTO;