import './App.css';
import contactsJSON from './data/contacts.json';
import React, {useState} from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import {Grid} from '@mui/material';
// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts]= useState(contactsJSON)
  const addNewContact = (newContact1) => {
      setContacts([...contacts, newContact1])
  }
  return (
    <div className="App">
      <Header />
        <Grid container spacing={2} sx={{padding: '10px 0', border: '1.5px dotted black', width: '80%', margin: '20px auto'}}>
            <Grid item xs={6}>
                    <ContactForm fnnewContact={addNewContact} sx={{margin: '0 auto'}}/>
            </Grid>
            <Grid item xs={6} sx={{margin: '0 auto'}}>
                    {contacts.map((contact,a) => {
                        return (<Contact key={a} data={contact}/>)
                    })}
            </Grid >
        </Grid>
    </div>
  );
};

export default App;
