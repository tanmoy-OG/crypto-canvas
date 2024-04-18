import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/ui/button';

const AuthButtons: FC = () => {
  return (
    <div className='flex gap-4'>
      <Button asChild variant='secondary'>
        <Link href='/sign-in'>Sign In</Link>
      </Button>

      <Button variant='outline'>
        <Link href='/sign-up'>Sign Up</Link>
      </Button>
    </div>
  );
};

export default AuthButtons;
