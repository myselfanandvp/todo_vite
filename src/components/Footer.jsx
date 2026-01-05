const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4">

        {/* Bottom Bar */}
        <div className="border-t  border-slate-800 px-2 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {currentYear} Anand. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-400">
              v1.0.4
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;