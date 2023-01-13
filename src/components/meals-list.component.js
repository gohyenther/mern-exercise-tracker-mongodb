import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Meal = props => (
  <tr>
    <td>{props.meal.username}</td>
    <td>{props.meal.meal}</td>
    <td>{props.meal.calories}</td>
    <td>{props.meal.date.substring(0,10)}</td>
    <td>
      <Link to={"/mealEdit/"+props.meal._id}>edit</Link> | <a href="#" onClick={() => { props.deleteMeal(props.meal._id) }}>delete</a>
    </td>
  </tr>
)

export default class MealsList extends Component {
  constructor(props) {
    super(props);

    this.deleteMeal = this.deleteMeal.bind(this)

    this.state = {meals: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/meals/')
      .then(response => {
        this.setState({ meals: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteMeal(id) {
    axios.delete('http://localhost:5000/meals/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      meals: this.state.meals.filter(ml => ml._id !== id)
    })
  }

  mealList() {
    return this.state.meals.map(currentmeal => {
      return <Meal meal={currentmeal} deleteMeal={this.deleteMeal} key={currentmeal._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Meals</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Meal</th>
              <th>Calories</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.mealList() }
          </tbody>
        </table>
      </div>
    )
  }
}