import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildConstrols from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon:0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        price: 4
    }

    addIngredientsHandler = (type, addOrRemove) =>
    {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.price;
        const totalPrice = oldPrice + INGREDIENT_PRICES[type];

        this.setState({ingredients: updatedIngredients, price:totalPrice});        
    }

    removeIngredientsHandler = (type) =>
    {
        const oldCount = this.state.ingredients[type];

        if(oldCount===0)
        {
            alert('You can not remove: '+ type + ' because it is not added!');
            return;
        }

        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.price;
        const totalPrice = oldPrice - INGREDIENT_PRICES[type];

        this.setState({ingredients: updatedIngredients, price:totalPrice});
    }

    render()
    {
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildConstrols 
                ingredientAdded={this.addIngredientsHandler}
                ingredientRemoved={this.removeIngredientsHandler}></BuildConstrols>
            </Auxiliary>
        )
}
}


export default BurgerBuilder;