import { useState, useEffect } from 'react';
import {CardGrid, Header, Footer, SelectGroup} from '../../Components'
import dataJson from '../../Assets/data.json';


export const Portfolio = () => {
    const [currentData, setCurrentData] = useState([]);
    const [keyData, setKeyData] = useState(Object.keys(dataJson)[0]);

    const handle_key = (key:string) => {
        localStorage.setItem("current_selection", key);
        setKeyData(key);
    }

    useEffect(() => {
        const current_key = localStorage.getItem("current_selection");
        if (current_key){
            setKeyData(current_key!);
        }
      }, [])

    useEffect(() => {
        setCurrentData((dataJson as any)[keyData]);
    
    }, [keyData])
    
    return (
        <>
            <Header></Header>
            <SelectGroup key_list={Object.keys(dataJson)} handle_click={handle_key} ></SelectGroup>
            {currentData.length > 0 ? <CardGrid data={currentData}></CardGrid> : ""}
            <Footer></Footer>
        </>
    )
}
