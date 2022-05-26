import { CloseButton, Form } from 'react-bootstrap'

const Search = ( { searchData, setData } ) => {

    //? Türkçe karakterler ingilizce karakterlere çevrilir.
    String.prototype.turkishtoEnglish = function () {
        return this.replace('Ğ','g')
            .replace('Ü','u')
            .replace('Ş','s')
            .replace('I','i')
            .replace('İ','i')
            .replace('Ö','o')
            .replace('Ç','c')
            .replace('ğ','g')
            .replace('ü','u')
            .replace('ş','s')
            .replace('ı','i')
            .replace('ö','o')
            .replace('ç','c')
    };
    
    //? Genel arama yapan fonksiyon.    
    const generalSearch = (e) => {
        let newArr = [];
        searchData.forEach(element => {
            for (let i in element){

                //? string ifadeler karşılaştırıldı bitti.
                if (element[i].toString().toLowerCase().includes(e.toString().toLowerCase())) {
                
                    if (!newArr.includes(element)){
                        newArr.push(element)
                    }
                    setData(newArr)                                    
                }
                
                //? obje ve diziler iç içe
                if (typeof(element[i]) === 'object') {
                    for (let [key, value] of Object.entries(element)) {
    
                        //? dizidir ama değilse de bu bir obje
                        if (value instanceof Array) {
                            
                            //? dizi ama dizi içinde objelerde olabilir.
                            value.forEach((item) => {
                               
                                //! Sadece [1,2,3] gibi diziler "stirng veya number" döner.
                                //! Dizi içinde [{},{},{}] gibi ]objeler varsa "object" döner

                                //? Sadece dizi [1,2,3] ise dizi elemanları tek tek gezer.
                                if (typeof(item) === 'string' || typeof(item) === 'number') {
                                    
                                    if (item.toString().toLowerCase().includes(e.toString().toLowerCase())) {
                
                                        if (!newArr.includes(element)){
                                            newArr.push(element)
                                        }
                                        setData(newArr)                                    
                                    }
                                } else {
                                    //? Dizi içinde objeler [{},{},{}] ise tek tek obje elemanlarını gezer.
                                    // console.log("Dizi+Objeler",item)
                                    for (let i in item){
                                        //console.log("NE",typeof(item[i]))
                                        // if(item[i].toString().toLowerCase().includes(e.toString().toLowerCase())){
                
                                        //     if (!newArr.includes(item)){
                                        //         newArr.push(item)
                                        //     }
                                        //     setData(newArr)                                    
                                        // }
                                    }
                                }
                            })
                        } else {
                            //? sadece objeler
                            //console.log("SAdece OBJE",value)
                            // for(let i in value){
                            //     if(value[i].toString().toLowerCase().includes(e.toString().toLowerCase())){
        
                            //         if (!newArr.includes(value)){
                            //             newArr.push(value)
                            //         }
                            //         setData(newArr)                                    
                            //     }
                            // }
                        }
                    }
                }
            }
        });
    }

    //? Ülke ismine göre arama yapan fonksiyon.
    const searchCountries = (e) => {
        e = e.turkishtoEnglish();
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