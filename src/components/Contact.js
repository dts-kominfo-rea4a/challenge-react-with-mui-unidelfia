// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {List, ListItem, ListItemText, ListItemAvatar, Typography, Divider, Avatar} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#c8e6c9', borderRadius: '10px', boxShadow: '0 0 7px rgb(0,0,0,0.1)', margin: '5px 0' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={data.name} src={data.photo} />
                </ListItemAvatar>
                <ListItemText
                    primary={data.name}
                    secondary={
                    <React.Fragment>
                     <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {data.phone}
                     </Typography>
                     <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                     >
                        {data.email}
                     </Typography>
                     </React.Fragment>
                    }
                    />
                    </ListItem>
                    <Divider />
                </List></>);
};

export default Contact;
