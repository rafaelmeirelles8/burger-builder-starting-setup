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
        price: 4,
        disable: true
    }

    updatePurchaseState (updatedIngredients) {
        const ingredients = updatedIngredients;
        
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) =>{
            return sum + el;
        } ,0)
        
        this.setState({disable: sum <= 0});
    }

    addIngredientsHandler = (type) =>
    {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.price;
        const totalPrice = oldPrice + INGREDIENT_PRICES[type];
                      

        this.setState({ingredients: updatedIngredients, price:totalPrice});  
        
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientsHandler = (type) =>
    {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.price;
        const totalPrice = oldPrice - INGREDIENT_PRICES[type];

        this.setState({ingredients: updatedIngredients, price:totalPrice});

        this.updatePurchaseState(updatedIngredients);
    }

    render()
    {
        const disabledInfo = {
            ...this.state.ingredients
        };
        
        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildConstrols 
                price={this.state.price}
                ingredientAdded={this.addIngredientsHandler}
                ingredientRemoved={this.removeIngredientsHandler}
                disabledInfo={disabledInfo}
                disable={this.state.disable}></BuildConstrols>
            </Auxiliary>
        )
}
}


export default BurgerBuilder;