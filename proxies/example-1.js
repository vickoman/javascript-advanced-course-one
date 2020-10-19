const target = function (nombre, apellido) {
    console.log(`Mi nombre es ${nombre} ${apellido}`);
}

const handler = {
    apply: function( target, thisValue, args) {
        console.log(`Se ha llamado a la funcion ${target.name}
        con los parametros ${args}`);
        return target( ...args );
    }
}


const myProxy = new Proxy(target, handler);
myProxy("Victor", "Diaz",);