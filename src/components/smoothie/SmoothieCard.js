import {Link} from "react-router-dom"
import {supabase} from "../../config/supabaseClient"
export default function SmoothieCard({ smoothie, handleDelete }) {

    const deleteSmoothie = async() => {
        const {data, error} = await supabase.from("smoties").delete().eq("id", smoothie.id).select();
        if(error){
            console.log(">>>error>>>", error);
        }
        handleDelete(smoothie.id)
    }
    return (
        <div className="smoothie-card">
            <h1>{smoothie.name}</h1>
            <div className="rating">{smoothie.rating}</div>
            <div className="buttons">
                <Link to={`/${smoothie.id}`}>Update Smoothie</Link>
                <button onClick={deleteSmoothie}>Delete Smoothie</button>
            </div>
        </div>
    )

}