

const SmoothieForm = ({name, rating, buttonText, handleSubmit, setName, setRating, formError}) => {
    
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name"
          value={name}
          onChange={(e) => { setName(e.target.value)}}
        />
        <label htmlFor="rating">Rating</label>
        <input 
          type="number" 
          id="rating"
          value={rating}
          onChange={(e) => { setRating(e.target.value)}}
        /> 
        <button>{buttonText}</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    )
}

export default SmoothieForm