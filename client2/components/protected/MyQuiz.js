import React, { PropTypes, Component } from 'react'
import HeaderQuiz from './HeaderQuiz'
import MainSectionQuiz from '../../containers/MainSectionQuiz.container'
import store from '../../store'

class MyQuiz extends Component {
  render() {
    const { actions, firedux } = this.props
    return (
      <div>
        <HeaderQuiz addQuiz={actions.addQuiz} />
        Your Questions:
        <MainSectionQuiz actions={actions} />
      </div>
    )
  }
}

MyQuiz.propTypes = {
  actions: PropTypes.object.isRequired,
  firedux: PropTypes.object.isRequired
}

export default MyQuiz
