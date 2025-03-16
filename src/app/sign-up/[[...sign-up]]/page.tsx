import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-venice-blue">Venice.io</h1>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="max-w-md w-full px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/sign-in" className="font-medium text-venice-blue hover:text-venice-teal">
                Sign in
              </Link>
            </p>
          </div>
          
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <SignUp
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              redirectUrl="/dashboard"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Venice.io. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
