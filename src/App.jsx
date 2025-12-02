import { useEffect, useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [result, setResult] = useState(0)
  // const [options, setOptions] = useState([])
  
  const currencyInfo = useCurrencyInfo(from)
  const options =  Object.keys(currencyInfo);

  const buttonHandler=()=>{
          // fetch(`https://open.er-api.com/v6/latest/${from}`)
          // .then((res)=> res.json())
          // .then((data)=>{
          //   const rates = data.rates[to]
          //   const Converted = amount*rates
          //   setResult(Converted)
            // console.log(options)
          
          const rates = currencyInfo[to]
          const Converted = Number(amount) * rates
          setResult(Converted)

          
        }

// useEffect(() => {
//   fetch(`https://open.er-api.com/v6/latest/${from}`)
//   .then((res)=> res.json())
//   .then(data=>{
//     const keys = Object.keys(data.rates)
//     setOptions(keys)
//   })
// }, [])
// console.log(options)

  const swap = ()=>{
    const temp = from;
    setFrom(to)
    setTo(temp)
  }

  return (


      <div className="flex h-screen w-full items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/8844580/pexels-photo-8844580.jpeg')]">

          <div className="bg-gray-400 p-5 m-3 border-4 rounded-2xl ">
            <h1 className="pb-6 font-bold font-serif">Currency Converter</h1>
            <div>
              <input 
              className="bg-amber-100 rounded-2xl p-2 m-2"
              type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Type here"/>
              <div className="flex justify-around bg-rose-300">
              <select value={from} onChange={(e)=> setFrom(e.target.value)}>
                {options.map((currency)=>(
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
              <h3>to</h3>
              <select value={to} onChange={(e)=> setTo(e.target.value)}>
                {options.map((currency)=>(
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
              </div>
      <div>

              <button
              className="bg-blue-300 p-3 rounded-3xl m-3 cursor-pointer"
              onClick={buttonHandler}>Convert</button>
              <button onClick={swap}
              className="px-3 py-1 bg-gray-200 rounded-full"
              >↔</button>
      </div>
      <label>Converted Value: </label>
      <input 
      className="bg-amber-100 rounded-2xl p-2"
      type="text" value={result} readOnly/>

            </div>
          </div>

      </div>

  )
}

export default App
