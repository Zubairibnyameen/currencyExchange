import { useEffect, useState } from "react";

function useCurrencyInfo(currncy){

    const [data, setData] = useState({})

    useEffect(() => {
      fetch(`https://open.er-api.com/v6/latest/${currncy}`)
      .then((res)=>res.json())
      .then((data)=>{
        setData(data.rates)
      })
    }, [currncy])
    
    return data;

}

export default useCurrencyInfo;