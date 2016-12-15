import React, { Component, PropTypes } from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { tripShape } from '../../shapes/trips';

export default class TripMenuItem extends Component {
  static propTypes = tripShape;

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const { id, name } = this.props;
    const { router } = this.context;
    const isActive = RegExp(`^/trips/${id}`).test(router.location.pathname);
    return (
      <div>
        <MenuItem
          className={router.isActive(`trips/${id}/overview`) && 'active'}
          text={name}
          label={`⌘${id}`}
          onClick={() => router.push(`/trips/${id}/overview`)}
        />
        {isActive &&
          <Menu>
            <MenuItem
              className={RegExp(`^/trips/${id}/transport`).test(router.location.pathname) && 'active'}
              text="Transport"
              onClick={() => router.push(`/trips/${id}/transport`)}
            />
            <MenuItem
              text="Lodging"
              onClick={() => router.push(`/trips/${id}/lodging`)}
            />
          </Menu>
        }
      </div>
    );
  }
}
