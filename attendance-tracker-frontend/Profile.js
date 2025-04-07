import React from 'react';

function Profile() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Profile</h1>

      <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <img 
            src="your_image_url_here" // Replace with your image URL
            alt="Profile" 
            style={{ width: '150px', height: '200px', objectFit: 'cover', border: '1px solid #ddd' }} 
          />
        </div>

        <div>
          <h2>AKULA SHREYAS KMIT</h2>
          <p>238D1A0583</p>

          <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Year</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>2</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Branch</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>CS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Section</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>PS24</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Sanjaya ID</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>2422930</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;