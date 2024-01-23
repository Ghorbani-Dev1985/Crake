import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { BaseURL } from '../Utils/Utils';
import toast from 'react-hot-toast';

function useFetch(url , endPoint ) {
  const [datas , setDatas] = useState([])
  useEffect(() => {
    axios.get(`${BaseURL}${url}${endPoint ? endPoint : ''}`)
    .then(response => {
      setDatas(response.data)
    })
    .catch(error => {
        console.log(error)
        toast.error("  خطا در اتصال به سرور ");
    })
    } , [url]);
  return {datas}
}

export default useFetch
