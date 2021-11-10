import React, {Component} from 'react';


class Product extends Component{
    constructor(props){
        super(props);
        this.state = {ProductId:'', qty:0}
    }

    addToCart = (pid) =>(
        this.setState((state) =>(
            {productId: pid, qty : state.qty + 1}
            ))
        )
    render(){
        return(
            <div>
                <button  onClick={() => this.addToCart(1)}> Add to Cart </button>
                <button  onClick={() => this.addToCart(2)}> Add to Cart </button>
                <button  onClick={() => this.addToCart(3)}> Add to Cart </button>
                <Cart productId={this.state.productId} qty={this.state.qty}/>
            </div>
        );
    }
}

class Cart extends Component{

    constructor(props){
        super(props);
        this.state = {qty: this.props.qty}
    }

    static getDerivedStateFromProps(props, state){
        if(props.qty !==state.qty){
            return{qty:props.qty}
        }

        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.qty !== nextProps.qty){
            console.log('should component updated');
            return true;
        }
        return false;
    }

    // updateQty = () =>{
    //     this.setState((state) =>(
    //         {qty: state.qty +1}
    //     ))
    // }

    componentDidMount(){
        console.log('Execute after Component render');
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.productId !== prevProps.productId){
            console.log('component Updated')
        }
    }
    render(){
        return(
            <div>
                <h2>Cart Items {this.state.qty}</h2>
                <button onClick={this. updateQty}>update Qty</button>
            </div>
        )
    }
}
 
export default Product;