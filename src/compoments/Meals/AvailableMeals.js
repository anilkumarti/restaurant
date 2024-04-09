import React from "react";
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: 1,
    name: "Chicken Biryani",
    description:
      "Aromatic rice dish cooked with succulent pieces of chicken, infused with traditional spices and herbs.",
    price: 12.99,
  },
  {
    id: 2,
    name: "Paneer Tikka Masala",
    description:
      "Tender cubes of paneer marinated in a rich, creamy sauce, served with naan bread or rice.",
    price: 10.49,
  },
  {
    id: 3,
    name: "Vegetable Pulao",
    description:
      "Fragrant basmati rice cooked with mixed vegetables and a blend of aromatic spices, a wholesome meal on its own.",
    price: 8.99,
  },
  {
    id: 4,
    name: "Butter Chicken",
    description:
      "Tender pieces of chicken simmered in a creamy tomato-based sauce, enriched with butter and spices.",
    price: 13.99,
  },
  {
    id: 5,
    name: "Dal Makhani",
    description:
      "Slow-cooked black lentils and kidney beans in a rich, creamy sauce, flavored with aromatic spices.",
    price: 9.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} name={meal.name}
   description={meal.description}  price={meal.price}> </MealItem>);
  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
 
    </section>
  );
};

export default AvailableMeals;
