var empty = []

console.log(empty);

for (var i = 1; i <= 10; i++) {
    empty.push(i)
}

console.log(empty);

for (var i = 0; i < 10; i++) {
    empty[i] = "hello"
}

console.log(empty)

for (var i = 0; i < 10; i++) {
    empty.pop();
}

console.log(empty)