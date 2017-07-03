import React, { Component } from 'react'
import firebase, { ref } from '../../config/firebase'
import { getQuizzes } from '../../services/firebase/getQuizzes'
import { deleteQuiz } from '../../services/firebase/deleteQuiz'

export default class MyQuiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: []
    }
  }

  componentDidMount() {
    getQuizzes().then(this.setState.bind(this));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.quizzes.map((quiz) => {
            return (
              <li key={quiz.id}>
                <h3>subject: {quiz.subject}</h3>
                <p>question: {quiz.question}</p>
                <p>answer: {quiz.answer}</p>
                <p>choice1: {quiz.choice1}</p>
                <p>choice2: {quiz.choice2}</p>
                <button onClick={() => window.location = '/editquiz/'}>Edit Quiz</button>
                <button onClick={() => deleteQuiz(quiz.id)}>Remove Quiz</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}