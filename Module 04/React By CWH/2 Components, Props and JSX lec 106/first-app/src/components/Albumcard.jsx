import React from 'react';
import './Albumcard.css';
// Card component receives data via props
const Albumcard = (props) => {
  return (
    // Main container with a dark background style
    <div className="album-card-container" style={{ 
        display: 'flex', 
        backgroundColor: '#181818', 
        color: 'white', 
        padding: '16px', 
        borderRadius: '8px',
        maxWidth: '600px',
        alignItems: 'center' 
    }}>
      
      {/* 1. Track Info and Controls Section */}
      <div style={{ flexGrow: 1, paddingRight: '16px' }}>
        {/* Dynamic Content from Props */}
        <h1 style={{ fontSize: '1.5em', margin: '0 0 4px 0' }}>{props.albumTitle}</h1>
        <p style={{ fontSize: '1em', color: '#b3b3b3', margin: '0 0 16px 0' }}>{props.artistName}</p>
        
        {/* Basic Playback Controls (Icons/Text) */}
        <div className="controls" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {/* Note: These would typically be SVG icons or actual buttons */}
          <span style={{ fontSize: '1.5em', cursor: 'pointer' }}>⏮️</span>
          <span style={{ fontSize: '2em', cursor: 'pointer', color: '#1db954' }}>▶️</span>
          <span style={{ fontSize: '1.5em', cursor: 'pointer' }}>⏭️</span>
        </div>
      </div>

      {/* 2. Album Cover Art Section */}
      {/* The URL for the image is passed via props */}
      <img 
        src={props.coverUrl} 
        alt={`Cover for ${props.albumTitle}`} 
        style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
      />
      
    </div>
  );
};

export default Albumcard;