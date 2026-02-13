# 🎬 FirzDrama

**Modern Drama Streaming Platform** - Stream ribuan drama terbaik dari berbagai genre dengan UI/UX yang premium dan fitur lengkap!

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

### 🔐 **Authentication System**
- Login sederhana dengan localStorage
- Session management
- User profile display

### 🎨 **Modern UI/UX**
- **Dark & Light Mode** - Toggle tema sesuai preferensi
- **Responsive Design** - Perfect di mobile, tablet, & desktop
- **Smooth Animations** - Micro-interactions yang engaging
- **Premium Aesthetics** - Gradient, glassmorphism, modern color palette

### 📺 **Drama Streaming**
- Browse drama by category (Trending, Latest, For You)
- Drama detail dengan full information
- Video player dengan HLS & MP4 support
- Episode navigation

### 💾 **Watchlist System**
- Add/remove drama dari watchlist
- Soft delete implementation
- LocalStorage persistence
- Quick access watchlist tab

### 🎯 **API Integration**
- Real-time data dari Sansekai API
- Multiple quality support (720p, 1080p, etc.)
- Automatic fallback system

---

## 🚀 Quick Start

### **Option 1: Direct Open**
```bash
# Buka file di browser
1. Double-click: firzdrama.html atau index.html
2. Login dengan username & password bebas
3. Enjoy! 🎉
```

### **Option 2: Local Server**
```bash
# Gunakan http-server atau live-server
npx http-server ./public
# Atau
npx live-server ./public
```

---

## 📁 Project Structure

```
public/
├── index.html              # Main app (FirzDrama)
├── firzdrama.html          # Sama seperti index.html
├── dramabox_api.html       # Old version (reference)
├── index.old.html          # Backup version lama
└── README_API.md          # API documentation
```

---

## 🎨 Theme System

### **Light Mode**
- Clean & fresh appearance
- Perfect untuk siang hari
- High contrast untuk readability

### **Dark Mode**
- Eye-friendly di malam hari
- Modern dark aesthetic
- Automatic theme persistence

**Toggle:** Click icon bulan/matahari di navbar

---

## 💾 Watchlist Feature

### **Add to Watchlist:**
1. Hover drama card
2. Click icon ❤️ di pojok kanan bawah
3. Drama tersimpan otomatis

### **View Watchlist:**
1. Click tab "Watchlist" di home
2. Lihat semua drama favorit
3. Click untuk menonton

### **Remove from Watchlist:**
- Click ❤️ lagi (toggle)
- Atau hapus dari tab watchlist

**Storage:** LocalStorage browser (persisten)

---

## 🔑 Login System

### **Demo Login:**
```
Username: (bebas, contoh: firz)
Password: (bebas, contoh: 123)
```

### **Features:**
- ✅ Username & password validation
- ✅ Session persistence (localStorage)
- ✅ Auto-login on refresh
- ✅ Logout functionality
- ✅ User avatar dengan initial

---

## 📊 API Integration

### **Base URL:**
```
https://api.sansekai.my.id/api
```

### **Endpoints Used:**
```javascript
GET /dramabox/trending      // Trending dramas
GET /dramabox/latest        // Latest releases
GET /dramabox/foryou        // Personalized recommendations
GET /dramabox/allepisode    // All episodes for a drama
```

### **Response Structure:**
```json
[
  {
    "bookId": "42000004908",
    "bookName": "Drama Title",
    "coverWap": "https://...",
    "chapterCount": 60,
    "tags": ["Romance", "Drama"],
    "introduction": "Description...",
    "cdnList": [
      {
        "videoPathList": [
          {
            "quality": 720,
            "videoPath": "https://..."
          }
        ]
      }
    ]
  }
]
```

---

## 🎬 Video Player

### **Supported Formats:**
- ✅ HLS (`.m3u8`)
- ✅ MP4 (Direct)
- ✅ Auto quality selection

### **Quality Options:**
- 1080p (Premium)
- **720p** (Default) ⭐
- 540p
- 360p
- 144p

### **Features:**
- Native browser controls
- Auto-play episode 1
- Fallback to demo video if URL unavailable

---

## 🎨 UI Components

### **Color Palette:**
```css
Primary:   #6366f1 (Indigo)
Secondary: #ec4899 (Pink)
Success:   #10b981 (Green)
Danger:    #ef4444 (Red)
```

### **Typography:**
- Font Family: Inter (Google Fonts)
- Weights: 300-800
- Responsive sizing

### **Animations:**
- Smooth transitions (0.3s ease)
- Hover effects
- Loading spinners
- Slide-up animations

---

## 💡 Usage Tips

### **Untuk Best Experience:**
1. **Gunakan Dark Mode** di malam hari
2. **Add ke Watchlist** drama favorit
3. **Explore categories** untuk discover drama baru
4. **Check episode count** sebelum mulai

### **Keyboard Shortcuts:**
```
Space    = Play/Pause video
F        = Fullscreen
M        = Mute/Unmute
←/→      = Seek backward/forward
```

---

## 🐛 Troubleshooting

### **Video tidak play:**
- ✅ Check console (F12) untuk error
- ✅ Video URL mungkin expired
- ✅ Episode might be premium/locked
- ✅ Demo video akan auto-load sebagai fallback

### **Drama tidak muncul:**
- ✅ Check internet connection
- ✅ API might be down (temporary)
- ✅ Refresh page (F5)

### **Watchlist hilang:**
- ✅ Check localStorage enabled
- ✅ Jangan clear browser data
- ✅ Re-add drama ke watchlist

### **Login tidak save:**
- ✅ Enable localStorage di browser settings
- ✅ Don't use incognito/private mode

---

## 📱 Responsive Breakpoints

```css
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: > 1024px
```

**Optimized for all devices!**

---

## 🔮 Future Features

- [ ] Search functionality
- [ ] Filter by genre
- [ ] Watch history
- [ ] Continue watching
- [ ] Video quality selector
- [ ] Picture-in-picture mode
- [ ] Keyboard shortcuts overlay
- [ ] User reviews & ratings

---

## 🙏 Credits

**API Provider:** [Sansekai API](https://api.sansekai.my.id)  
**Content Source:** DramaBox  
**Icons:** Font Awesome  
**Fonts:** Google Fonts (Inter)  
**Video Player:** HLS.js

---

## 📄 License

MIT License - Free to use & modify

---

## 👨‍💻 Developer

Made with ❤️ by **Firz**  
Version: 1.0.0  
Last Updated: 2026-02-13

---

## 🎉 Enjoy FirzDrama!

**Happy Watching!** 🍿🎬

---

### Quick Links:
- 🏠 [Home](./index.html)
- 📺 [FirzDrama](./firzdrama.html)
- 📚 [API Docs](./README_API.md)
