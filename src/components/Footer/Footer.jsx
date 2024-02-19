import { Link } from "react-router-dom"
import Logo from "../Logo"
function Footer() {
  return (

    <footer className="w-full py-12 bg-indigo-950 text-white  ">
      <div className="container px-4 md:px-6 lg:px-8 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <Link
            className="flex items-center space-x-2 transform hover:scale-110 transition-transform duration-200"
            href="#"
          >
            <Logo className="h-6 w-6 text-white" />
            <span className="text-lg font-semibold">Blog Inc</span>
          </Link>
          <p className="text-sm">© 2024 Blog Inc. All rights reserved.</p>
        </div>
        <div className="space-y-2 md:col-start-2">
          <h3 className="text-lg font-semibold">Legals</h3>
          <ul className="space-y-1">
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Licensing
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="space-y-1">
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Account
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Help
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Customer Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Features
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-blue-400 transition-colors duration-200" href="#">
                Press Kit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}




export default Footer