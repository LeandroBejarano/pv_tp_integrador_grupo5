function highestId(productos) {
    let id = 0;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id > id)
            id = productos[i].id;
    }
    return id + 1
}

export default highestId