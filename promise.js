// either rejected or accepted
let cleanRoom = new Promise((resolve, reject) => { //constructor
    let isClean = false;

    if (isClean)
        resolve("Kitchen is clean");
    else
        reject("kitchen unclean");
})

cleanRoom
    .then((resolved) => {
        console.log(resolved + "you will get an icecream");
    })
    .then(() => {

    })
    // as many then as we want
    .catch((rejected) => {
        console.log(rejected + "you will not get an icecream");
    })
//cleaner option than callback functions/
// benefits of Promise over callback
// errorr handling only , cleaner way

// They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events. In other words also, we may say that, promises are the ideal choice for handling multiple callbacks at the same time, thus avoiding the undesired callback hell situation.