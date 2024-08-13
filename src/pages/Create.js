import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { supabase } from "../config/supabaseClient";

import SmoothieForm from "../components/form/SmoothieForm"

const Create = () => {
  const [name, setName] =  useState("");
  const [rating, setRating] =  useState("");
  const [formError, setFormError] =  useState(null);
  const navigate = useNavigate();
  async function handleSubmit (e) {
    e.preventDefault();
    if(!name || !rating){
      setFormError("All fields are required");
      return;
    }
    const {data, error} = await supabase
    .from("smoties").insert([{name, rating}])
    .select()

    if(error){
      setFormError(error.message)
      return
    }
    setFormError(null);
    navigate("/")
  }

  return (
    <div className="page create">
      <h2>Create</h2>
      <SmoothieForm 
        setName={setName} 
        setRating={setRating}
        formError={formError}
        handleSubmit={handleSubmit}
        buttonText= "Create Smoothie"
        name={name}
        rating={rating}
        >         
        </SmoothieForm>
    </div>
  )
}

export default Create