import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

//cardlist functional component i.e one single monster div
//takes in props which are the parameter we get from our functional component
//we are also exporting it to App.js (main app file)
export const CardList = (props) => {
    return (<div className='card-list'>
        {
            //we are rendering js expressions, so they need to be wrapped in {}
            //map takes on the first element function as param we pass into it, returns us the return of whatever function passed to it, iterated over every element in the array
            //keys are used to know which state element/html tag has been updated
            props.monsters.map(monster => (
                //passing a monster in the card component
                <Card key={monster.id} monster={monster}/>
            ))}
    </div>);
};