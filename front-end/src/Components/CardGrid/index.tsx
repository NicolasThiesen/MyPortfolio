import { Container, Grid } from '@material-ui/core';
import {Card} from '../Card';
import { ModalView } from '..';
import { useState, useEffect } from 'react';
const I18N_STORAGE_KEY = "i18nextLng"


export const CardGrid = ({data}:{data:Array<object>}) => {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("");
    const [dataSelected, setDataSelected] = useState(data[0]);
    useEffect(() => {
        const lang =  localStorage.getItem(I18N_STORAGE_KEY)!
        setLanguage(lang)
    }, [])
    
    const handleOpen = (dataItem:any) => {
        setDataSelected(dataItem);
        setOpen(!open);
    }    

    return (
        <Container maxWidth="lg" sx={{ flexGrow: 1, marginTop: 10, marginBottom: 10 }}>
            <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {  data.map(card => (
                    <Grid item alignItems="center" justifyContent="center" sx={{ textAlign: "center"}} xs={2} sm={4} md={4} >
                        <Card language={language} handleClick={handleOpen} cardData={card} ></Card>
                    </Grid>))
                }
            </Grid>
            <ModalView language={language} open={open} handleOpen={setOpen} data={dataSelected}></ModalView>
        </Container>
    )
}
