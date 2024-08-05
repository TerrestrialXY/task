'use client';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';

const schema = yup
  .object({
    email: yup.string().email('Invalid email format').required('Email is required'),

    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[\W_]/, 'Password must contain at least one special character')
      .required('Password is required'),
  })
  .required();

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'admin@getnada.com',
      password: 'admin@123',
    },
  });

  const onSubmit = (data: any) => {
    if (data.email == 'admin@getnada.com' && data.password == 'admin@123') {
      router.push('/dashboard');
    }
  };

  return (
    <div className='h-full flex'>
      {/* LEFT SCREEN */}
      <div className='hidden xl:flex flex-1 items-center justify-center  bg-white text-black'>
        <div className='text-center h-full w-full'>
          <Image
            alt='background-image'
            src='/assets/background.png'
            height={100}
            width={100}
            quality={100}
            unoptimized
            className='bg-no-repeat bg-stretch lg:bg-center  h-full w-full'
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className='flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-secondary opacity-85 text-gray-50'>
        <div className='hidden lg:block'>
          <Image
            alt='Your Company'
            src='/assets/warframe.svg'
            height={100}
            width={100}
            className='mx-auto h-60 w-64 bg-center rounded-[3rem] invert bg-black brightness-150 px-6'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight '>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 w-4/6 max-w-[500px] md:w-3/6'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            method='POST'
            className='sm:h-5/6 flex flex-col px-4 py-6 gap-10'
          >
            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 '>
                Email Address
              </label>
              <div className='mt-2.5'>
                <input
                  id='email'
                  type='email'
                  required
                  autoComplete='email'
                  placeholder='Email'
                  className='block w-full rounded-md border-none px-4 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300  text-black placeholder:text-gray-500  sm:text-sm sm:leading-6 focus:outline-blue-400 focus:bg-blue-50'
                  {...register('email')}
                />
              </div>
              <p className='text-red-500 px-4 py-2'>{errors.email?.message}</p>
            </div>

            <div className='-translate-y-1'>
              <div className='flex flex-wrap items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 '>
                  Password
                </label>
                <div className='text-sm'>
                  <a href='#' className='font-semibold text-gray-200 hover:text-indigo-500'>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2.5'>
                <input
                  id='password'
                  type='password'
                  required
                  autoComplete='current-password'
                  placeholder='Current Password'
                  className='block w-full rounded-md border-0 px-4 py-2.5  shadow-sm ring-1 ring-inset ring-gray-300 text-black placeholder:text-gray-500 sm:text-sm sm:leading-6 focus:outline-blue-400 focus:bg-blue-50'
                  {...register('password')}
                />
              </div>
              <p className='text-red-400 px-1 py-2'>{errors.password?.message}</p>
            </div>

            <div>
              <button
                type='submit'
                className='py-2 flex w-full justify-center rounded-md bg-indigo-500 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-3 text-center text-sm '>
            Not a member?
            <a
              href='#'
              className='ml-4 font-semibold leading-6 text-gray-200 hover:text-indigo-500'
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
