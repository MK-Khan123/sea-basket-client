import { Routes, Route, Navigate } from "react-router-dom";
import EditBanner from "./components/Admin/EditBanner/EditBanner";
import EditHowItWorks from "./components/Admin/EditHowItWorks/EditHowItWorks";
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
import DeleteFAQs from "./components/Admin/DeleteFAQs/DeleteFAQs";
import DeleteReadingMaterials from "./components/Admin/DeleteReadingMaterials/DeleteReadingMaterials";
import DeleteHotTopics from "./components/Admin/DeleteHotTopics/DeleteHotTopics";
import AddFAQs from "./components/Admin/AddFAQs/AddFAQs";
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

          <Route path="/add-faqs" element={<AddFAQs />} />

          <Route path="/reading-materials" element={<ReadingMaterials />} />

          <Route path="/hot-topics" element={<HotTopics />} />

          <Route path="/delete-categories" element={<DeleteCategories />} />

          <Route path="/delete-faqs" element={<DeleteFAQs />} />

          <Route path="/delete-reading-materials" element={<DeleteReadingMaterials />} />

          <Route path="/delete-hot-topics" element={<DeleteHotTopics />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
