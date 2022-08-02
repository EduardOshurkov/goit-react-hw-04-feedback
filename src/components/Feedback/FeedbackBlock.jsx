import React from "react";
import styled from '@emotion/styled'

class Feedback extends React.Component {

    state = {
    visable: false,
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
    }

    show = () => {
        this.setState({visable: true})
    }

    onClickGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
        this.show()
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }
    
    onClickNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
        this.show()
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    onClickBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }));
        this.show()
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback = () => {
        this.setState(prevState => ({
            total: prevState.good + prevState.neutral + prevState.bad
        }));
    }
    
    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => ({
            percentage: 100 / prevState.total * prevState.good
        }))
    }


    render() {
        return (
            <FeedbackContainer>
                <FeedbackTitle>Please leave feedback</FeedbackTitle>
                <Button type="button" onClick={this.onClickGood}>Good</Button>
                <Button type="button" onClick={this.onClickNeutral}>Neutral</Button>
                <Button type="button" onClick={this.onClickBad}>Bad</Button>
                <FeedbackTitle>Statistics</FeedbackTitle>
                {this.state.visable && (
                <ul>
                    <FeedbackCategory>Good: {this.state.good}</FeedbackCategory>
                    <FeedbackCategory>Neutral: {this.state.neutral}</FeedbackCategory>
                    <FeedbackCategory>Bad: {this.state.bad}</FeedbackCategory>
                    <FeedbackCategory>Total: {this.state.total}</FeedbackCategory>
                    <FeedbackCategory>Positive feedback: {Math.floor(this.state.percentage * 100) / 100}%</FeedbackCategory>    
                        
                </ul>
                )}
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

const FeedbackCategory = styled.li`
display: flex;
margin-bottom:10px;
font-family: Kdam Thmor Pro;
font-size: 16px;
margin-right: 10px;
`;

const Button = styled.button`
  display: inline-flex;
    margin: 10px;
    text-decoration: none;
    border: 2px solid #BFE2FF;
    position: relative;
    overflow: hidden;
    font-size: 16px;
    line-height: 20px;
    padding: 12px 20px;
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    font-family: Kdam Thmor Pro;
    background: #337AB7;
    transition: box-shadow 0.3s, transform 0.3s;
    cursor: pointer;
    &:hover, focus, active {
        transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
    color: #FFF;
  }
`