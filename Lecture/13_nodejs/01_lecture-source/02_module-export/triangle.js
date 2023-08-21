module.exports = (w, h) => {
    return {
        area: () => w * h / 2,
        perimeter: () => Math.sqrt(w * h + h * h) + w + h
    }
}