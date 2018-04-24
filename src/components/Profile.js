import React from 'react';

class Profile extends React.Component {
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
      <div className="profile">
        <div className="profile__inner">

          <div className="profile__hero">

            {this.state.isLoggedIn ? (
              <div className="profile__hero-avatar">
                <div className="profile__hero-avatar-media">
                  <img className="profile__hero-avatar-img" src="https://fillmurray.com/g/200/200" alt="" />
                </div>
                <p className="profile__hero-avatar-name">Daniel Williams</p>
                <p className="profile__hero-avatar-location">Bristol, UK</p>
              </div>
            ) : (
              <div className="profile__hero-avatar">
                <div className="profile__hero-avatar-media">
                  <img className="profile__hero-avatar-img" src="https://fillmurray.com/g/200/200" alt="" />
                </div>
                <p className="profile__hero-avatar-name">Anon</p>
                <p className="profile__hero-avatar-location">Location</p>
              </div>
            )}
            </div>

          <div className="profile__creations">
              <div className="profile__creations-inner">

                {this.state.isLoggedIn ? (
                  [...Array(5)].map((x, i) =>
                    <div className="profile__creation" key={i}>
                      <div className="profile__creation-inner">
                        <h3 className="profile__creation-title">Case Study Name</h3>
                        <div className="case-study__block-item-media">
                          <img src="https://placeimg.com/640/480/any" alt="" />
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <p className="profile__creations-message">Please sign up or <button onClick={this.handleLogin}>login</button> to see creations</p>
                )}

              </div>
          </div>

          <div className="profile__contact">
            <div className="profile__contact-inner">
              <h2 className="profile__contact-title">My Teams</h2>

              <h3 className="profile__contact-sub-title">Contact</h3>

              <div className="profile__contact-links">

                {['Instagram', 'Twitter', 'Behance', ].map((x, i) =>
                  <div className="profile__contact-link" key={i}>
                    <a className="profile__contact-link-anchor">{x}</a>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Profile
