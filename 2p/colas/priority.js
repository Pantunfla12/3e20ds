// colas priority

function Queue() {

    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

}

function enqueue(element) {

this.dataStore.push(element);

}


function dequeue() {

return this.dataStore.shift();

}


function front() {

return this.dataStore[0];

}


function back() {

return this.dataStore[this.dataStore.length-1];

}


function toString() {

var retStr = "";

for (var i = 0; i < this.dataStore.length; ++i) {

retStr += this.dataStore[i] + "\n";

}

return retStr;

}


function empty() {

if (this.dataStore.length == 0) {

return true;

}else {

return false;

}
}


function Patient(name, code) {

    this.name = name;
    this.code = code;

}


function dequeue() {

    var priority = this.dataStore[0].code;

    for (var i = 1; i < this.dataStore.length; ++i) {

    if (this.dataStore[i].code < priority) {

    priority = i;

    }
    }

    return this.dataStore.splice(priority,1);

}


function toString() {

    var retStr = "";

    for (var i = 0; i < this.dataStore.length; ++i) {

    retStr += this.dataStore[i].name + " número: "

    + this.dataStore[i].code + "\n";

    }

    return retStr;

}


var p = new Patient("José",10);
var q = new Queue();
q.enqueue(p);

p = new Patient("Adolfo", 7);
q.enqueue(p);

p = new Patient("Edson", 2);
q.enqueue(p);

p = new Patient("Salvador", 12);
q.enqueue(p);

p = new Patient("Sebastián", 1);
q.enqueue(p);


console.log("\nLista de pacientes:\n");
console.log(q.toString());


var seen = q.dequeue();


console.log("Paciente siendo atendido: " + seen[0].name);
console.log("Pacientes esperando: \n")
console.log(q.toString());


/* --------------------------------------------------------  */

var seen = q.dequeue();

console.log("Paciente siendo atendido: " + seen[0].name);
console.log("Pacientes esperando: \n")
console.log(q.toString());
var seen = q.dequeue();
console.log("Paciente siendo atendido: " + seen[0].name);
console.log("Pacientes esperando: ")
console.log(q.toString());
