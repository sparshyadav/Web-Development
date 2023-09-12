function kalSePadhnaShuru(){
    return new Promise(function (resolve, reject){
        let marks=26;
        if(marks<75){
            resolve(marks);
        }
        else{
            reject(marks);
        }
    })
}

let num=kalSePadhnaShuru();
num.then(
    function(data){
        console.log(data);
    },
    function(data){
        console.log(data);
    },
)

kalSePadhnaShuru().then(
    function(data){
        console.log(data);
    },
    function(data){
        console.log(data);
    },
)