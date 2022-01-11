import React from 'react';
import Guest from '../layouts/Guest';
import Input from '../components/Input';
import Button from '../components/Button';
import Label from '../components/Label';
import Checkbox from '../components/Checkbox';
import Select from '../components/Select';
import Link from 'next/link';

export default function Register() {
  return (
    <div>
      <div className="mb-6">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" placeholder="Gede Artha" />
      </div>
      <div className="mb-6">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="artha@domain.com"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" />
        </div>
        <div className="mb-6">
          <Label htmlFor="password_confirmation">Confirm Password</Label>
          <Input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
          />
        </div>
      </div>
      <div className="mb-6">
        <Label forInput={'gender'}>Gender</Label>
        <Select>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
      </div>
      <div className="mb-6 flex justify-between">
        <Checkbox
          forInput={'acceptance'}
          label={'Aggree with Privacy and Terms'}
          name="acceptance"
          id="acceptance"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button>Register</Button>
        <span>
          Already have an account?{' '}
          <Link href="/login">
            <a className="text-teal-500 font-medium">Login</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

Register.getLayout = (page) => (
  <Guest
    cardClassName={'lg:w-2/5'}
    header="Register"
    title="Register"
    children={page}
  />
);
