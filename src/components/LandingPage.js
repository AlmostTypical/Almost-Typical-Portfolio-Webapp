import React from 'react';
import Typewriter from 'react-typewriter';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Typewriter typing={0.7}>
          <p className='mainTitle'>ALMOST TYPICAL PROGRAMMING</p>
        </Typewriter>
      </div>
    )
  }
});

export default App;