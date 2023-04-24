import { Container } from './Layout.styled';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <Container>
      {/* <header>Header</header> */}
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
