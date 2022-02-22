import {useState, useRef} from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import {TextField, Snackbar, Alert, InputAdornment, Box} from '@material-ui/core'
import {Email, AccountCircle} from "@material-ui/icons";
import {i18n} from '../../translate/i18n';
import ReCAPTCHA from "react-google-recaptcha";

export const Form = () => {
    type AlertColor = 'success' | 'info' | 'warning' | 'error';
    const captcha = useRef<any>(null);

    const [captchaValid, setCaptchaValid] = useState(false);
    // const [userValid, setUserValid] = useState(null);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severety, setSeverety] = useState<AlertColor>('success')!;

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        
        setOpen(false);
      };

    const handleSubmit = (e:any) => {
        e.preventDefault(); // Prevents default refresh by the browser
        if(captchaValid){
            emailjs.sendForm( process.env.REACT_APP_SERVICE_ID || "", process.env.REACT_APP_TEMPLATE_ID || "", e.target, process.env.REACT_APP_USER_ID || "")
            .then((result) => {
                setSeverety('success');
                
                setMessage(i18n.t("contact.alert.success"));
                setOpen(true);
            },
            (error) => {
                setSeverety('error');
                setMessage(i18n.t("contact.alert.error"));
                setOpen(true);
            });
            e.target.reset();
        }else{
            setCaptchaValid(false);
            setSeverety('warning');
            setMessage(i18n.t("contact.alert.captcha_help"));
            setOpen(true);
        }
        
    };
 
    const handleCaptcha = () =>{
        if(captcha.current!.getValue()){
            setCaptchaValid(true);
        }else{
            setCaptchaValid(false);
            setSeverety('error');
            setMessage(i18n.t("contact.alert.captcha_error"));
            setOpen(true);
        }
        
    }

    return (
        <div className="form">
            <h2>{i18n.t("contact.title")}</h2>
            <form  onSubmit={handleSubmit}>
                <TextField sx={{my: 3}} label={i18n.t("contact.name")} variant="outlined" placeholder={i18n.t("contact.p_name")} required type="text" name="user_name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle></AccountCircle>
                            </InputAdornment>
                        )
                    }}
                >
                </TextField>
                <TextField sx={{mb: 3}} label={i18n.t("contact.email")} placeholder={i18n.t("contact.p_email")} variant="outlined" required type="email" name="user_email"InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email></Email>
                            </InputAdornment>
                        )
                    }}
                >
                </TextField>
                <TextField sx={{mb:3}} multiline label={i18n.t("contact.message")} placeholder={i18n.t("contact.p_message")} minRows={3} maxRows={5} required type="text" name="message">
                </TextField>
                <Box sx={{mx: 'auto'}}>
                    <ReCAPTCHA
                        ref={captcha}
                        sitekey={process.env.REACT_APP_RECAPTCHA_KEY || ""}
                        hl={i18n.language === "eng" ? "en" : "pt"}
                        onChange={handleCaptcha}
                    />
                </Box>
                
                <button type="submit">{i18n.t("contact.send")}</button>
            </form>
            <Snackbar open={open} anchorOrigin={{"vertical":"bottom", "horizontal":"right"}} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severety} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}
