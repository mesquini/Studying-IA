class redeNeural{
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes
        this.h_nodes = h_nodes
        this.o_nodes = o_nodes

        this.bias_ih = new Matriz(this.h_nodes, 1)
        this.bias_ih.ramdomize()
        this.bias_ho = new Matriz(this.o_nodes,1)
        this.bias_ho.ramdomize()

        this.weigth_ih = new Matriz(this.h_nodes, this.i_nodes)
        this.weigth_ih.ramdomize()

        this.weigth_ho = new Matriz(this.o_nodes, this.h_nodes)
        this.weigth_ho.ramdomize()

    }

    feedFoward(arr){
        //input -> hidden
        let input = Matriz.arrayToMatrix(arr)

        let hidden = Matriz.multiplica(this.weigth_ih, input)
        hidden = Matriz.add(hidden, this.bias_ih)

        hidden.map(sigmoid)

        //hidden -> output

        let output = Matriz.multiplica(this.weigth_ho, hidden)
        output = Matriz.add(output, this.bias_ho)
        output.map(sigmoid)

        output.print();
    }
}

function sigmoid(x){
    return 1/(1 + Math.exp(-x))
}