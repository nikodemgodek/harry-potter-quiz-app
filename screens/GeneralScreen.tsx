import { View, Image, Text, Button, StyleSheet } from 'react-native';

export default function GeneralScreen() {
    return(
      <View style={{flex: 1}}>
          <View style={{backgroundColor: 'red', flex: 1}}>
              <Image source={require('../assets/bgphoto.jpg')} style={{flex: 1, resizeMode: 'cover', width: '100%'}}/>
          </View>
          <View style={styles.content}>
              <View style={styles.intro}>
                  <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 26, marginBottom: 10, marginTop: -10}}>Cześć Czarodzieju lub Czarownico!</Text>
                  <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 16, marginBottom: 10}}>Czy jesteś gotowy/a, aby sprawdzić swoją wiedzę o magicznym świecie Harry'ego Pottera? Przygotowaliśmy dla Ciebie quiz, który sprawdzi, czy jesteś prawdziwym znawcą tej niezwykłej opowieści.</Text>
                  <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 16, marginBottom: 10}}>Quiz składa się z 10 pytań, które przetestują Twoją wiedzę na temat Hogwartu, bohaterów, zaklęć i przygód Harry'ego i jego przyjaciół.</Text>
                  <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 16, marginBottom: 10}}>Czy potrafisz odpowiedzieć na wszystkie pytania i zdobyć tytuł Mistrza Wiedzy Harry'ego Pottera?</Text>
                  <Text style={{width: '100%', textAlign: 'center', color: '#fff', fontSize: 26, marginBottom: 10}}>Czas to sprawdzić!</Text>
                  <Button title="Kliknij, aby rozpocząć test!" />
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