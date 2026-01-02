import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.tsx';
import HomePage from '../pages/home/HomePage.tsx';
import ProjectsPage from '../pages/projects/ProjectsPage.tsx';
import ProjectDetailPage from '../pages/projects/ProjectDetailPage.tsx';
import NotesPage from '../pages/notes/NotesPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetailPage />,
      },
      {
        path: 'notes',
        element: <NotesPage />,
      },
    ],
  },
]);
