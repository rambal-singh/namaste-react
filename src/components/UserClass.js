import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
 async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rambal-singh")
    const json= await data.json()
    console.log(json);
    
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h2> NAME:{name}</h2>
        <h3> Location:{location} </h3>
        <h4> Contact: @rambal</h4>
      </div>
    );
  }
}
export default UserClass;
