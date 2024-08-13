import { useEffect, useState } from "react";

import {useParams, useNavigate} from "react-router-dom"
import { supabase } from "../config/supabaseClient";

//Components 
import SmoothieForm from "../components/form/SmoothieForm"

const Update = () => {
  const {id} = useParams();
  const [name, setName] =  useState("");
  const [rating, setRating] =  useState("");
  const [formError, setFormError] =  useState(null);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const getSmoothie = async() => {
      const {data, error} =  await supabase.from("smoties")
                                           .select()
                                           .eq('id', id)
                                           .single()
      
      if(error){
        setFormError(error.message)
        return;
      }
      
      setName(data.name)
      setRating(data.rating)
    }
    getSmoothie()
  }, [id])

  async function handleSubmit (e) {
    e.preventDefault();
    if(!name || !rating){
      setFormError("All fields are required");
      return;
    }
    const {data, error} = await supabase
    .from("smoties")
    .update({name, rating})
    .eq("id", id)
    .select()

    if(error){
      setFormError(error.message)
      return
    }
    setFormError(null);
    navigate("/")
  }
  return (
    <div className="page update">
      <h2>Update {id}</h2>
      <SmoothieForm 
        name={name}
        rating={rating}
        setName={setName} 
        setRating={setRating}
        formError={formError}
        handleSubmit={handleSubmit}
        buttonText= "Update Smoothie"
        >          
        </SmoothieForm>
    </div>
  )
}

export default Update