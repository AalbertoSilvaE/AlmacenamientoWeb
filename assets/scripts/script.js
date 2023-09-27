/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/

/* 

Almacenamiento local (localStorage)


La informacion que pogamos en un almacenamiento local se guarda indefinidamente hasta que sea eliminada por codigo o borrada del navegador

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historila de uso.



*/

//Guardando mi primer dato en localStorage
//localStorage.setItem(key, value);


localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");


//Guardando un carrito de compras
let carritoComprasFelipe = ["Sabritones", "CocaCola", "Chicles", "Tortillas"];

localStorage.setItem("CarritoCompras", carritoComprasFelipe);


//Obtener la informacion almacenada en mi localStorage

//local.storage.getItem(key)

let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//recuperando el  carrito de compras
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);


// La unica diferencia entre trabajar un session o un localStorage es poner la palabra session en lugar de local y esta informacion se borra al cerrar la sesion


//Borrar un elemento del localStorage
//localStorage.removeItem(key);

localStorage.removeItem("CarritoCompras");


//Conocer el largo o longitud del localStorage
//localStorage.length;

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);



//Para modficiar datos con set
localStorage.setItem("Apellido", "Gonzalez");