import React from 'react';
import PropTypes from 'prop-types';
import styless from './Notification.module.css';

const Notification = ({ message }) => (
    <p className={styless.Message}>{message}</p>
);

Notification.defaultProps = {
    message: '',
};

Notification.propTypes = {
    message: PropTypes.string,
};

export default Notification;
