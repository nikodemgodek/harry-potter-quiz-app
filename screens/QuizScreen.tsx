import { SafeAreaView, View, Image, Text, Button, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';
import { useState } from 'react';
import RootStackParamList from './RootStackParamList';

type GeneralScreenNavigationProp = StackNavigationProp<RootStackParamList, 'General'>;

type Props = {
  navigation: GeneralScreenNavigationProp,
};

const QuizScreen: React.FC<Props> = ({ navigation }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [opinion, setOpinion] = useState('');

    const quizData = [
      {
        question: 'Jak nazywa się główny bohater serii "Harry Potter"?',
        options: ['Ron Weasley', 'Hermione Granger', 'Harry Potter', 'Albus Dumbledore'],
        correctAnswer: 'Harry Potter',
        photo: require('../assets/question1.jpg'),
      },
      {
        question: 'Kto jest dyrektorem Hogwartu w pierwszej części serii?',
        options: ['Albus Dumbledore', 'Severus Snape', 'Minerva McGonagall', 'Ginny Wesley'],
        correctAnswer: 'Albus Dumbledore',
        photo: require('../assets/question2.jpg'),
      },
      {
        question: 'Jakie zwierzę to patronus Harry\'ego Pottera?',
        options: ['Kot', 'Pies', 'Jeleń', 'Mysz'],
        correctAnswer: 'Jeleń',
        photo: require('../assets/question3.jpg'),
      },
      {
        question: 'Jaki przedmiot nauczał Gilderoy Lockhart w Hogwarcie?',
        options: ['Zaklęcia obronne', 'Eliksiry', 'Opieka nad magicznymi stworzeniami', 'Obrona przed czarną magią'],
        correctAnswer: 'Zaklęcia obronne',
        photo: require('../assets/question4.jpg'),
      },
      {
        question: 'Który przedmiot nauczała profesor Sybill Trelawney?',
        options: ['Astronomia', 'Wróżbiarstwo', 'Historia Magii', 'Nauka latania na miotle'],
        correctAnswer: 'Wróżbiarstwo',
        photo: require('../assets/question5.jpeg'),
      },
      {
        question: 'Kto jest autorem serii "Harry Potter"?',
        options: ['J.R.R. Tolkien', 'George Orwell', 'J.K. Rowling'],
        correctAnswer: 'J.K. Rowling',
        photo: require('../assets/question6.jpg'),
      },
      {
        question: 'Jak nazywa się miotła, na której latają czarodzieje w świecie Harry\'ego Pottera?',
        options: ['Nimbus 2000', 'Firebolt', 'Comet 260'],
        correctAnswer: 'Nimbus 2000',
        photo: require('../assets/question7.jpeg'),
      },
      {
        question: 'Gdzie znajduje się Komnata Tajemnic w Hogwarcie?',
        options: ['W wieży Astronomii', 'W lochach zamku', 'W skrzydle szpitalnym'],
        correctAnswer: 'W skrzydle szpitalnym',
        photo: require('../assets/question4.jpg'),
      },
      {
        question: 'Jaki przedmiot nauczał Remus Lupin w Hogwarcie?',
        options: ['Zaklęcia obronne', 'Eliksiry', 'Opieka nad magicznymi stworzeniami'],
        correctAnswer: 'Zaklęcia obronne',
        photo: require('../assets/question1.jpg'),
      },
      {
        question: 'Kto jest największym wrogiem Harry\'ego Pottera?',
        options: ['Draco Malfoy', 'Voldemort', 'Severus Snape'],
        correctAnswer: 'Voldemort',
        photo: require('../assets/question2.jpg'),
      },
    ];

    const handleAnswer = (selectedAnswer: string) => {
      if(selectedAnswer === quizData[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      if(currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }else{
        //navigate to general menu
        const opinion = getOpinion(score);
        navigation.navigate('Finish', { score, opinion});
        setCurrentQuestion(0);
        setScore(0);
      }
    }

    const getOpinion = (score : number) => {
      
      switch(score) {
        case 1:
          return 'Amator!'
        case 2:
          return 'Coś tam umiesz..'
        case 3:
          return 'Nadal żółtodziób!'
        case 4:
          return 'No powiedzmy..'
        case 5:
          return 'Przeciętnie'
        case 6:
          return 'Nieźle!'
        case 7:
          return 'Ambitnie!'
        case 8:
          return 'Szkolony!'
        case 9:
            return 'Mistrz!'
        case 10:
            return 'Prawdziwy Potterhead!'
        default:
            return 'Git'
      }

    }
  
    const imagePath : string = '../assets';

    const forceQuizQuit = () => {
      setCurrentQuestion(0);
      setScore(0);
      navigation.navigate('General');
    }

    return(
      <View style={{flex: 1}}>
          <View style={{backgroundColor: 'red', flex: 1}}>
              <ImageBackground source={quizData[currentQuestion].photo} style={{flex: 1, resizeMode: 'cover', width: '100%'}}>
                <SafeAreaView style={{alignItems: 'flex-end', marginRight: 15}}>
                  <TouchableOpacity onPress={forceQuizQuit} style={{backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 15}}>
                    <Text style={{color: '#000', fontWeight: 600}}>Zakończ quiz</Text>
                  </TouchableOpacity>
                </SafeAreaView>
              </ImageBackground>
          </View>
          <View style={styles.content}>
            <Text style={{ fontSize: 22, color: '#fff', marginHorizontal: 20, marginTop: 30}}>Pytanie {currentQuestion+1}/{quizData.length}</Text>
            <View style={styles.questionBox}>
              <Text style={{color: '#fff', fontSize: 18}}>{quizData[currentQuestion].question}</Text>
            </View>
            <View style={styles.answersBox}>
              { quizData[currentQuestion].options.map( (answer, index) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    width: '50%',
                    height: 50,
                    alignItems: 'center', justifyContent: 'center',
                    borderWidth: 5,

                  }}
                  key={index}
                  onPress={() => handleAnswer(answer)}
                >
                  <Text style={{color: '#000'}}>{answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
      </View>
    )
  }
    
const styles = StyleSheet.create({

    questionBox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    answersBox: {
      flex: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      backgroundColor: 'black',
    },
    row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
    rowItem: {
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 5,
      padding: 10,
      width: '45%',
      alignItems: 'flex-start',
    },
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
      flex: 1,
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

  export default QuizScreen;