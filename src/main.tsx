import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import Todo from './pages/Todo.tsx';
import Contacts from './pages/Contacts.tsx';
import Contact from './components/Contact.tsx';
import SearchForm from './pages/SearchForm.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/todo',
    element: <Todo />,
  },
  {
    path: '/search',
    element: <SearchForm />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
    children: [
      {
        path: ':contactId',
        element: <Contact />
      }
    ]
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
