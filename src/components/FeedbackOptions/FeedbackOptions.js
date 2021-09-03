import PropTypes from 'prop-types';
import styless from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
    return (
        <button
            className={styless.Button}
            type="button"
            data-feedback={feedback}
            key={feedback}
            onClick={onLeaveFeedback}
        >
            {feedback}
        </button>
    );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option =>
        FeedbackButton({ feedback: option, onLeaveFeedback }),
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
