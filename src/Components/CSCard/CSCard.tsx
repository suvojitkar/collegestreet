import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CSCard = (props: any) => {
    const { title='', description='', images='' } = props.productData;
    return (
        <Card sx={{ maxWidth: 345 }} onClick={props.onClick}>
            <CardMedia
                component="img"
                sx={{ height: 300 }}
                image={images[0]}
                title={title}
                loading="lazy"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {props.children}
            </CardActions>
        </Card>
    );
}

export default CSCard;