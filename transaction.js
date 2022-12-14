let err;
function transact(title, callback) {
    let rand = Math.floor(Math.random() * 100);
    if (title.toUpperCase() != title)
        error = new Error("UpperCase Error");
    setTimeout( () => { callback(err) }, rand );
}
transact("DEALER", (err) => {
    if (err)
        console.log(err); 
    else {
        console.log("DEALER as done transsction");
        transact("WHOLESALER", (err) => {
            if (err)
                console.log(err);
            else {
                console.log("WHOLESALER as done transaction");
                transact("RETAILER", (err) => {
                    if (err)
                        console.log(err);
                    else
                        console.log("RETAIALER as done transsction");//triangular shape
                });
            }
        });
    }
});
//callback chaining
