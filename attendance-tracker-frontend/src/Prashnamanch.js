import React from 'react';

function Prashnamanch() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Interviews</h1>

      <div style={{ 
        border: '1px solid #ddd', 
        borderRadius: '5px', 
        padding: '20px', 
        marginTop: '20px', 
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px' 
      }}>
        
        <div style={{ marginBottom: '10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v10m0 8v2m-7-7h14" />
          </svg>
        </div>
        
        <p style={{ textAlign: 'center' }}>
          <strong>OOPS!</strong> It seems that there are no interviews found.
        </p>

      </div>
    </div>
  );
}

export default Prashnamanch;