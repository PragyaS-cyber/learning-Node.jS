function transact(title) {
    return new Promise((resolve, reject) => {
        let random = Math.floor(Math.random() * 100);
        if (title.toUpperCase() != title)
            reject("not in uppercase");
    })
}
transact("DEALER")
    .then((resolved) => {
        console.log(resolved + "performs transaction");
        return transact('wholesaler');
    })
    .then((resolved) => {
        console.log(resolved + "performs transaction");
    })
    .catch((rejected) => {
        console.log(rejected + "performs transaction");
    })
