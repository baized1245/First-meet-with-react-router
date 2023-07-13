import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Componets/About/About.jsx';
import Contact from './Componets/Contact/Contact.jsx';
import Header from './Componets/Header/Header.jsx';
import Home from './Componets/Home/Home.jsx';
import First from './Componets/First/First.jsx';
import Friends from './Componets/Friends/Friends.jsx';
import FriendDetail from './Componets/FriendDetail/FriendDetail.jsx';
import Posts from './Componets/Posts/Posts.jsx';
import PostDetail from './Componets/PostDetail/PostDetail.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>
//   },
//   {
//     path:'/about',
//     element:<div>
//       <About></About>
//     </div>
//   },
//   {
//     path:'/contact',
//     element:<div>
//       <Contact></Contact>
//     </div>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children:[
      {
      path:'/',
      element:<First></First>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
       path:'friends',
       element:<Friends></Friends>,
       loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendid',
        element:<FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendid}`)
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader:() =>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetail></PostDetail>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: '*',
        element: <div>4040404040</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider> 
  </React.StrictMode>,
)
