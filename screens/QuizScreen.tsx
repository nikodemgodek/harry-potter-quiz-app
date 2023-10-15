import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function QuizScreen() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const quizData = [
      {
        question: 'Jak nazywa się główny bohater serii "Harry Potter"?',
        options: ['Ron Weasley', 'Hermione Granger', 'Harry Potter', 'Albus Dumbledore'],
        correctAnswer: 'Harry Potter',
      },
      {
        question: 'Kto jest dyrektorem Hogwartu w pierwszej części serii?',
        options: ['Albus Dumbledore', 'Severus Snape', 'Minerva McGonagall', 'Ginny Wesley'],
        correctAnswer: 'Albus Dumbledore',
      },
      {
        question: 'Jakie zwierzę to patronus Harry\'ego Pottera?',
        options: ['Kot', 'Pies', 'Sowa', 'Mysz'],
        correctAnswer: 'Sowa',
      },
      {
        question: 'Jaki przedmiot nauczał Gilderoy Lockhart w Hogwarcie?',
        options: ['Zaklęcia obronne', 'Eliksiry', 'Opieka nad magicznymi stworzeniami', 'Obrona przed czarną magią'],
        correctAnswer: 'Zaklęcia obronne',
      },
      {
        question: 'Który przedmiot nauczała profesor Sybill Trelawney?',
        options: ['Astronomia', 'Wróżbiarstwo', 'Historia Magii', 'Nauka latania na miotle'],
        correctAnswer: 'Wróżbiarstwo',
      },
      {
        question: 'Kto jest autorem serii "Harry Potter"?',
        options: ['J.R.R. Tolkien', 'George Orwell', 'J.K. Rowling'],
        correctAnswer: 'J.K. Rowling',
      },
      {
        question: 'Jak nazywa się miotła, na której latają czarodzieje w świecie Harry\'ego Pottera?',
        options: ['Nimbus 2000', 'Firebolt', 'Comet 260'],
        correctAnswer: 'Nimbus 2000',
      },
      {
        question: 'Gdzie znajduje się Komnata Tajemnic w Hogwarcie?',
        options: ['W wieży Astronomii', 'W lochach zamku', 'W skrzydle szpitalnym'],
        correctAnswer: 'W skrzydle szpitalnym',
      },
      {
        question: 'Jaki przedmiot nauczał Remus Lupin w Hogwarcie?',
        options: ['Zaklęcia obronne', 'Eliksiry', 'Opieka nad magicznymi stworzeniami'],
        correctAnswer: 'Zaklęcia obronne',
      },
      {
        question: 'Kto jest największym wrogiem Harry\'ego Pottera?',
        options: ['Draco Malfoy', 'Voldemort', 'Severus Snape'],
        correctAnswer: 'Voldemort',
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
        alert(`Twój wynik ${score} / ${quizData.length}`);
        setScore(0);
        setCurrentQuestion(0);


      }
    }
  
    return(
      <View style={{flex: 1}}>
          <View style={{backgroundColor: 'red', flex: 1}}>
              <Image source={require('../assets/question1.jpg')} style={{flex: 1, resizeMode: 'cover', width: '100%'}}/>
          </View>
          <View style={styles.content}>
            <View style={styles.questionBox}>
              <Text style={{color: '#fff', fontSize: 18}}>{quizData[currentQuestion].question}</Text>
            </View>
            <View style={styles.answersBox}>
              { quizData[currentQuestion].options.map( (answer, index) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: 'green',
                    width: '50%'
                  }}
                  key={index}
                  onPress={() => handleAnswer(answer)}
                >
                  <Text style={{color: '#fff'}}>{answer}</Text>
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
      backgroundColor: 'indigo',
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