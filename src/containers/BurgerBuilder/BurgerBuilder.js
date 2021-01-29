import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildConstrols from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends Component {

state = {
    ingredients: {
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    price:0
}


    render()
    {
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildConstrols></BuildConstrols>
            </Auxiliary>
        )
    }
}


export default BurgerBuilder;