
import { View, Image, Text, Button, StyleSheet } from "react-native"
import { useState, useEffect} from 'react';

const FinishScreen: React.FC<Props> = ({route, navigation}) => {

    const { score, opinion } = route.params;

    const runQuiz = () => {
        navigation.navigate('Quiz');
      }

    const goToMainScreen = () => {
        navigation.navigate('General');
    }
    
    return(
        <View style={{flex: 1}}>
            <View style={{backgroundColor: 'red', flex: 1}}>
                <Image source={require('../assets/bgphoto.jpg')} style={{flex: 1, resizeMode: 'cover', width: '100%'}}/>
            </View>
            <View style={styles.content}>
                <View style={styles.intro}>
                    <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 42, marginBottom: 10, marginTop: -20}}>{opinion}</Text>
                    <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 16, marginBottom: 10}}>Quiz zakończony.</Text>
                    <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 16, marginBottom: 10}}>Udało Ci się ukończyć test z wynikiem</Text>
                    <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 42, marginBottom: 10}}>{score}</Text>
                    <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 16, marginBottom: 10}}></Text>
                    <Button onPress={runQuiz} title="Spróbuj ponownie" />
                    <Button onPress={goToMainScreen} title="Powrót do ekranu głównego" />
                </View>
            </View>
        </View>
      )
}

const styles = StyleSheet.create({
    background: {
      flex: 1, // Rozciągnij obraz na cały ekran
      resizeMode: 'cover', // Dopasuj obraz do ekranu (lub 'contain' jeśli wolisz)
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)', // Dodaj półprzezroczysty kolor tła
    },
    questionText: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center',
      color: 'white', // Ustaw kolor tekstu na biały
    },
    content: {
      flex: 2,
      width: '100%',
      backgroundColor: 'black',
    },
    intro: {
      marginHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }
    // Dodaj resztę stylów
  });

export default FinishScreen;