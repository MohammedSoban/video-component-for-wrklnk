import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';

class MySectionBlock extends Component {
  getStyle() {
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: 'opacity 0.75s ease-in-out' };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: 'none', opacity: '0' };
    } else {
      return {};
    }
  }

  render() {
    const { enterCount, leaveCount } = this.props;
    return (
      <section>
        <div className="content" style={this.getStyle()}>
          <h1>Hello</h1>
          <p>{`Enter viewport: ${enterCount} times`}</p>
          <p>{`Leave viewport: ${leaveCount} times`}</p>
        </div>
      </section>

    );
  }
}
const MySection = handleViewport(MySectionBlock, { rootMargin: '-1.0px' });

export default MySection