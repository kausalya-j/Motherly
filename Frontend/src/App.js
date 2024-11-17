import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import Landing from "./pages/landing.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/profile.jsx";

import MusicSection from "./components/music/MusicSection";
import FoodSection from "./components/food/FoodSection";
import Contacts from "./pages/Contacts.jsx"; // Import Contacts page
import ReadingSection from "./components/reading/ReadingSection"; // Import ReadingSection
import JournalMain from "./components/journal/JournalMain"; // Import JournalMain
import MeditationSection from "./components/meditation/MeditationSection"; // Import MeditationSection
import YogaSection from "./components/yoga/yogaa"; // Import YogaSection

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/contacts" element={<Contacts />} />{" "}
            {/* Add Contacts route */}
            {/* Define routes for sections */}
            <Route path="/user/food" element={<FoodSection />} />
            <Route path="/user/music" element={<MusicSection />} />
            <Route path="/user/reading" element={<ReadingSection />} />
            <Route path="/user/journal" element={<JournalMain />} />
            <Route path="/user/meditation" element={<MeditationSection />} />
            <Route path="/user/yoga" element={<YogaSection />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
