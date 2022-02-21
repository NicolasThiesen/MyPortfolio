import {Card as CardItem, CardContent,CardMedia, Typography, CardActionArea, Button} from '@material-ui/core';
import { i18n } from '../../translate/i18n';

export const Card = ({handleClick, cardData, language}: {handleClick:any, cardData:any, language:string}) => {
    
    return (
    <CardItem sx={{ maxWidth: 400, background: "#F5F5F5" }}>
        <CardActionArea  >
            <CardMedia
            onClick={() => handleClick(cardData)}
            component="img"
            height="200"
            image={cardData["url_photo"]}
            alt={cardData["name"][language]}
            />
        <CardContent onClick={() => handleClick(cardData)}>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize: "23px"}}>
            {cardData["name"][language]}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            {cardData["short_description"][language]}
          </Typography>
        </CardContent>
        {"url_site" in cardData ? <Button sx={{mb:"20px"}} variant="contained" href={cardData["url_site"]}>{i18n.t("portfolio.site_button")}</Button> : ""}
      </CardActionArea>
    </CardItem>
    )
}
