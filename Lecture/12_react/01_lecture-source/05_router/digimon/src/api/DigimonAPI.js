export function getDigimonList(page) {
    return new Promise((Resolve) => {
        fetch(`https://www.digi-api.com/api/v1/digimon?page=${page}&pageSize=42`)
        .then(res => res.json())
        .then(json => {
            Resolve(json.content);
        })
    } )
}

export function getDigimonDetails(id) {
    return new Promise((resolve) => {
        fetch(`https://www.digi-api.com/api/v1/digimon/${id}`)
        .then(res => res.json())
        .then(json => {
            resolve(json);
        })
    })
}