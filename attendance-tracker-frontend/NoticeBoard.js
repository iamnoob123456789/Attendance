import React from 'react';

function NoticeBoard() {
  return (
    <div style={{ 
      fontFamily: 'serif', 
      backgroundColor: '#f8f8f8', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px',
      border: '1px solid #ddd', // Optional: Add a subtle border
    }}>
      <h1 style={{ 
        fontSize: '2em', 
        fontWeight: 'bold', 
        marginBottom: '10px', 
        color: '#333' 
      }}>
        Not Found
      </h1>
      <p style={{ 
        fontSize: '1em', 
        color: '#555', 
        textAlign: 'center', 
        maxWidth: '600px', 
        lineHeight: '1.6' 
      }}>
        The requested URL /catalog/specification/home.php was not found on this server.
      </p>
    </div>
  );
}

export default NoticeBoard;