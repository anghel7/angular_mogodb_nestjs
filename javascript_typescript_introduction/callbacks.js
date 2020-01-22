var connetarDb = function (nameDb) {
  console.log("Conectando a la DB: ", nameDb);
}

var encenderServidor = function (servidorName, fnConneccion) {

  console.log("Ensendiendo el servidor: ", servidorName);
  fnConneccion("POSTGRES");

}

// connetarDb("MYSQL");
encenderServidor("LARAVEL", connetarDb);