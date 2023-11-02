import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ title, id }) {
  return (
    <div>
      <Link to={`/detail/${id}`}>{title}</Link>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Movie;
