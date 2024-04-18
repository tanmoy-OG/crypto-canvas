import { SignUp as SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className='flex w-full items-center justify-center pt-20'>
      <SignIn />
    </div>
  );
};

export default SignInPage;
