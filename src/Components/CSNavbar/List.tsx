import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function AlignItemsList(props: any) {
    let { list = [], searchText="", showList } = props;

    if(!searchText) {
        return <></>;
    }
    
    return showList && <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', position: 'absolute', top: '55px', left: '174px', height: '300px', overflow: 'scroll' }}>{list?.products?.map((listElem: any) => {
        return <React.Fragment key={listElem.id}><ListItem alignItems="flex-start">
            <ListItemText key={listElem.id}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                            {listElem.title}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
            <hr />
        </React.Fragment>
    })}</List>
}
