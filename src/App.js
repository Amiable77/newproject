import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Register from './Pages/Register';
import Home from './Pages/Home';
import TemplateSelection from './Pages/TemplateSelection';
import PersonalInfoForm from './Pages/PersonalInfo';
import CVPreview from './Pages/CVPreview';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Home />} /> {/* Assuming 'Home' is the login page */}
        <Route path="/about" element={<About />} />
        <Route
          path="/templates"
          element={<TemplateSelection onTemplateSelect={handleTemplateSelect} />}
        />
        <Route
          path="/personal-info"
          element={<PersonalInfoForm onSubmit={handleFormSubmit} />}
        />
        <Route
          path="/preview"
          element={<CVPreview formData={formData} template={selectedTemplate} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
