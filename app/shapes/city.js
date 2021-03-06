import { PropTypes } from 'react';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  alternate_names: PropTypes.arrayOf(PropTypes.string),
  coordinates: [PropTypes.number],
});
