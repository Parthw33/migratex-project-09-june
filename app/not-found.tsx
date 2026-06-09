import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold font-heading mb-4" style={{ color: '#053947' }}>
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-4 font-heading" style={{ color: '#053947' }}>
        Page Not Found
      </h2>
      <p className="text-base mb-8 max-w-md" style={{ color: '#343333' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90"
        style={{ backgroundColor: '#053947' }}
      >
        Back to Home
      </Link>
    </div>
  );
}