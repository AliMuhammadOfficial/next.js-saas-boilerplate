import Link from 'next/link';

import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

export default function Login() {
  return (
    <main className="border-transparent md:flex">
      <div className="relative hidden w-1/2 items-center justify-around overflow-hidden border-transparent bg-gradient-to-tr from-green-600 to-green-400 shadow-xl md:flex">
        <div className="px-20 md:mr-4">
          <h1 className="mt-5 font-sans text-xl font-bold text-white md:text-4xl lg:text-5xl">
            Don&apos;t wait
          </h1>
          <p className="mt-1 text-white">
            Effortlessly track and manage your expenses, and take control of
            your financial future with our solution.
          </p>
          <Button type="submit">Read More</Button>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center rounded-r-3xl border-transparent bg-white shadow-xl md:w-1/2">
        <div className="w-4/5">
          <form className="bg-white">
            <h1 className="mb-2 px-2 text-4xl font-bold">Welcome Back!</h1>
            <div>
              <p className="mb-10 px-2 text-sm font-medium text-gray-600">
                Please enter your credentials
              </p>
            </div>
            <div className="mt-5 flex items-center px-2 text-center">
              <div className="h-[1px] w-1/3 bg-black "></div>
              <span className="ml-2 w-1/3 text-sm ">Or Continue with</span>
              <div className="h-[1px] w-1/3 bg-black "></div>
            </div>
            <div className="mt-5 ">
              <TextInput />
            </div>
            <div className="mt-5 ">
              <TextInput />
            </div>
            <div className="flex justify-center py-2 text-center">
              <Link href="/password-recovery">
                <a>
                  <p className="cursor-pointer text-sm font-bold">
                    Forget Password ?
                  </p>
                </a>
              </Link>
            </div>
            <div className="px-2">
              <Button type="submit" variant="primary" fullWidth>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}