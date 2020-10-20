const target = {
    titulo: "Fundacion",
    autor: "Issac Asimov",
    genero: "Ciencia Fuccion",
    numeroPaginas: 255
};

const handler = {
    get: function(target, prop, proxy) {
        if (prop === "numeroPaginas") {
            return `Tengo ${target[prop]} paginas`;
        } else {
            return target[prop];
        }
    },
    set(target, prop, value) {
        if (prop === "titulo" || prop == "autor") {
            console.log(`No puedes modificar la propiedad ${prop}`);

        } else {
            target[prop] = value;
        }
    },
    deleteProperty(target, prop) {
        throw Error(`No esta permitidoe liminar las propiedades del objecto`);
        return;
    }
}

const miProxy = new Proxy(target, handler);
// console.log(miProxy.titulo);
// console.log(miProxy.numeroPaginas);

// Uncomment this to get error that not allow change titulo
// miProxy.titulo = "Un titulo nuevo";
// miProxy.numeroPaginas = 500;

// uncomment delete to test throw error
//delete miProxy.genero;

console.log(miProxy.numeroPaginas);




3403687104