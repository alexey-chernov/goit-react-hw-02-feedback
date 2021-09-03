import PropTypes from 'prop-types';
import styless from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <section className={styless.Section}>
            <h1 className={styless.Title}>{title}</h1>
            {children}
        </section>
    );
};

Section.defaultPropes = {
    title: '',
    children: [],
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;
