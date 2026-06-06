
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <AppRoutes />
    </div>

  )
}

export default App