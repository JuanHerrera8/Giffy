import React, {useState} from "react";

 function SearchForm ({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        onSubmit({keyword})
      }

      const handleChange = evt => {
        setKeyword(evt.target.value)
      }

    return (
        <form onSubmit={handleSubmit}>
        <input placeholder="Busca tu gif aquí" onChange={handleChange} type="text" value={keyword} />
        <button>Gifear</button>
      </form>
    )
}

export default React.memo(SearchForm)