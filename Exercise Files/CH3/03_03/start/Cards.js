import React from 'react';
import { ScrollView } from 'react-native';
import MyCard from './MyCard';

const Cards = () => {
    return (
        <ScrollView>
            <MyCard cardId='Card 1'/>
            <MyCard cardId='Card 2'/>
            <MyCard cardId='Card 3'/>
        </ScrollView>
    )
}
 
export default Cards;
