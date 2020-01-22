function getUsers(url) {
    var promise = new Promise((resolve, reject)=>{
        var listaUsers=[
            {
                nombre:"Gaston",
                apellido:"Fernadez"
            },
            {
                nombre:"Cristian",
                apellido:"Lopez"
            }
        ];
        if (url) {
            resolve(listaUsers);
        } else {
            reject("NO EXISTE LA URL");
        }
        
    });

    return promise;
}

getUsers("19.168.34.23/students")
.then(function (result) {
    console.log(result);    
})
.catch(function (error) {
    console.log(error);    
});

