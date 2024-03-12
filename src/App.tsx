import { Toaster } from "react-hot-toast"
import GlobalRouter from "./routes"

const App = () => {
  return (
    <div>
      <GlobalRouter />
      {/* Toaster is -> Next page */}
      <Toaster />
    </div>
  )
}

export default App