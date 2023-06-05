import { Link } from 'react-router-dom';
import { Button, Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Item = ({ id, name, price, img }) => {
    return (
        <Grid item xs={12} sm={6} md={3}    >


        <Card
            sx={{ maxWidth: '18rem' }}>
            <CardActionArea
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: 'black'
                }}>
                <CardMedia
                    component="img"
                    image={`../${img}`}
                    alt={name}
                    height={350}
                />
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} >
                    <Typography
                        variant="body2"
                        component='h3'
                        color="text.secondary"
                        textAlign='center'
                    >
                        {name}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="p"
                        textAlign='center'
                    > ${price}
                    </Typography>
                    <Button 
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '30px',
                            width: 'fit-content'
                        }}
                        variant="contained"
                        as={Link} to={`/item/${id}`}
                    >
                        <LocalMallOutlinedIcon
                            fontSize='medium'
                        />  
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
    )
}

export default Item

