import React from 'react';
import './App.css';

function Profile({ user, onLogout }) {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">ข้อมูลผู้ใช้</h2>
        <div className="profile-info">
          <div className="profile-field">
            <label>ชื่อผู้ใช้:</label>
            <span className="profile-value">{user.username}</span>
          </div>
          <div className="profile-field">
            <label>รหัสผ่าน:</label>
            <span className="profile-value">{'*'.repeat(user.password.length)}</span>
          </div>
          <div className="profile-field">
            <label>เวลาที่เข้าสู่ระบบ:</label>
            <span className="profile-value">{new Date().toLocaleString('th-TH')}</span>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          ออกจากระบบ
        </button>
      </div>
      <style>{`
        .profile-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 40vh;
          padding: 1rem;
        }
        .profile-card {
          background: #fff;
          padding: 2rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 450px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .profile-title {
          text-align: center;
          margin-bottom: 0.5rem;
          color: #222;
          font-size: 1.5rem;
        }
        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .profile-field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 0.8rem;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #007bff;
        }
        .profile-field label {
          font-weight: 600;
          color: #495057;
          font-size: 0.9rem;
        }
        .profile-value {
          font-size: 1.1rem;
          color: #212529;
          font-weight: 500;
        }
        .logout-btn {
          background: linear-gradient(90deg, #dc3545, #c82333);
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.7rem;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.2s;
          margin-top: 0.5rem;
        }
        .logout-btn:hover {
          background: linear-gradient(90deg, #c82333, #bd2130);
        }
        @media (max-width: 500px) {
          .profile-card {
            padding: 1rem 0.5rem;
            max-width: 95vw;
          }
          .profile-field {
            padding: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Profile;
