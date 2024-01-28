import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Contacts from './components/contact/Contacts'
import { Navigate, Route, Routes, } from 'react-router-dom';
import Addcontact from '../src/components/contact/Addcontact';
import Editcontact from '../src/components/contact/Editcontact';
import Contact from './components/contact/Contact';

export default function App() {
  const [getcontacts, setcontacts] = useState([])
  const [loading, setloading] = useState(false)
  return (
    <div>
      <Navbar />
      <Navigate to={"/contacts"} />
      <Routes>
        <Route path="/contacts" element={<Contacts contacts={getcontacts} loading={loading} />} />
        <Route path='/contacts/add' element={<Addcontact />} />
        <Route path='/contacts/:id' element={<Contact />} />
        <Route path='/contacts/edit/:id' element={<Editcontact />} />

      </Routes>
    </div>
  )
}