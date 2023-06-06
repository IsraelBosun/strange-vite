// import { useEffect, useState } from "react"

// const useFetch = (url) => {
//   const [data, setData] = useState(null)
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true)
      
//       try {
//         const res = await fetch(url)
//         const json = await res.json()

//         setData(json);
//         setLoading(false)
//       } catch (error) {
//         setError(error)
//         setLoading(false)
//       }
//     }

//     fetchData();
//   }, [url])
//   // console.log(data)

//   return { loading, error, data }
// }

// export default useFetch











// import { useState, useEffect } from "react"

// const useMetch = () => {
//   const [data, setdata] = useState(null)
//   const [error, seterror] = useState(null);
//   const [loading, setloading] = useState(true);

//   useEffect(() => {
//     const fetchInfo = async() => {
//       setloading(true)

//       try {
//         const res = await fetch(url)
//         const json = await res.json()

//         setdata(json);
//         setloading(false)
//       } catch (error) {
//         seterror(error)
//         setloading(false)
//       }
//     }
//     fetchInfo()
//   }, [url])
//   return { loading, error, data}
// }

// export default useMetch;