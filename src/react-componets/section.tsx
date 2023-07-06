import React from 'react';

export const Section = ({ title, content }) => {
  return (
    <section>
      <h3>{title}</h3>
      {content.map((item, index) => (
        <div key={index}>
          {item.type === 'paragraph' && <p>{item.text}</p>}
          {item.type === 'code' && <pre>{item.code}</pre>}
        </div>
      ))}
    </section>
  );
};


