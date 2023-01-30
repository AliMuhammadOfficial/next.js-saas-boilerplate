'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PasswordReset({ params }: any) {
  const [hash, setHash] = useState('');
  useEffect(() => {
    setHash(params.hash);
    return () => {};
  }, [params.hash]);

  return (
    <main className="flex items-center justify-center border-transparent">
      <div className="my-12 flex items-center justify-center rounded-2xl border-transparent bg-white py-12 shadow-xl md:w-1/2 md:py-24">
        <div className="w-4/5">
          <form className="bg-white">
            <h1 className="mb-2 px-2 text-4xl font-bold">
              Create New Password.
            </h1>
            <div className="mt-5 ">
              <input placeholder="New Password" type="password" />
              <input type="hidden" value={hash} />
            </div>
            <div className="mt-5 ">
              <input placeholder="Confirm Password" type="password" />
            </div>
            <div className="mt-5">
              <button type="submit">Reset Password</button>
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
