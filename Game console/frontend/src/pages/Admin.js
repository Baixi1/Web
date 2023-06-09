import React, { useEffect } from 'react';

const Admin = () => {
  useEffect(() => {
    // ทำการตรวจสอบว่าผู้ใช้เป็น admin หรือไม่ โดยใช้ค่าที่เก็บไว้ใน localStorage
    const isAdmin = localStorage.getItem('isAdmin');

    if (!isAdmin) {
      // ถ้าไม่ใช่ admin ให้ redirect ไปยังหน้า login หรือทำอื่นๆ ตามที่คุณต้องการ
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      <h2>หน้า Admin</h2>
      {/* เพิ่มเนื้อหาหน้า Admin ตามที่คุณต้องการ */}
    </div>
  );
};

export default Admin;