import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])


  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then((res)=>res.json())
    .then((data)=>{
      setPlants(data)
      console.log(data)
    })
  },[])


  function onAddPlant(newPlant) {
    const newArray = [...plants,newPlant]
    setPlants(newArray)
  }

  const [searchTerm, setSearchTerm] = useState('')

  function onSearch(e){
    setSearchTerm(e.target.value)
  }
  
  const searchedPlants = plants.filter((plant)=>plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search onSearch={onSearch} searchTerm={searchTerm} />
      <PlantList plants={searchedPlants} />
    </main>
  );
}

export default PlantPage;
