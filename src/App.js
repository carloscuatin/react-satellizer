import React, { Component } from 'react';
import { render }           from 'react-dom';
import { Facebook }         from './index';
import { configFacebook }   from './config';

class App extends Component {
  constructor(props) {
    super(props);
  }

  onFacebookLogin(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        Hello world
        <Facebook
          config={configFacebook}
          callback={this.onFacebookLogin}
          textDisplay='Iniciar Sesion'
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
