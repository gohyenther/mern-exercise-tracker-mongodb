import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditMeal extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeMeal = this.onChangeMeal.bind(this);
    this.onChangeCalories = this.onChangeCalories.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      meal: '',
      calories: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/meals/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          meal: response.data.meal,
          calories: response.data.calories,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeMeal(e) {
    this.setState({
      meal: e.target.value
    })
  }

  onChangeCalories(e) {
    this.setState({
      calories: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const meal = {
      username: this.state.username,
      meal: this.state.meal,
      calories: this.state.calories,
      date: this.state.date
    }

    console.log(meal);

    axios.post('http://localhost:5000/meals/update/' + this.props.match.params.id, meal)
      .then(res => console.log(res.data));

    window.location = '/meals';
  }

  render() {
    return (
    <div>
      <h3>Edit Meal Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Meal: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.meal}
              onChange={this.onChangeMeal}
              />
        </div>
        <div className="form-group">
          <label>Calories (in kcal): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.calories}
              onChange={this.onChangeCalories}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Meal Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}