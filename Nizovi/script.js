var names = ['John', 'Jane', 'Bob', , 'Mike'];


for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}


names.push('Luka');

console.log("Nakon dodavanja imena:");
console.log(names);


for (var i = 0; i < names.length; i++) {
    console.log(names[i]);

    if (names[i] === 'Jane') {
        break;
    }
}


names = names.filter(function(name) {
    return name !== undefined;
});

console.log("Niz bez undefined vrijednosti:");
console.log(names);