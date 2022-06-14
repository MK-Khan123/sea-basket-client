import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import EditBanner from "./components/Admin/EditBanner/EditBanner";
import Categories from "./components/Home/Categories/Categories";
import FAQs from "./components/Home/FAQs/FAQs";
import Home from "./components/Home/Home";
import HotTopics from "./components/Home/HotTopics/HotTopics";
import HowItWorks from "./components/Home/HowItWorks/HowItWorks";
import IntroVideo from "./components/Home/IntroVideo/IntroVideo";
import ReadingMaterials from "./components/Home/ReadingMaterials/ReadingMaterials";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/edit-banner" element={<EditBanner />} />

          <Route path="/how-it-works" element={<HowItWorks />} />

          <Route path="/categories" element={<Categories />} />

          <Route path="/intro-video" element={<IntroVideo />} />

          <Route path="/faqs" element={<FAQs />} />

          <Route path="/reading-materials" element={<ReadingMaterials />} />

          <Route path="/hot-topics" element={<HotTopics />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
