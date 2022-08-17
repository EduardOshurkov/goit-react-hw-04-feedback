import {useState, useEffect} from "react";
import styled from '@emotion/styled';
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackCategory } from "components/FeedbackCategory/FeedbackCategory";

function Feedback () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const state = { good, neutral, bad }
  
 

    const onClickFeedback = event => {
        const position = event.currentTarget.textContent;
   
        switch (position) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;

            default:
                break;
        }
    }
  

    const optionKeys = Object.keys(state);

   const countTotalFeedback = () => {
    return Object.values(state).reduce((total, item) => total + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = total && good / total;

    return Math.round(result * 100);
  };


        const showFeedback = good > 0 || neutral > 0 || bad > 0;
        return (
            <FeedbackContainer>
                <FeedbackTitle>Please leave feedback</FeedbackTitle>
                <FeedbackCategory
                    options={optionKeys}
                    handleFeedback={onClickFeedback}
                />
                <FeedbackTitle>Statistics</FeedbackTitle>
                {showFeedback && <Statistics
              {...state}
              total={countTotalFeedback()}
              percent={countPositiveFeedbackPercentage ()}
            />} 
            </FeedbackContainer>
        )
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


