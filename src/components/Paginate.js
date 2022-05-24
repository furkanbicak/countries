import React from 'react'
import { Pagination } from 'react-bootstrap'

const Paginate = ( { countriesPerPage, totalCountries, paginate, currentPage } ) => {
    
    //? Aktif pagination işareti için.
    let active = currentPage

    //? Toplam sayfa sayısını hesaplamak için.
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <div>
        <ul className = 'pagination'>
            <Pagination.First onClick = { () => paginate(pageNumbers[0]) }/>
            <Pagination.Prev onClick = { () => paginate((prev) => prev - 1) }/>
            {
                pageNumbers.map(number => (
                    
                    <Pagination.Item 
                        key         =   { number } 
                        active      =   { number === active } 
                        onClick     =   { () => paginate(number) }
                    >
                        {number}
                    </Pagination.Item>
                ))
            }
            <Pagination.Next onClick = { () => paginate((prev) => prev + 1) }/>
            <Pagination.Last onClick = { () => paginate(pageNumbers.length) }/>
        </ul>
    </div>
  )
}

export default Paginate