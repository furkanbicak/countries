import React from 'react'

const ShowEntries = ( { countriesPerPage, setCountriesPerPage } ) => {
  return (
    <select 
        value       =   { countriesPerPage } 
        className   =   'form-select form-select-sm w-25'  
        onChange    =   { (e) => setCountriesPerPage(e.target.value) } 
    >
    
        <option value={10}>{10}</option>
        <option value={15}>{15}</option>
        <option value={20}>{20}</option>
        <option value={25}>{25}</option>

    </select>
  )
}

export default ShowEntries