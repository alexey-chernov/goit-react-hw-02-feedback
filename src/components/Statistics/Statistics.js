import PropTypes from 'prop-types';
import Notification from '../Notification';
import styless from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        {total ? (
            <ul className={styless.List}>
                <li className={styless.Item}>Good: {good}</li>
                <li className={styless.Item}>Neutral: {neutral}</li>
                <li className={styless.Item}>Bad: {bad}</li>
                <li className={styless.Item}>Total: {total}</li>
                <li className={styless.Item}>
                    Positive feedback: {positivePercentage}%
                </li>
            </ul>
        ) : (
            <Notification message="No feedback given" />
        )}
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
