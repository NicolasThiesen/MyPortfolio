import { Modal, Box, Typography, CardMedia } from '@material-ui/core';
import { useState } from 'react';
import { Close } from '@material-ui/icons'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    // maxHeight: "500px",
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const ModalView = ({open, handleOpen, language, data}: {open:boolean, handleOpen:any, language:string,data:any}) => {
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => handleOpen(false);
    const [openChield, setOpenChield] = useState(false);
    return (
    <Modal
    sx={{overflow: "auto"}}
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <div style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                <Close style={{cursor: "pointer"}} onClick={handleClose}></Close>
            </div>
            <Typography id="modal-modal-title" variant="h4" component="h2" sx={{mb: 2, textAlign: "center"}}>
                {data["name"][language]}
            </Typography>
            <CardMedia
            onClick={()=> {setOpenChield(true);}}
            component="img"
            sx={{width:"80%", marginLeft: "auto", marginRight: "auto", cursor: "zoom-in", maxWidth: "600px"}}
            image={data["url_photo"]}
            alt={data["name"][language]}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {data["description"][language]}
            </Typography>
            <Modal
                sx={{overflow: "auto"}}
                open={openChield}
                onClose={()=> {setOpenChield(false);}}
            ><Box>
                <CardMedia
                onClick={()=> {setOpenChield(false);}}
                component="img"
                sx={{width:"90%", marginLeft: "auto", marginRight: "auto", cursor: "zoom-out", position: "absolute", margin: "auto", top: "0", left: "0", right: "0", bottom: "0" }}
                image={data["url_photo"]}
                alt={data["name"][language]}
                />
            </Box>

            </Modal>
        </Box>
    </Modal>) ;
};

