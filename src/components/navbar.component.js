import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Health Tracker</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
            <li className="navbar-item">
              <Link to="/createExercise" className="nav-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/createMeal" className="nav-link">Create Meal Log</Link>
            </li>
          </ul>
        </div>

        <div>
          <li className="Button">
            <Link to="/exercises" className="button-link">Exercises</Link>
          </li>
          <li className="Button">
            <Link to="/meals" className="button-link">Meals</Link>
          </li>
        </div>
      </nav>
    </>
    );
  }
}