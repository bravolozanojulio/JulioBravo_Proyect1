class Rectangulo {
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
    getarea(){
        return this.altura * this.base
    }
}

let r1: Rectangulo
let r2: Rectangulo


r1= new Rectangulo(6,5)
r2= new Rectangulo(10,2)

console.log(`El area del rectangulo es ${r1.getarea()}`)

console.log(`El area del rectangulo es ${r2.getarea()}`)
