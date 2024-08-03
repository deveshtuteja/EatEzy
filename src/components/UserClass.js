import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy-name",
        location: "dummy-loc",
        avatar_url: "/avatar-url",
      }
    };

    console.log(this.props.name+" constructor is called");
  }
  async componentDidMount() {
    console.log(this.props.name+" component did mount");
    //API calls
    const userData = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await userData.json();
    console.log(json);

    this.setState({
      userInfo: json
    });
  }

  componentDidUpdate(){
    console.log("Component Did Update is called");
  }

  componentWillUnmount(){
    console.log("Component Will Unmount is called....");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name+" render is called...");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>Contact: @akshaymarch7</h2>
      </div>
    );
  }
}

export default UserClass;


