# GitHub Codespaces ♥️ React

Welcome to your shiny new Codespace running React! We've got everything fired up and running for you to explore React.

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you're ready you can click "Publish Branch" and we'll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

This project was bootstrapped for you with [Vite](https://vitejs.dev/).

## คำอธิบายภาษาไทย

ยินดีต้อนรับสู่ GitHub Codespaces ที่พร้อมใช้งาน React! 

โปรเจกต์นี้เป็นสภาพแวดล้อมการพัฒนา React ที่ใช้ Vite เป็น build tool ทำให้การพัฒนาเว็บแอปพลิเคชันรวดเร็วและมีประสิทธิภาพ

### คุณสมบัติหลัก:
- 🚀 ใช้ Vite สำหรับ fast development และ hot module replacement
- ⚛️ React framework สำหรับสร้าง user interface
- 🛠️ พร้อมใช้งานทันทีใน GitHub Codespaces
- 🧪 รองรับ testing ด้วย Vitest
- 📱 สามารถสร้าง Progressive Web App ได้

### การเริ่มต้นใช้งาน:
1. เซิร์ฟเวอร์พัฒนาได้เริ่มต้นแล้วใน terminal "Codespaces: server" 
2. เปิด Simple Browser เพื่อดูแอปพลิเคชันที่ http://localhost:3000/
3. **ทดลอง Login**: กรอกชื่อผู้ใช้และรหัสผ่านอะไรก็ได้ (เช่น username: `demo`, password: `123`)
4. แก้ไขไฟล์ในโฟลเดอร์ `src/` เพื่อพัฒนาแอปพลิเคชันของคุณ
5. เมื่อพร้อมแล้ว กดปุ่ม "Publish Branch" เพื่อสร้าง repository บน GitHub

## วิธีการใช้งานเว็บแอปพลิเคชัน

### การเข้าถึงเว็บแอปพลิเคชัน
1. **เปิดใน Simple Browser**: กด `Ctrl + Shift + P` (หรือ `Cmd + Shift + P` บน Mac) แล้วค้นหา "Simple Browser: Show" และเลือก http://localhost:3000/
2. **เปิดในเบราว์เซอร์ภายนอก**: คลิกที่ลิงก์ http://localhost:3000/ ใน terminal หรือใช้คำสั่ง `$BROWSER http://localhost:3000/`

### โครงสร้างไฟล์สำคัญ
- 📄 `src/App.jsx` - ไฟล์หลักของแอปพลิเคชัน
- 📄 `src/index.jsx` - จุดเริ่มต้นของ React app
- 📄 `src/App.css` - สไตล์หลักของแอปพลิเคชัน
- 📄 `index.html` - HTML template
- 📁 `public/` - โฟลเดอร์สำหรับไฟล์ static (รูปภาพ, favicon, etc.)

### การแก้ไขและพัฒนา
1. **แก้ไขส่วนแสดงผล**: แก้ไขไฟล์ `src/App.jsx` เพื่อเปลี่ยนเนื้อหาหน้าเว็บ
2. **แก้ไขสไตล์**: แก้ไขไฟล์ `src/App.css` หรือ `src/index.css` เพื่อเปลี่ยนลุคแอนด์ฟีล
3. **เพิ่ม component**: สร้างไฟล์ `.jsx` ใหม่ในโฟลเดอร์ `src/` เพื่อเพิ่มส่วนประกอบใหม่
4. **Hot Reload**: การเปลี่ยนแปลงจะแสดงผลทันทีโดยไม่ต้อง refresh หน้าเว็บ

### การเพิ่มฟีเจอร์พื้นฐาน
- **Routing**: ติดตั้ง React Router สำหรับการนำทางหลายหน้า
- **State Management**: ใช้ useState หรือ useContext สำหรับจัดการสถานะ
- **API Integration**: ใช้ fetch หรือ axios เพื่อดึงข้อมูลจาก API
- **Styling**: ใช้ CSS Modules, Styled Components หรือ Tailwind CSS

### ตัวอย่างการแก้ไขพื้นฐาน
```jsx
// ในไฟล์ src/App.jsx - แอปปัจจุบันมีระบบ Login/Profile
function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>GitHub Codespaces <span className="heart">♥️</span> React</p>
        {isLoggedIn ? (
          <Profile user={user} onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}
```

### ฟีเจอร์ที่มีอยู่ในแอป
- 🔐 **ระบบ Login**: ใช้ component `Login.jsx` สำหรับการเข้าสู่ระบบ
- 👤 **หน้า Profile**: ใช้ component `Profile.jsx` สำหรับแสดงข้อมูลผู้ใช้
- 🎨 **Styling**: ใช้ CSS classes สำหรับจัดแต่งหน้าตา
- 📱 **Responsive**: รองรับการแสดงผลบนหน้าจอขนาดต่างๆ

### คำแนะนำการใช้งานเฉพาะแอปนี้
1. **ทดลองระบบ Login**: กรอกข้อมูลในฟอร์ม Login เพื่อดูการทำงานของ state management
2. **ดูการเปลี่ยนแปลง UI**: สังเกตการเปลี่ยนจากหน้า Login ไปหน้า Profile
3. **ทดสอบ Logout**: กดปุ่ม Logout เพื่อกลับสู่หน้า Login
4. **แก้ไขสไตล์**: ลองแก้ไขไฟล์ `src/App.css` เพื่อเปลี่ยนสี font หรือ layout
5. **เพิ่มฟังก์ชัน**: ลองเพิ่มฟีเจอร์ใหม่ เช่น validation หรือ local storage

### 🔐 การใช้งานระบบ Login
**สำคัญ: ระบบ Login นี้เป็นแบบ Demo ไม่มีการตรวจสอบรหัสผ่านจริง**

**ชื่อผู้ใช้และรหัสผ่าน**: ใส่อะไรก็ได้ (ต้องไม่ว่าง)

**ตัวอย่าง:**
```
ชื่อผู้ใช้: demo
รหัสผ่าน: 123

หรือ

ชื่อผู้ใช้: testuser  
รหัสผ่าน: password
```

**ขั้นตอนการทดลอง:**
1. เปิดเว็บที่ http://localhost:3000/
2. กรอกชื่อผู้ใช้อะไรก็ได้ (เช่น `admin`, `user123`, `test`)
3. กรอกรหัสผ่านอะไรก็ได้ (เช่น `password`, `123456`, `admin`)
4. กดปุ่ม "เข้าสู่ระบบ" → จะเข้าสู่หน้า Profile ทันที
5. กดปุ่ม "ออกจากระบบ" → กลับไปหน้า Login

**หมายเหตุ**: นี่เป็น Demo สำหรับแสดง React state management และ component communication

### การ Debug และ Troubleshooting
- **เปิด Developer Tools**: กด `F12` ในเบราว์เซอร์เพื่อดู console และ network
- **ดู React DevTools**: ติดตั้ง React Developer Tools extension เพื่อ debug React components
- **ตรวจสอบ Terminal**: ดู terminal "Codespaces: server" สำหรับ error messages
- **Hot Reload ไม่ทำงาน**: ลอง refresh หน้าเว็บหรือ restart dev server

## Available Scripts

Welcome to your shiny new Codespace running React! We've got everything fired up and running for you to explore React.

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

This project was bootstrapped for you with [Vite](https://vitejs.dev/).

## Available Scripts

In the project directory, you can run:

## คำสั่งที่ใช้งานได้ (Available Scripts)

ในโฟลเดอร์โปรเจกต์ คุณสามารถรันคำสั่งต่อไปนี้:

### `npm start`

We've already run this for you in the `Codespaces: server` terminal window below. If you need to stop the server for any reason you can just run `npm start` again to bring it back online.

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000/) in the built-in Simple Browser (`Cmd/Ctrl + Shift + P > Simple Browser: Show`) to view your running application.

The page will reload automatically when you make changes.\
You may also see any lint errors in the console.

**คำอธิบายภาษาไทย:** เริ่มต้นเซิร์ฟเวอร์พัฒนา ระบบได้รันให้แล้วใน terminal "Codespaces: server" เปิดดูแอปพลิเคชันได้ที่ http://localhost:3000/ หน้าเว็บจะ reload อัตโนมัติเมื่อคุณแก้ไขไฟล์

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**คำอธิบายภาษาไทย:** รัน test runner ในโหมด interactive watch จะคอยตรวจสอบและรันเทสต์อัตโนมัติเมื่อมีการเปลี่ยนแปลงไฟล์

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**คำอธิบายภาษาไทย:** สร้างไฟล์สำหรับการใช้งานจริง (production) ลงในโฟลเดอร์ `build` ไฟล์จะถูก optimize และ minify เพื่อประสิทธิภาพสูงสุด พร้อมสำหรับการ deploy

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn Vitest, a Vite-native testing framework, go to [Vitest documentation](https://vitest.dev/guide/)

To learn React, check out the [React documentation](https://reactjs.org/).

## เรียนรู้เพิ่มเติม

- 📚 [เอกสาร Vite](https://vitejs.dev/guide/) - เรียนรู้เกี่ยวกับ build tool ที่ใช้ในโปรเจกต์นี้
- 🧪 [เอกสาร Vitest](https://vitest.dev/guide/) - testing framework ที่ออกแบบมาสำหรับ Vite
- ⚛️ [เอกสาร React](https://reactjs.org/) - เรียนรู้ React framework
- 🌐 [React Tutorial ภาษาไทย](https://th.reactjs.org/tutorial/tutorial.html) - บทช่วยสอน React ภาษาไทย

### Code Splitting

This section has moved here: [https://sambitsahoo.com/blog/vite-code-splitting-that-works.html](https://sambitsahoo.com/blog/vite-code-splitting-that-works.html)

### Analyzing the Bundle Size

This section has moved here: [https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer)

### Making a Progressive Web App

This section has moved here: [https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf](https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf)

### Advanced Configuration

This section has moved here: [https://vitejs.dev/guide/build.html#advanced-base-options](https://vitejs.dev/guide/build.html#advanced-base-options)

### Deployment

This section has moved here: [https://vitejs.dev/guide/build.html](https://vitejs.dev/guide/build.html)

### Troubleshooting

This section has moved here: [https://vitejs.dev/guide/troubleshooting.html](https://vitejs.dev/guide/troubleshooting.html)
