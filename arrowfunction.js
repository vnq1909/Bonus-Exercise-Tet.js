function sayHello(name) {
    console.log('Hello', name);
}

setTimeout(function() {
    console.log('Loaded')
}, 2000);


list.forEach(function(item) {
    console,log(item);
});

// rut gon 
sayHello = Name => console.log('Hello', Name);

setTimeout(() => console.log('Loaded'), 2000);

list.forEach(Item => console.log(Item));