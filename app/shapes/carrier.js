import { PropTypes } from 'react';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string
  }),
  status: PropTypes.string
});