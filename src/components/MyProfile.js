import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: "male",
    description: "",
    check: false,
  };

  handleFieldChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleCheckChange = () => {
    this.setState({
      check: !this.state.check,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  };

  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <div className="form-group">
          <label>Name</label>
          <input placeholder="Your name" className="form-control" aria-describedby="emailHelp"></input>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select className="form-control">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Description about yourself" className="form-control" rows="3"></textarea>
        </div>
        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input"></input>
            <label className="form-check-label">I have read the term of conduct</label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default MyProfile;


