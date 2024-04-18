import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='flex w-full items-center justify-center pt-20'>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
