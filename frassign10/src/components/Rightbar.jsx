import { Box } from "@mui/system";
import { ImageList, ImageListItem, Typography } from "@mui/material";


export default function Rightbar() {

    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'flex',
        }}>

            <Box>
            <Typography gutterBottom variant="h5" component="div">
                    Lastest Photos
            </Typography>
            <ImageList>
                <ImageListItem>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeQu2f_5Y1z8Tu-xsA9X8oSD18xyingfMXA&usqp=CAU"
                        alt="photos"
                        loading="coffee"
                    >
                    </img>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeQu2f_5Y1z8Tu-xsA9X8oSD18xyingfMXA&usqp=CAU"
                        alt="photos"
                        loading="coffee"
                    >
                    </img>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeQu2f_5Y1z8Tu-xsA9X8oSD18xyingfMXA&usqp=CAU"
                        alt="photos"
                        loading="coffee"
                    >
                    </img>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeQu2f_5Y1z8Tu-xsA9X8oSD18xyingfMXA&usqp=CAU"
                        alt="photos"
                        loading="lazy"
                    >
                    </img>
                </ImageListItem>
                </ImageList>
                </Box>
        </Box>
    );

}