import React from 'react';
import Link from 'next/link';

import Guest from '../layouts/Guest';
import Input from '../components/Input';
import Button from '../components/Button';
import Label from '../components/Label';
import Checkbox from '../components/Checkbox';

export default function Login() {
  return (
    <div>
      <div className="mb-6">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="artha@domain.com"
        />
      </div>
      <div className="mb-6">
        <Label htmlFor="passowrd">Password</Label>
        <Input type="password" name="password" id="password" />
      </div>
      <div className="mb-5 flex justify-between">
        <Checkbox
          forInput={'remember'}
          label={'Remember me'}
          name="remember"
          id="remember"
        />
        <a href="#" className="text-teal-500 font-medium">
          Forgot password?
        </a>
      </div>
      <div className="flex items-center justify-between">
        <Button>Login</Button>
        <span>
          Don't have an account?{' '}
          <Link href="/register">
            <a className="text-teal-500 font-medium">Register</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

Login.getLayout = (page) => (
  <Guest header="login" title="Login" children={page} />
);
