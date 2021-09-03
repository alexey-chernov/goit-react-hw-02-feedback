import PropTypes from 'prop-types';
import styless from './Container.module.css';

function Container({ children }) {
    return <div className={styless.Container}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;
