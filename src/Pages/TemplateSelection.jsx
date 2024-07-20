import React from 'react';


function TemplateSelection({ onTemplateSelect }) {
  const templates = [
    { name: 'Template1', img: 'template1.png' },
    { name: 'Template2', img: 'template2.png' },
  
  ];

  return (
    <div className="template-selection">
      <h2>Select a Template</h2>
      <div className="template-grid">
        {templates.map((template, index) => (
          <div key={index} className="template-card">
            <img src={`path/to/${template.img}`} alt={template.name} />
            <button onClick={() => onTemplateSelect(template.name.toLowerCase())}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelection;
