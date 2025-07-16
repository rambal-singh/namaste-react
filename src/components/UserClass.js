import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url:"htp://dumy-photo.com"
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(){
console.log("componentDidUpdate");

  }
  componentWillUnmount(){
    console.log("componentwill unmount");
    
  }


  render() {
     const {name,location,avatar_url}=this.state.userInfo
    return (
      <div className="user-card">
      <img src={avatar_url}/>
        <h2> NAME:{name}</h2>
        <h3> Location:{location} </h3>
        <h4> Contact: @rambal</h4>
      </div>
    );
  }
}
export default UserClass;
