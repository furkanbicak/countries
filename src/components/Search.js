import React from 'react'
import { CloseButton, Form } from 'react-bootstrap'

const Search = ( { searchData, setData } ) => {

    //? Ülke ismine göre arama yapan fonksiyon.
    const searchCountries = (e) => {
        if(e === ''){
            return e
        } else {
            const filterResult = searchData.filter(item => {
                return(
                    item.name?.toLowerCase().includes(e.toLowerCase())
                )
            })
            setData(filterResult)
        }
    }

    //? Ülke bölgesine göre arama yapan fonksiyon.
    const searchRegion = (e) => {
        if(e === ''){
            return e
        } else {
            const filterResult = searchData.filter(item => {
                return(
                    item.region?.toLowerCase().includes(e.toLowerCase())
                )
            })
            setData(filterResult)
        }
    }
    
    //? Ülke başkentine göre arama yapan fonksiyon.
    const searchCapital = (e) => {
        if(e === ''){
            return e
        } else {
            const filterResult = searchData.filter(item => {
                return(
                    item.capital?.toLowerCase().includes(e.toLowerCase())
                )
            })
            setData(filterResult)
        }
    }

     //? Ülke başkentine göre arama yapan fonksiyon.
     const searchAlphaCode = (e) => {
        if(e === ''){
            return e
        } else {
            const filterResult = searchData.filter(item => {
                return(
                    item.alpha3Code?.toLowerCase().includes(e.toLowerCase())
                )
            })
            setData(filterResult)
        }
    }

  return (
      
    <div className = 'shadow-lg p-3 mb-5 bg-white rounded m-4'>  
        <div className='d-flex justify-content-end'>
            <CloseButton />
        </div>
        <div className = 'd-flex justify-content-center row mb-4' style={{gap:'100px'}}>
            <div className = 'col-md-5'>
                <Form.Label className = 'text-primary'> Countries </Form.Label>
                <Form.Control 
                    type        =   'text' 
                    placeholder =   'Countries Search...'
                    onChange    =   { (e) => searchCountries(e.target.value) } 
                />
            </div>

            <div className = 'col-md-5'>
                <Form.Label className='text-primary'>Capital</Form.Label>
                <Form.Control 
                    type        =   'text' 
                    placeholder =   'Capital Search...'
                    onChange    =   { (e) => searchCapital(e.target.value) } 
                />
            </div>
        </div>

        <div className = 'd-flex justify-content-center row mb-4 mt-2' style={{gap:'100px'}}>
            <div className = 'col-md-5'>
                <Form.Label className='text-primary'>Region</Form.Label>
                <Form.Control 
                    type        =   'text' 
                    placeholder =   'Region Search...'
                    onChange    =   { (e) => searchRegion(e.target.value) } 
                />
            </div>

            <div className = 'col-md-5'>
                <Form.Label className='text-primary'>Alpha3 Code</Form.Label>
                <Form.Control  
                    type        =   'text' 
                    placeholder =   'Alpha3 Code Search...'
                    onChange    =   { (e) => searchAlphaCode(e.target.value) } 
                />
            </div>
        </div>
    </div>
  )
}

export default Search