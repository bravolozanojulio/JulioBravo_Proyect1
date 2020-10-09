class rectangulo {
    private base: number
    private altura: number

    constructor(base:number,altura:number){
        this.base=base
        this.altura=altura
    }

    getbase(){
        return this.base
    }
    getaltura(){
        return this.altura
    }
}

let r1: rectangulo
let r2: rectangulo
let multiplicacion= (a:number,b:number) => (a*b)


r1= new rectangulo(5,5)
r2= new rectangulo(10,2)


console.log(`El area del rectangulo es`,multiplicacion(r1.getaltura(), r1.getbase()))

console.log(`El area del rectangulo es`,multiplicacion(r2.getaltura(), r2.getbase()))