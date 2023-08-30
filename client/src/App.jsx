import HomePage from "./pages/homepage/HomePage";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import ImagesPage from "./pages/imagesPage/ImagesPage";
import UsersPage from "./pages/usersPage/UsersPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />}>
      </Route>
      <Route path='/images' element={<ImagesPage />}>
      </Route>
      <Route path='/users' element={<UsersPage />}>
      </Route>
      <Route path='/contacts' element={<ContactsPage />}>
      </Route>
    </Route>
  )
)

function App() {


  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
