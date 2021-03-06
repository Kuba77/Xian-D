import React, { Component } from 'react';
import { tripShape } from '../../shapes/trips';
import QuickAdd from '../../containers/Transport/QuickAdd';

export default class View extends Component {
  static propTypes = {
    trip: tripShape.isRequired
  }

  render() {
    const { trip } = this.props;
    return (
      <div key={`trip-${trip.id}-view`}>
        <main>
          <QuickAdd tripId={trip.id} />
        </main>
      </div>
    );
  }
}
