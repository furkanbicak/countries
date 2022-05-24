import { useEffect, useState } from 'react';
import { getCountries } from './services/getCountries';
import Search from './components/Search';
import Loading from './components/Loading';
import TableCountries from './components/TableCountries';
import Paginate from './components/Paginate';
import NavbarContent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    const [data, setData] = useState();                                 //? Api den gelen verinin tutulduğu state.
    const [loading, setloading] = useState(false);                      //? Sayfa Loading işlemi için.

    const [searchData, setSearchData] = useState();                     //? Search İşleminde kullanılan search edilen data.              

    const [currentPage, setCurrentPage] = useState(1);                  //? Geçerli sayfanın tutulduğu state.
    const [countriesPerPage, setCountriesPerPage] = useState(25);       //? Sayfa başı düşen data.

    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountry = data?.slice(firstCountryIndex, lastCountryIndex)


    useEffect(() => {
        getData()
    },[]);


    //? Apiye istek atılıp dönen verinin data satate kaydedildiği fonksiyon.
    const getData = async() => {
        setloading(true)
        const dataCountries = await getCountries()
        setData(dataCountries)
        setSearchData(dataCountries)
        setloading(false)
    }


    //? Paginateion işlemi için sayfanın bulunduğu yeri set eden fonksiyon.
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <>
            <NavbarContent />
            
            <Search 
                setData     =   { setData } 
                searchData  =   { searchData }    
            />

            <div className='mt-5 shadow p-3 mb-5 bg-white rounded m-4'>
                {
                    loading && loading ? <Loading/> :
                    <>
                        <TableCountries 
                            currentCountry      =   { currentCountry } 
                            countriesPerPage    =   { countriesPerPage }
                            setCountriesPerPage =   { setCountriesPerPage } 
                        />
                        <Paginate 
                            paginate            =   { paginate } 
                            currentPage         =   { currentPage }
                            totalCountries      =   { data?.length } 
                            countriesPerPage    =   { countriesPerPage } 
                        />
                    </>
                }

            </div>
    
        </>
    );
}

export default App;
