import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-slate-300 text-center">
      <p className="text-3xl">404</p>
      <p>Page not found.</p>
      <Link
        className="px-2 py-1 rounded mt-16 bg-slate-300 text-slate-900 hover:text-slate-800 hover:bg-slate-100"
        to="/"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
