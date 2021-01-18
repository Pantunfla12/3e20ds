class rmEdge {

    constructor(c) {

        this.n = c

    }

    addVertex(v) {

        this.n[v] = 0

    }


    addEdge(e, x) {

        if (typeof (this.n[e] === "number")) {

            this.n[e] = []

        }

        this.n[e][x] = 1

    }


    toString() {

        let s = "\n"

        for (let i = 0; i < this.n.length; i++) {

            s += "\n"

            for (let j = 0; j < this.n.length; j++) {

                s += this.n[i][j];

            }

        }

        return s;

    }


    print() {

        console.log(this.toString())

    }


    removeEdge(x, y) {

        this.n[x][y] = 0

        g.print()
      
    }

}

let g= new rmEdge([

    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1],
    [0,1,0,0],])

g.print()


g.removeEdge(1,2)