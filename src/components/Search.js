import { CloseButton, Form } from 'react-bootstrap'

const Search = ( { searchData, setData } ) => {

    function generalSearch(e) {
        e = e.toLocaleLowerCase('tr');
        let newArr = [];
        searchData.forEach(element => {
            for(let i in element){
                //console.log(typeof(element[i]), element[i])
                //? string ifadeler karşılaştırıldı bitti.
                if(element[i].toString().toLowerCase().includes(e.toString().toLowerCase())){
                
                    if (!newArr.includes(element)){
                        newArr.push(element)
                    }
                    setData(newArr)                                    
                }
                
                //? obje ve diziler iç içe
                if(typeof(element[i]) === 'object') {
                    //console.log("obje", element[i])
                    for(let [key, value] of Object.entries(element)){
                        // console.log("value",value)

                        //? dizidir ama değilse de bu bir obje
                        if(value instanceof Array) {
                            //console.log("Dizi", value)
                            //? dizi ama dizi içinde objelerde olabilir.
                            value.forEach((item) => {
                                //console.log("typeOf", typeof(item), item)
                                //! Sadece [1,2,3] gibi diziler "stirng veya number" döner.
                                //! Dizi içinde [{},{},{}] gibi ]objeler varsa "object" döner

                                //? Sadece dizi [1,2,3] ise dizi elemanları tek tek gezer.
                                if(typeof(item) === 'string' || typeof(item) === 'number'){
                                    //console.log("Dizi", item)
                                    if(item.toString().toLowerCase().includes(e.toString().toLowerCase())){
                
                                        if (!newArr.includes(element)){
                                            newArr.push(element)
                                        }
                                        setData(newArr)                                    
                                    }
                                } else{
                                    //? Dizi içinde objeler [{},{},{}] ise tek tek obje elemanlarını gezer.
                                    //console.log("Dizi+Objeler",item)
                                    
                                    for(let i in item){
                                        //console.log("NE",typeof(item[i]))
                                        if(item[i].toString().toLowerCase().includes(e.toString().toLowerCase())){
                
                                            if (!newArr.includes(element)){
                                                newArr.push(element)
                                            }
                                            setData(newArr)                                    
                                        }
                                    }
                                }
                            })
                           
                        } else {
                            //? sadece objeler
                            // console.log("SAdece OBJE",value)
                            for(let i in value){
                                if(value[i].toString().toLowerCase().includes(e.toString().toLowerCase())){
        
                                    if (!newArr.includes(element)){
                                        newArr.push(element)
                                    }
                                    setData(newArr)                                    
                                }
                            }
                        }
                    }
                }
            }
        });
    }


    //? Ülke ismine göre arama yapan fonksiyon.
    const searchCountries = (e) => {
        e = e.toLocaleLowerCase('tr');
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
    
  return (
      
    <div className = 'shadow-lg p-3 mb-5 bg-white rounded m-4'>  
        <div className='d-flex justify-content-end'>
            <CloseButton />
        </div>
        <div className = 'd-flex justify-content-center row mb-4' style={{gap:'100px'}}>
            <div className = 'col-md-5'>
                <Form.Label className = 'text-primary'> Countries </Form.Label>
                <Form.Control 
                    size        =   'lg'
                    type        =   'text' 
                    placeholder =   'Countries Search...'
                    onChange    =   { (e) => searchCountries(e.target.value) } 
                />
            </div>

            <div className = 'col-md-5'>
                <Form.Label className='text-primary'> General Search </Form.Label>
                <Form.Control 
                    size        =   'lg'
                    type        =   'text' 
                    placeholder =   'General Search...'
                    onChange    =   { (e) => generalSearch(e.target.value) } 
                />
            </div>
        </div>
    </div>
  )
}

export default Search