import React, { Component } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import data from '../../questions';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data,
      showCode: false,
      alreadyClicked: [],
      end: false,
      nr: 0,
      total: data.length,
      showButton: false,
      questionAnswered: false,
      score: 0,
      displayPopup: 'flex',
    };
  }

  componentDidMount() {
    const score = localStorage.getItem('score');

    if (score) {
      this.setState({ score: JSON.parse(score) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { score } = this.state;

    if (prevState.score !== this.state.score) {
      localStorage.setItem('score', JSON.stringify(score));
    }
  }

  handleClick = index => {
    this.verifyCorrect(index);
  };

  handleNextQuestion = id => {
    const { history } = this.props;
    const next = +id + 1;

    if (next === '5') {
      console.log(next);
      history.push('/score');
      return;
    }
    history.push(`/${next}`);
  };

  verifyCorrect = index => {
    const { match } = this.props;
    const { alreadyClicked } = this.state;
    const { id } = match.params;

    const { questions, score } = this.state;
    const currentQuestion = questions[id];
    const isCorrect = currentQuestion.correct === index;

    if (isCorrect && !alreadyClicked.includes(index)) {
      this.setState({
        score: score + 20,
        alreadyClicked: [...alreadyClicked, index],
        showCode: true,
      });
    }
  };

  render() {
    const {
      questions,
      showCode,
      end,
      nr,
      total,
      question,
      answers,
      correct,
      showButton,
      questionAnswered,
      displayPopup,
      score,
    } = this.state;

    const { match } = this.props;

    const { id } = match.params;

    const currentQuestion = questions[id];

    return (
      <Container>
        <h1>Perguntas</h1>

        <Form>
          <div className="container">
            <List>{questions[id].question}</List>
            <List>
              {questions[id].answers.map((answer, index) => (
                <li key={index} onClick={() => this.handleClick(index)}>
                  {answer}
                </li>
              ))}
            </List>

            {showCode && (
              <AceEditor
                placeholder="Placeholder Text"
                mode="javascript"
                theme="monokai"
                name="blah2"
                onLoad={this.onLoad}
                onChange={this.onChange}
                fontSize={14}
                showPrintMargin
                showGutter
                highlightActiveLine
                readOnly
                value={currentQuestion.code}
                setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            )}

            <SubmitButton end={end} onClick={() => this.handleNextQuestion(id)}>
              <FaAngleRight color="#FFF" size={14} />
            </SubmitButton>
          </div>
        </Form>
      </Container>
    );
  }
}

export default Main;
