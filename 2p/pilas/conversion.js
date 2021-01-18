// pila conversion

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top-1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}

function mulBase(num, base) {
    var s = new Stack();
    do {
    s.push(num % base);
    num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
    converted += s.pop();
    }
    return converted;
}

    var n = 10;
    var b = 7;
    var num = mulBase(n, b);

    console.log(n + " convertido a base " + b + " es = " + num);

    n = 25214;
    b = 3;
    num = mulBase(n, b);

    console.log(n + " convertido a base " + b + " es = " + num);