import React from 'react';

function CVPreview({ formData, template }) {
  return (
    <div className={`cv-preview ${template}`}>
      <h2>CV Preview</h2>
      <div className="cv-section">
        <h3>Personal Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
      </div>
      {/* Add more sections for other parts of the CV as needed */}
    </div>
  );
}

export default CVPreview;
