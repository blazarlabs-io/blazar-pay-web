export default function NotFound() {
  return (
    <div className="container-px max-w-screen py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you’re looking for doesn’t exist.</p>
      <a href="/" className="mt-6 inline-flex rounded-2xl bg-slate-900 text-white px-5 py-3">Go home</a>
    </div>
  );
}