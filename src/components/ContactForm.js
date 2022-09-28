// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {TextField, Card, CardContent, CardActions, Button} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React, {useState} from 'react';
const ContactForm = ({fnnewContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState(
        {
            name:'',
            phone: '',
            email:'',
            photo: ''
        }
    );
    const inputHandler = (name, value) => {
        setNewContact({...newContact, [name]:value})
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        fnnewContact(newContact);
        setNewContact({
            name:'',
            phone: '',
            email:'',
            photo: '',

        });
    }
    
    return (
        <>
        <Card sx={{ width: '70%', borderRadius: '10px', boxShadow: '0 0 7px rgb(0,0,0,0.1)'}}>
            <CardContent>
                <form style={{paddingLeft: '2.5em'}} onSubmit={submitFormHandler}>    
                    <TextField id="filled-basic" label="Name" variant="filled" sx={{width: '100%', height: '20%'}}  value={newContact.name} onChange={ e => inputHandler('name', e.target.value)} name='name' required/><br/><br/>
                    <TextField id="filled-basic" label="Phone" variant="filled" sx={{width: '100%'}}  value={newContact.phone} onChange={e => inputHandler('phone', e.target.value)} name="phone" required/><br/><br/>
                    <TextField id="filled-basic" label="Email" variant="filled" sx={{width: '100%'}}  value={newContact.email} onChange={e => inputHandler('email', e.target.value)} name='email' required/><br/><br/>
                    <TextField id="filled-basic" label="Photo URL" variant="filled" sx={{width: '100%'}}  value={newContact.photo} onChange={e => inputHandler('photo', e.target.value)}  name='photo' required/><br/>
                    <CardActions >
                        <Button type='submit' variant="outlined" startIcon={<PersonAddIcon />} sx={{margin: '0.5em auto'}}>Add New</Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
        </>
    );
}


export default ContactForm;