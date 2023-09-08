// Callback is used to convert synchronous task into a synchronous task.

function chopping(cb) {
    console.log("Sabzi Katna Shuru");
    setTimeout(() => {
        console.log("Sabzi Katna Khatam");
        cb(roti);
    }, 5000);
}

function cooking(cb) {
    console.log("Khana Banana Shuru");
    setTimeout(() => {
        console.log("Khana ban Chuka Hai");
        cb(serve);
    }, 3000);
}

function roti(cb) {
    console.log("roti Banani Shuru");
    setTimeout(() => {
        console.log("Roti Ban Chuki Hai");
        cb();
    }, 4000);
}

function serve() {
    console.log("Serving Start");
    setTimeout(() => {
        console.log("Serveing Done");
    }, 1000);
}

chopping(cooking);
