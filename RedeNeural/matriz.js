class Matriz{
    constructor(rows,cols){
        this.rows = rows;
        this.cols = cols

        this.data = []

        for (let i = 0; i < rows; i++) {
            let arr = []
            for (let j = 0; j < cols; j++) {
                arr.push(Math.floor(Math.random()*10));
                
            }
            this.data.push(arr);            
        }     
    }

    static arrayToMatrix(arr){
        let m = new Matriz(arr.length, 1)

        m.map((elm, i, j) =>{
            return arr[i]
        })
        return m
    }

    static map(a, func){
        let matrix = new Matrix(a.rows, a.cols)

        matrix.data = matrix.data.map((arr, i) => {
            return arr.map((num, j) =>{
                return func(num, i, j)
            })
        })
        return matrix
    }

    map(func){
        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) =>{
                return func(num, i, j)
            })
        })
        return this
    }


    print(){
        console.table(this.data)
    }
    ramdomize(){
        this.map((elm,i,j) =>{
            return Math.random() * 2 -1
        })
    }

    static add(a,b){
        let matriz = new Matriz(a.rows, b.cols)
        matriz.map((num, i, j) =>{
            return a.data[i][j] + b.data[i][j]
        })
        return matriz
    }

    static multiplica(a,b){
        let matriz = new Matriz(a.rows, b.cols)

        matriz.map((num,i,j) =>{
            let sum = 0;
            for (let k = 0; k < a.cols; k++) {
                let elm1 = a.data[i][k]
                let elm2 = b.data[k][j]

                sum += elm1 * elm2
                
            }
            return sum
        })
        return matriz
    }
}