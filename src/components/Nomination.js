import React from 'react';
import { Link } from 'react-router-dom';

class Nomination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    if (!this.state.isLoggedIn) {
      window.localStorage.setItem('isLoggedIn', 'true');
    }

    this.setState({
      isLoggedIn: window.localStorage.getItem('isLoggedIn') === 'true' ? true : false
    });
  }

  componentWillMount() {
    this.setState({
      isLoggedIn: window.localStorage.getItem('isLoggedIn') && window.localStorage.getItem('isLoggedIn') === 'true' ? true : false
    });
  }

  render() {
    return <div>
      <div className="nomination">
        <div className="nomination__inner">
          <div className="nomination__hero">
            <h1 className="nomination__hero-title">Nomination</h1>

            {this.state.isLoggedIn ? (
              <p className="nomination__hero-message">This is the logged in hero message</p>
            ) : (
              <div className="nomination__hero-buttons">
                <button className="cta cta--primary" onClick={this.handleLogin}>Click here to log in</button>
              </div>
            )}
          </div>

          {this.state.isLoggedIn ? (
            <div className="nomination__upload-form">

              <div className="form-field">
                <label className="form-field__label">Name of project</label>
                <input className="form-field__text-input" type="text" />
              </div>
              <div className="form-field">
                <label className="form-field__label">What is it</label>
                <input className="form-field__text-input" type="text" />
              </div>
              <div className="form-field">
                <label className="form-field__label">Who made it</label>
                <input className="form-field__text-input" type="text" />
              </div>
              <div className="form-field">
                <label className="form-field__label">Disciplines</label>
                <input className="form-field__text-input" type="text" />
              </div>

              <Link to='/profile'>Submit</Link>

            </div>
          ) : (
            <div className="nomination__signup-form">

              <div className="form-field">
                <label className="form-field__label">My name is</label>
                <input className="form-field__text-input" type="text" />
              </div>
              <div className="form-field">
                <label className="form-field__label">I am a</label>
                <input className="form-field__text-input" type="text" />
              </div>
              <div className="form-field">
                <label className="form-field__label">Living in</label>
                <input className="form-field__text-input" type="text" />
              </div>
              <div className="form-field">
                <label className="form-field__label">My email is</label>
                <input className="form-field__text-input" type="text" />
              </div>

              <button className="cta cta--primary" onClick={this.handleLogin}>Go</button>
            </div>
          )}

        </div>
      </div>
    </div>
  }
}

export default Nomination
