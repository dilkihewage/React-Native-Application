This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# ThronesApp - React Native Application

## 📌 Project Overview
ThronesApp is a React Native application developed using **React Native CLI**. The app integrates **Firebase authentication** and **Firebase database** to allow user **Sign Up and Sign In**, ensuring user session persistence. It fetches character data from [Thrones API](https://thronesapi.com/) and displays it in a dedicated screen. Users can view their profile details and sign out. Additional features include **Redux for state management**, **voice-to-text**, **Firebase Analytics**, **battery level display (native module)**, and a **Next.js landing page**.

---

## 🚀 Features
1. **User Authentication with Firebase**
   - Sign Up & Sign In using Firebase Authentication.
   - User session persists across the app.
   - Logout redirects to the Sign In screen.

2. **Character Listing from Thrones API**
   - Fetches and displays a list of Game of Thrones characters.

3. **User Profile Screen**
   - Displays user information from Firebase.
   - Shows device battery level (Native Code - Swift/Java/Kotlin).
   - Logout functionality.

4. **State Management with Redux**
   - Manages authentication state and character data.

5. **Voice-to-Text Functionality**
   - Converts voice input into text using a voice-to-text library.

6. **Firebase Analytics**
   - Tracks user interactions and app usage.

7. **Next.js Landing Page**
   - A simple, stylish web page introducing the app.

---

## 🛠️ Tech Stack
- **Frontend (Mobile)**: React Native (CLI), Redux, React Navigation
- **Backend (Database & Auth)**: Firebase Authentication, Firebase Firestore
- **API Integration**: Thrones API
- **Voice-to-Text**: `react-native-voice`
- **Analytics**: Firebase Analytics
- **Native Modules**: Java/Kotlin (Android) for battery level
- **Web (Landing Page)**: Next.js

---

## 🔧 Installation & Setup

### **1️⃣ Prerequisites**
- Node.js & npm/yarn
- React Native CLI
- Android Studio (for Android development)
- Firebase project with authentication & Firestore set up


