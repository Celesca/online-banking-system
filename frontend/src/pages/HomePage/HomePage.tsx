import { Link } from "react-router-dom"
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 homepage_container">
        <div className="pt-16 text-center">
          <h1 className="head_text text-white">TWJ Online Banking</h1>
        </div>
        <button className="login-button relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Link to="/login">Login</Link>
          </span>
        </button>
        
    </div>
  )
}

export default HomePage