import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { Layout, Home, About, Contact, User, Github, githubInfoLoader } from './components/index'

// router: There are two ways of creating router
// const router = createBrowserRouter([ // createBrowseroRouter is a method which takes array of objects
//   {
//     path: '/', // this is our top element, nesting will take place inside it. We need to tell it what will it render in the element section.
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]) 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> {/* It can or cannot be self closing. */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> {/* after 'user/:' this 'userid' is kind of a variable, jis reference hume usi file me mil jata hai jisko humne render kiya hai */}
      <Route
        loader = {githubInfoLoader} // agar eske ander hum fetch use karte hai toh, jab hum mouse 'Github' wale navlink pe hover krenge ye automatically behind the secene click krne se pahele fetch ke lega.
        path='/github'
        element={<Github />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
