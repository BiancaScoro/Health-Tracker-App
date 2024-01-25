import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './components/Nav'
import Calories from './components/Calories'
import MealList from './components/MealList';
import Modal from './components/Modal';
import DeleteMeals from './components/DeleteMeals';
import MealsCounter from './components/MealsCounter';
import MealsFilter from './components/MealsFilter';
import Steps from './components/Steps';
import StepsList from './components/StepsList';
import DeleteSteps from './components/DeleteSteps';
import StepsCounter from './components/StepsCounter';
import StepsFilter from './components/StepsFilter';

function App() {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [stepInput, setStepInput] = useState(0);
  const [steps, setSteps] = useState([]);
  
  const addMealsHandler = () => {
    const oldMeals = meals ? [...meals] : [];
    const meal = {
      mealName,
      calories,
      id:Math.floor(Math.random()*1000),
    };

    const newMeals = oldMeals.concat(meal);
    
    if(calories <= 0 || mealName === ""){
      setOpenModal(true)
    } else {
      setMeals(newMeals)
      localStorage.setItem("meals", JSON.stringify(newMeals));
    }

    setMealName("");
    setCalories(0);
  };

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);

    setMeals(newMeals);
    localStorage.setItem("meals", JSON.stringify(newMeals));
  };

  const deleteAllMeals = () => {
    setMeals([]); 
    localStorage.clear();
  }

  const total = meals.map((meal) => parseInt(meal.calories)).reduce((acc, value) => acc + value, 0);

  useEffect(() => {
    const oldState = [...meals];
    if (selectedFilter === "Ascending") {
      const ascendingMeals = oldState.sort((a, b) => a.calories - b.calories);
      setMeals(ascendingMeals);
    } else if (selectedFilter === "Descending"){
      const descendingMeals = oldState.sort((a, b) => b.calories - a.calories);
      setMeals(descendingMeals);
    }
  }, [selectedFilter]);

  useEffect(() => {
    const localStorageMeals = JSON.parse(localStorage.getItem('meals'));
    setMeals(localStorageMeals);
  },[setMeals]);

  const addStepsHandler = () => {
    if (stepInput <= 0) {
      setOpenModal(true);
      return;
    }

    const newStep = {
      step: stepInput,
      id: Math.floor(Math.random() * 1000),
    };

    setSteps((prevSteps) => [...prevSteps, newStep]);
    setStepInput(0);
  };

  const deleteStepsHandler = (id) => {
    const oldSteps = [...steps];
    const newSteps = oldSteps.filter((step) => step.id !== id)

    setSteps(newSteps);
  }

  const deleteAllSteps = () => {
    setSteps([]);
  }

  const totalSteps = steps.map((step) => parseInt(step.step)).reduce((acc, value) => acc + value, 0)

  useEffect(() => {
    const oldState = [...steps];
    if (selectedFilter === "Ascending"){
      const ascendingSteps = oldState.sort((a, b) => a.step - b.step);
      setSteps(ascendingSteps);
    } if (selectedFilter === "Descending") {
      const descendingSteps = oldState.sort((a, b) => b.step - a.step);
      setSteps(descendingSteps);
    }
  }, [selectedFilter])

  return (
    <div className="App">
      <Nav />
     {openModal ? <Modal setOpenModal={setOpenModal} /> : ""}
     <Calories addMealsHandler={addMealsHandler} mealName={mealName} calories={calories} 
      setMealName={setMealName} setCalories={setCalories}
      />
     <MealsCounter total={total} />
     <DeleteMeals deleteAllMeals={deleteAllMeals} />
      <div className='meal-list-container'>
        <MealsFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <MealList meals={meals} deleteMealHandler={deleteMealHandler}/>
        <Steps addStepsHandler={addStepsHandler} stepInput={stepInput} setStepInput={setStepInput} />
        <StepsList steps={steps} deleteStepsHandler={deleteStepsHandler}/>
        <StepsCounter totalSteps={totalSteps} />
        <DeleteSteps deleteAllSteps={deleteAllSteps} />
        <StepsFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      </div>
    </div>
  );
}

export default App;
