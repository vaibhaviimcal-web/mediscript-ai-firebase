# 🔥 MediScript AI - Firebase Edition

**Complete AI-Powered Prescription System with Firebase Backend**

## ✨ Features

### Authentication
- ✅ Email/Password Sign-In
- ✅ Google Sign-In
- ✅ Secure Firebase Authentication
- ✅ User Profile Management

### Backend
- ✅ Firebase Firestore Database
- ✅ Real-time Data Sync
- ✅ Cloud Storage
- ✅ Security Rules

### AI Features
- ✅ Real AI Prescription Generation (Groq Llama 3.3 70B)
- ✅ Drug Database (10+ medicines)
- ✅ Drug Interaction Checker
- ✅ Patient History Analysis

## 🚀 Quick Start

### 1. Setup Groq API Key

Edit `config.js` and replace `YOUR_GROQ_API_KEY_HERE` with your actual Groq API key:

```javascript
GROQ_API_KEY: 'gsk_your_actual_key_here'
```

### 2. Firebase is Already Configured

Firebase credentials are already set up in `firebase-config.js`. No changes needed!

### 3. Deploy

**Option A: GitHub Pages**
- Already deployed at: https://vaibhaviimcal-web.github.io/mediscript-ai-firebase/
- Auto-updates on every commit

**Option B: Firebase Hosting**
```bash
firebase deploy
```

## 🧪 Testing

1. Open: https://vaibhaviimcal-web.github.io/mediscript-ai-firebase/
2. Register a new account (email + password)
3. Or sign in with Google
4. Explore the authenticated dashboard!

## 💰 Cost

**$0/month** - Everything is FREE!

- Firebase: Free tier (1GB database, unlimited users)
- Groq API: Free (14,400 requests/day)
- GitHub Pages: Free hosting

## 📊 Comparison

| Feature | V1 (localStorage) | V2 (Firebase) |
|---------|-------------------|---------------|
| **Authentication** | ❌ None | ✅ Email + Google |
| **Database** | Browser only | ☁️ Cloud (Firestore) |
| **Multi-device** | ❌ No | ✅ Yes |
| **Collaboration** | ❌ No | ✅ Yes |
| **Data Backup** | ❌ Manual | ✅ Automatic |
| **Cost** | FREE | FREE |

## 🔗 Links

- **V1 (localStorage):** https://vaibhaviimcal-web.github.io/mediscript-ai-v2/
- **V2 (Firebase):** https://vaibhaviimcal-web.github.io/mediscript-ai-firebase/
- **Firebase Console:** https://console.firebase.google.com/project/mediscript-ai-78d2f

## 📝 License

MIT License - Free to use and modify
