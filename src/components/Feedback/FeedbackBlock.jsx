import React from "react";
import styled from '@emotion/styled';
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackCategory } from "components/FeedbackCategory/FeedbackCategory";

class Feedback extends React.Component {

    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }

    onClickFeedback = event => {
        const position = event.currentTarget.textContent;
        console.log('click')
    this.setState(prevState => ({
      [position]: prevState[position] + 1,
    }));
    }
  

    optionKeys = Object.keys(this.state);

   countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = total && good / total;

    return Math.round(result * 100);
  };


    render() {
        const { good, neutral, bad } = this.state;
        const showFeedback = good > 0 || neutral > 0 || bad > 0;
        return (
            <FeedbackContainer>
                <FeedbackTitle>Please leave feedback</FeedbackTitle>
                <FeedbackCategory
                    options={this.optionKeys}
                    handleFeedback={this.onClickFeedback}
                />
                <FeedbackTitle>Statistics</FeedbackTitle>
                {showFeedback && <Statistics
              {...this.state}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage ()}
            />} 
            </FeedbackContainer>
        )
    }
}

export default Feedback;

const FeedbackContainer = styled.div`
padding: 40px;
`;

const FeedbackTitle = styled.h2`
display: flex;
margin-bottom:10px;
font-family: Kdam Thmor Pro;
font-size: 26px;
margin-right: 10px;
`;


