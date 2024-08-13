import { supabase } from "../config/supabaseClient";
import { useEffect, useState } from "react";

//Componets
import SmoothieCard from "../components/smoothie/SmoothieCard";

const Home = () => {
  const [smoothies, setSmoothies] = useState(null);
  useEffect(() => {
    const getSmoothies = async () => {
      const { data, error } = await supabase.from("smoties").select();
      if (error) {
        return;
      }
      setSmoothies(data);
    }
    getSmoothies();

  }, [])

  const handleDelete = (id) => {
    
      setSmoothies(prevState => {
        return prevState.filter(sm => sm.id !== id)
      })
  }
  return (
    <div className="page home">
      <h2>Home</h2>
      <div className="smoothies">
        {smoothies && smoothies.map((smoothie) => {
          return (<SmoothieCard handleDelete={handleDelete}key={smoothie.id} smoothie = {smoothie}/>)
        })}
      </div>
    </div>
  )
}

export default Home