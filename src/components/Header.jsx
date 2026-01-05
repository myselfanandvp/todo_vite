import { Link } from "react-router-dom";

const Header = ({ title = 'Application' }) => {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Left: Title */}
       <div className="space-x-3">

    <Link to="/">Counter</Link>
    <Link to="/form">Form</Link>
            <Link to="/todo">Todo</Link>
       </div>
        
        {/* Right: Actions / Branding */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
        
          </span>

          <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
