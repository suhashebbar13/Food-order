import React, {useEffect, useState} from "react";
import classes from "./Availablemeals.module.css";
import Card from "../Ui/Card";
import Mealitem from "./Mealitem/Mealitem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];



const Availablemeals = () => {
  const [meals,setmeals] = useState([]);
  const [isloading,setisloading] = useState(true);
  const [ierror, seterror] = useState('');
  useEffect(() =>{
    const fetchmeals = async() =>{
      const response = await fetch('https://trail-a082e-default-rtdb.firebaseio.com/meals.json');
      if(!response.ok){
        throw new Error('Somthing is wrong');
      }
      const data = await response.json();

      const listeddata= [];
      for(const key in data){
        listeddata.push({
          id:key,
          name:data[key].name,
          description:data[key].description,
          price:data[key].price
        })
      }
      setmeals(listeddata);
      setisloading(false);
    }
    fetchmeals().catch((error)=>{
      setisloading(false);
      seterror(error.message);
    });
  },[])

  if(isloading){
    return (
      <section style={{color:'white',textAlign:'center'}}>
      <p>Loading...</p>
      </section>
    );
  }

  if(ierror){
    return(
      <section style={{color:'red',textAlign:'center'}}>
      <p>Somthing is wrong please try again c:</p>
      </section>
    )
  }

  const meallist = meals.map((meal) => (
    <Mealitem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      title={meal.title}
      price={meal.price}
    />
  ));
  // {!isloading && <p style={{color:'white'}}>Loading...</p>}
  return (
    <section className={classes.meals}>
      <Card>
        {meallist}
      </Card>
    </section>
  );
};

export default Availablemeals;
