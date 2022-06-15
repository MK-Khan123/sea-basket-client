import { Routes, Route, Navigate } from "react-router-dom";
import EditBanner from "./components/Admin/EditBanner/EditBanner";
import EditHowItWorks from "./components/Admin/EditHowItWorks/EditHowItWorks";
import FAQs from "./components/Home/FAQs/FAQs";
import Home from "./components/Home/Home";
import HotTopics from "./components/Home/HotTopics/HotTopics";
import ReadingMaterials from "./components/Home/ReadingMaterials/ReadingMaterials";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import RequiredAuth from "./components/Shared/RequiredAuth/RequiredAuth";
import AuthProvider from "./contexts/AuthProvider";
import EditVideo from "./components/Admin/EditVideo/EditVideo";
import EditLogo from "./components/Admin/EditLogo/EditLogo";
import AddCategories from "./components/Admin/AddCategories/AddCategories";
import DeleteCategories from "./components/Admin/DeleteCategories/DeleteCategories";
import './App.css';

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

          <Route path="/edit-intro-video" element={<EditVideo />} />

          <Route path="/edit-logo" element={<EditLogo />} />

          <Route path="/add-categories" element={<AddCategories />} />          

          <Route path="/faqs" element={<FAQs />} />

          <Route path="/reading-materials" element={<ReadingMaterials />} />

          <Route path="/hot-topics" element={<HotTopics />} />

          <Route path="/delete-categories" element={<DeleteCategories />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
