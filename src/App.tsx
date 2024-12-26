import React, { useState } from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  // SafeAreaView,
} from 'react-native';

import DiceOne from '../assets/inverted-dice-1.png';
import DiceTwo from '../assets/inverted-dice-2.png';
import DiceThree from '../assets/inverted-dice-3.png';
import DiceFour from '../assets/inverted-dice-4.png';
import DiceFive from '../assets/inverted-dice-5.png';
import DiceSix from '../assets/inverted-dice-6.png';

type DiceProps = {
  imageUrl: ImageSourcePropType;
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        break;
    }
  };


  return (
   
      <View style={styles.container}>
        <Dice imageUrl={diceImage} />
        <Pressable onPress={rollDiceOnTap}>
          <Text style={styles.rollTheBtnText}>Roll The Dice</Text>
        </Pressable>
      </View>
    
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue', 
  },
  diceImage: {
    height: 200,
    width: 200,
  },
  rollTheBtnText: {
    marginTop: 70,
    padding: 10,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 10,
  },
});

export default App;
