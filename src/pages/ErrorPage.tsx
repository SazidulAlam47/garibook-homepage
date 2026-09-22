import { Link } from "react-router";
import Container from "../components/ui/Container";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-20">
            <Container>
                <div className="max-w-md mx-auto text-center bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
                    <h1 className="text-6xl font-black text-[#0e52ff] mb-4">404</h1>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h2>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        className="theme-primary-btn !inline-flex !w-auto !justify-center"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default ErrorPage;
