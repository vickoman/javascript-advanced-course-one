const DateProxied = new Proxy(Date, {
    construct(target, args) {
        console.log(`Creamos un nuevo objeto Date`);
        return new target(...args);
    }
});

let fecha = new DateProxied();