import { Routes, Route, Navigate } from "react-router-dom";
import EditBanner from "./components/Admin/EditBanner/EditBanner";
import EditHowItWorks from "./components/Admin/EditHowItWorks/EditHowItWorks";
import Categories from "./components/Home/Categories/Categories";
import FAQs from "./components/Home/FAQs/FAQs";
import Home from "./components/Home/Home";
import HotTopics from "./components/Home/HotTopics/HotTopics";
import IntroVideo from "./components/Home/IntroVideo/IntroVideo";
import ReadingMaterials from "./components/Home/ReadingMaterials/ReadingMaterials";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import RequiredAuth from "./components/Shared/RequiredAuth/RequiredAuth";
import AuthProvider from "./contexts/AuthProvider";
import './App.css';
import EditVideo from "./components/Admin/EditVideo/EditVideo";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/edit-banner"
            element={
              <RequiredAuth>
                <EditBanner />
              </RequiredAuth>
            }
          />

          <Route path="/edit-how-it-works" element={<EditHowItWorks />} />

          <Route path="/categories" element={<Categories />} />

          <Route path="/edit-intro-video" element={<EditVideo />} />

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
