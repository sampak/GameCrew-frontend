import { RouterProvider } from 'react-router-dom'
import { router } from './router'
function App() {
  return (
    // <AppLayout>
    //   <div className="bg-primary">
    //     a
    //   </div>
    // </AppLayout>
    <RouterProvider router={router} />
  )
}

export default App
