import Link from 'next/link';

import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

export default function PasswordRecovery() {
  return (
    <main className="border-transparent md:flex">
      <div className="relative hidden w-1/2 items-center justify-around overflow-hidden border-transparent bg-gradient-to-tr from-green-600 to-green-400 shadow-xl md:flex">
        <div className="px-20 md:mr-4">
          <h1 className="mt-5 font-sans text-xl font-bold text-white md:text-4xl lg:text-5xl">
            Don&apos;t stress
          </h1>
          <p className="mt-2 text-white">
            We have very easy process for account recovery just enter your email
            to get password reset link.
          </p>
          <Button type="submit">Read More</Button>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center rounded-r-3xl border-transparent bg-white shadow-xl md:w-1/2">
        <div className="w-4/5">
          <form className="bg-white">
            <h1 className="mb-2 px-2 text-4xl font-bold">
              Lost your password?
            </h1>
            <div>
              <p className="mb-10 px-2 text-sm font-medium text-gray-600">
                No worries, we&apos;ll send you the steps to reset it.
              </p>
            </div>
            <div className="mt-5 ">
              <TextInput placeholder="Email Address" type="email" />
            </div>
            <div className="mt-5">
              <Button type="submit" variant="primary" fullWidth>
                Get Reset Link
              </Button>
            </div>
            <div className="flex justify-center py-2 text-center text-sm">
              <span>Back to </span>
              <Link href="/login" className="cursor-pointer text-sm font-bold">
                &nbsp;Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
