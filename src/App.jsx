import { useEffect } from "react"
import "./App.css" 
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"

// Components
import Navbar from "./components/Common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses"
import MyCourses from "./components/core/Dashboard/MyCourses"
import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import About from "./pages/About"
import Catalog from "./pages/Catalog"
import Contact from "./pages/Contact" 
import Dashboard from "./pages/Dashboard"
import ForgotPassword from "./pages/ForgotPassword"
// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"
import { getUserDetails } from "./services/operations/profileAPI"
import { ACCOUNT_TYPE } from "./utils/constants"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Navbar /> {/**Done */}
      <Routes>
        <Route path="/" element={<Home />} /> {/**Done */}
        <Route path="/about" element={<About />} /> {/**Done */}
        <Route path="/contact" element={<Contact />} /> {/**Done */}
        <Route path="catalog/:catalogName" element={<Catalog />} /> {/**Done */}
        {/* Open Route - for Only Non Logged in User */}
        <Route  
          path="login"    
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        /> {/*Done*/}
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        /> {/*Done*/}
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />{/*Done*/}
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />{/*Done*/}
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />{/*Done*/}
        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >{/*Done */}

          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} /> {/**Done */}
          <Route path="dashboard/Settings" element={<Settings />} /> {/**Done
          {/* Route only for Instructors */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              {/* <Route path="dashboard/instructor" element={<Instructor />} /> */}
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              {/* <Route path="dashboard/add-course" element={<AddCourse />} /> */}
              {/* <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              /> */}
            </>
          )}
          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />{/**Done */}
              {/* <Route path="/dashboard/cart" element={<Cart />} /> */}
            </> 
          )}
          {/* <Route path="dashboard/settings" element={<Settings />} /> */}
        </Route>

       
    
      </Routes>
    </div>
  )
}

export default App
