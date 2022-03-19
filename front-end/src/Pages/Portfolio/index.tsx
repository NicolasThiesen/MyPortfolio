import { useState, useEffect } from 'react';
import {CardGrid, Header, Footer, SelectGroup} from '../../Components'
import api from '../../services/api';

export const Portfolio = () => {
    const [currentData, setCurrentData] = useState([]);
    const [keyData, setKeyData] = useState("architecture");
    const [data, setData] = useState({});

    const handle_key = (key:string) => {
        localStorage.setItem("current_selection", key);
        setKeyData(key);
    }

    useEffect(() => {
        const current_key = localStorage.getItem("current_selection");
        if (current_key){
            setKeyData(current_key!);
        }
        async function fetchData() {
            const { data } = await api.get('/data.json')
            await setData(data)
            setCurrentData((data as any)[keyData]);
        }
          fetchData()
      }, [])

    useEffect(() => {
        if (Object.keys(data).length>0){
            setCurrentData((data as any)[keyData]);
        }
    
    }, [keyData])
    
    return (
        <>
            <Header></Header>
            <SelectGroup key_list={Object.keys(data)} handle_click={handle_key} ></SelectGroup>
            {currentData.length > 0 ? <CardGrid data={currentData}></CardGrid> : ""}
            <Footer></Footer>
        </>
    )
}
