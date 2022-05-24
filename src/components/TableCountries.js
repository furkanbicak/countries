import { Table } from 'react-bootstrap'
import ShowEntries from './ShowEntries'

const TableCountries = ( { currentCountry, setCountriesPerPage, countriesPerPage } ) => {
  return (
    <div>
       <div className = 'row ms-2'>
         <ShowEntries 
            countriesPerPage    =   { countriesPerPage }
            setCountriesPerPage =   { setCountriesPerPage } 
        /> 
       </div>

        <Table hover>
            <thead>
                <tr>
                    <th className = 'w-20'>ID</th>
                    <th className = 'w-25'>Countries Name</th>
                    <th className = 'w-25'>Capital</th>
                    <th className = 'w-25'>Region</th>
                    <th className = 'w-25'>Alpha3 Code</th>
                    <th className = 'w-25'>Flag</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentCountry && currentCountry?.map((item,key) => {
                        return(
                            <tr key={key}>
                                <td> {key+1} </td>
                                <td> {item.name} </td>
                                <td> {item.capital} </td>
                                <td> {item.region} </td>
                                <td> {item.alpha3Code} </td>
                                <td>
                                    <img 
                                        src={item.flags.png} 
                                        className='ml-2' 
                                        style={{width:'80px'}}
                                        />
                                </td>          
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </div>
  )
}

export default TableCountries