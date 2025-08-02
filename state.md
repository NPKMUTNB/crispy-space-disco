# State Management for Login System

## 📖 บทนำ

State Management คือการจัดการสถานะ (state) ของแอปพลิเคชัน ในระบบ Login นี้เราใช้ React Hooks (useState) เพื่อจัดการสถานะการเข้าสู่ระบบ การเก็บข้อมูลผู้ใช้ และการควบคุมการแสดงผลของ components

---

## 🔄 State Architecture Overview

```
App.jsx (Parent Component)
├── State: user (object|null)
├── State: isLoggedIn (boolean)
├── Function: handleLogin()
├── Function: handleLogout()
│
├── Login.jsx (Child Component)
│   ├── State: username (string)
│   ├── State: password (string)
│   ├── State: error (string)
│   └── Props: onLogin (function)
│
└── Profile.jsx (Child Component)
    ├── Props: user (object)
    └── Props: onLogout (function)
```

---

## 🎯 State Variables ในระบบ

### 1. Global State (App.jsx)

#### `user` State
```jsx
const [user, setUser] = useState(null);
```

**ประเภท:** `Object | null`

**โครงสร้างข้อมูล:**
```jsx
// เมื่อ login สำเร็จ
user = {
  username: "string",
  password: "string"
}

// เมื่อยังไม่ได้ login หรือ logout แล้ว
user = null
```

**การใช้งาน:**
- เก็บข้อมูลผู้ใช้ที่ได้จากการ login
- ส่งต่อไปยัง Profile component เพื่อแสดงข้อมูล
- ใช้ตรวจสอบว่ามีข้อมูลผู้ใช้หรือไม่

#### `isLoggedIn` State
```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

**ประเภท:** `Boolean`

**ค่าที่เป็นไปได้:**
- `true`: ผู้ใช้ได้เข้าสู่ระบบแล้ว
- `false`: ผู้ใช้ยังไม่ได้เข้าสู่ระบบ

**การใช้งาน:**
- ควบคุมการแสดงผล (Conditional Rendering)
- ตัดสินใจว่าจะแสดง Login หรือ Profile component

### 2. Local State (Login.jsx)

#### `username` State
```jsx
const [username, setUsername] = useState('');
```

**ประเภท:** `String`
**จุดประสงค์:** เก็บค่าที่ผู้ใช้พิมพ์ในช่อง username

#### `password` State
```jsx
const [password, setPassword] = useState('');
```

**ประเภท:** `String`
**จุดประสงค์:** เก็บค่าที่ผู้ใช้พิมพ์ในช่อง password

#### `error` State
```jsx
const [error, setError] = useState('');
```

**ประเภท:** `String`
**จุดประสงค์:** เก็บข้อความแจ้งเตือน error

---

## ⚡ State Management Functions

### 1. handleLogin Function (App.jsx)

```jsx
const handleLogin = (userData) => {
  setUser(userData);        // อัปเดตข้อมูลผู้ใช้
  setIsLoggedIn(true);      // เปลี่ยนสถานะเป็น logged in
};
```

**พารามิเตอร์:**
- `userData`: Object ที่มี username และ password

**การทำงาน:**
1. รับข้อมูลจาก Login component
2. เก็บข้อมูลใน `user` state
3. เปลี่ยน `isLoggedIn` เป็น `true`
4. ทำให้ระบบแสดง Profile component

### 2. handleLogout Function (App.jsx)

```jsx
const handleLogout = () => {
  setUser(null);            // ลบข้อมูลผู้ใช้
  setIsLoggedIn(false);     // เปลี่ยนสถานะเป็น logged out
};
```

**การทำงาน:**
1. รีเซ็ต `user` state เป็น `null`
2. เปลี่ยน `isLoggedIn` เป็น `false`
3. ทำให้ระบบแสดง Login component อีกครั้ง

### 3. handleSubmit Function (Login.jsx)

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validation
  if (!username || !password) {
    setError('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
    return;
  }
  
  // Clear error
  setError('');
  
  // Send data to parent
  if (onLogin) {
    onLogin({ username, password });
  }
};
```

**การทำงาน:**
1. ป้องกัน form submission ปกติ
2. ตรวจสอบความถูกต้องของข้อมูล
3. แสดง error หากข้อมูลไม่ครบ
4. ส่งข้อมูลไปยัง parent component

---

## 🔄 State Flow Diagram

```
[App.jsx เริ่มต้น]
├── user: null
├── isLoggedIn: false
└── แสดง: <Login />

[ผู้ใช้กรอกข้อมูลใน Login.jsx]
├── username: "user input"
├── password: "user input"
└── error: ""

[กดปุ่ม Submit]
├── ตรวจสอบข้อมูล
├── ถ้าผ่าน: เรียก onLogin()
└── ถ้าไม่ผ่าน: setError()

[handleLogin ใน App.jsx ทำงาน]
├── setUser({ username, password })
├── setIsLoggedIn(true)
└── แสดง: <Profile />

[กดปุ่ม Logout ใน Profile.jsx]
├── เรียก onLogout()
└── handleLogout ใน App.jsx ทำงาน

[handleLogout ใน App.jsx ทำงาน]
├── setUser(null)
├── setIsLoggedIn(false)
└── แสดง: <Login />
```

---

## 📊 State Lifecycle

### 1. Initial State (เริ่มต้น)
```jsx
// App.jsx
user = null
isLoggedIn = false

// Login.jsx
username = ""
password = ""
error = ""
```

### 2. User Input State (ผู้ใช้กรอกข้อมูล)
```jsx
// Login.jsx
username = "john_doe"     // ผู้ใช้พิมพ์
password = "password123"  // ผู้ใช้พิมพ์
error = ""               // ยังไม่มี error
```

### 3. Validation Error State (มี error)
```jsx
// Login.jsx (กรณีข้อมูลไม่ครบ)
username = ""
password = ""
error = "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน"
```

### 4. Logged In State (เข้าสู่ระบบสำเร็จ)
```jsx
// App.jsx
user = {
  username: "john_doe",
  password: "password123"
}
isLoggedIn = true
```

### 5. Logged Out State (ออกจากระบบ)
```jsx
// App.jsx (กลับไปสถานะเริ่มต้น)
user = null
isLoggedIn = false
```

---

## 🎯 Props Drilling Pattern

### ข้อมูลไหลจาก Parent ไป Child

```jsx
// App.jsx → Login.jsx
<Login onLogin={handleLogin} />

// App.jsx → Profile.jsx
<Profile user={user} onLogout={handleLogout} />
```

### Events ไหลจาก Child ไป Parent

```jsx
// Login.jsx → App.jsx
onLogin({ username, password })

// Profile.jsx → App.jsx
onLogout()
```

---

## 🔧 Advanced State Management Concepts

### 1. Controlled Components
```jsx
// Login.jsx - Input เป็น Controlled Component
<input
  type="text"
  value={username}                    // Value จาก state
  onChange={(e) => setUsername(e.target.value)} // Update state
/>
```

### 2. Conditional Rendering
```jsx
// App.jsx - แสดง component ตาม state
{isLoggedIn ? (
  <Profile user={user} onLogout={handleLogout} />
) : (
  <Login onLogin={handleLogin} />
)}
```

### 3. Side Effects with State
```jsx
// Profile.jsx - คำนวณเวลาตาม state
<span className="profile-value">
  {new Date().toLocaleString('th-TH')}
</span>
```

---

## 🚀 Best Practices สำหรับ State Management

### 1. Single Source of Truth
- เก็บ authentication state ใน App.jsx (parent component)
- Child components ไม่ควรจัดการ global state เอง

### 2. State Immutability
```jsx
// ✅ ถูกต้อง - สร้าง object ใหม่
setUser({ username, password });

// ❌ ผิด - แก้ไข object เดิม
user.username = username;
```

### 3. Separation of Concerns
- **App.jsx**: จัดการ global state และ routing logic
- **Login.jsx**: จัดการ form state และ validation
- **Profile.jsx**: แสดงข้อมูลเท่านั้น (presentational)

### 4. Error Handling
```jsx
// ตรวจสอบข้อมูลก่อนอัปเดต state
if (!username || !password) {
  setError('กรุณากรอกข้อมูลให้ครบถ้วน');
  return;
}
```

---

## 🔮 การพัฒนาต่อ (Advanced Patterns)

### 1. Context API (สำหรับ app ขนาดใหญ่)
```jsx
// AuthContext.js
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### 2. Custom Hooks
```jsx
// useAuth.js
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };
  
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };
  
  return { user, isLoggedIn, login, logout };
};
```

### 3. Local Storage Integration
```jsx
// เก็บ state ใน localStorage
useEffect(() => {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    setUser(JSON.parse(savedUser));
    setIsLoggedIn(true);
  }
}, []);

const handleLogin = (userData) => {
  setUser(userData);
  setIsLoggedIn(true);
  localStorage.setItem('user', JSON.stringify(userData));
};
```

---

## 📝 สรุป

State Management ในระบบ Login นี้ใช้หลักการ:

1. **Centralized State**: เก็บ authentication state ใน App.jsx
2. **Props Drilling**: ส่งข้อมูลและฟังก์ชันผ่าน props
3. **Controlled Components**: จัดการ form inputs ด้วย state
4. **Conditional Rendering**: แสดง UI ตาม state
5. **Unidirectional Data Flow**: ข้อมูลไหลทิศทางเดียว

รูปแบบนี้เหมาะสำหรับแอปพลิเคชันขนาดเล็กถึงกลาง สำหรับแอปที่ซับซ้อนมากขึ้น ควรพิจารณาใช้ Context API, Redux หรือ State Management Library อื่นๆ

---

*เอกสารนี้อธิบาย State Management สำหรับระบบ Login โดยเน้นความเข้าใจและการประยุกต์ใช้จริง*
