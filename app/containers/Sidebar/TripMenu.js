import { connect } from 'react-redux';
import TripMenu from '../../components/Sidebar/TripMenu';

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, undefined)(TripMenu);