import PropTypes from 'prop-types';
import styled from '@emotion/styled'

export const Statistics = ({ good, neutral, bad, total, percent }) => {
    return (
        <>
            <FeedbackName>Good: {good}</FeedbackName>
            <FeedbackName>Neutral: {neutral}</FeedbackName>
            <FeedbackName>Bad: {bad}</FeedbackName>
            <FeedbackName>Total: {total}</FeedbackName>
            <FeedbackName>Positive feedback: {`${percent}%`}</FeedbackName>
        </>
    );
}


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  percent: PropTypes.number.isRequired,
};

const FeedbackName = styled.p`
display: flex;
margin-bottom:10px;
font-family: Kdam Thmor Pro;
font-size: 26px;
margin-right: 10px;
`;