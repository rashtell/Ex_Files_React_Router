import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const MyCard = (props) => {
  return (
    <View>
        <Card
          title={props.card.name}
          image={require('./images/background.jpg')}>
          <Text style={{marginBottom: 10}}>
            A card item from React Native Elements used in this React Router course. Enjoy!!!
          </Text>
          <Button
            icon={{name: 'done'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='TAP ME' />
        </Card>
      </View>
  );
}
 
export default MyCard;
