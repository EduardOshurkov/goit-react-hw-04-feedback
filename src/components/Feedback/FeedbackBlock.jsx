import React from "react";

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
            <div>
                <h2>Please leave feedback</h2>
                <button type="button" onClick={this.onClickGood}>Good</button>
                <button type="button" onClick={this.onClickNeutral}>Neutral</button>
                <button type="button" onClick={this.onClickBad}>Bad</button>
                <h2>Statistics</h2>
                {this.state.visable && (
                <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                    <li>Total: {this.state.total}</li>
                    <li>Positive feedback: {Math.floor(this.state.percentage * 100) / 100}%</li>    
                        
                </ul>
                )}
            </div>
        )
    }
}

export default Feedback;