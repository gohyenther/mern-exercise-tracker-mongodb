import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import MealsList from "./components/meals-list.component";
import EditExercise from "./components/edit-exercise.component";
import EditMeal from "./components/edit-meal.component";
import CreateUser from "./components/create-user.component";
import CreateExercise from "./components/create-exercise.component";
import CreateMeal from "./components/create-meal.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/exercises" exact component={ExercisesList} />
      <Route path="/meals" exact component={MealsList} />
      <Route path="/exerciseEdit/:id" component={EditExercise} />
      <Route path="/mealEdit/:id" component={EditMeal} />
      <Route path="/createExercise" component={CreateExercise} />
      <Route path="/createMeal" component={CreateMeal} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
