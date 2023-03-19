import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconLogo } from '../../assets/logo/IconLogo';

const Header = () => {
  const [login, setlogin] = useState(false);

  useEffect(() => {
    setlogin(false);
  }, []);

  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <Link href="/">
        <IconLogo />{' '}
      </Link>
      <ul>
        {login ? (
          <span>
            <li>
              <Link href="/logins">Corazon</Link>
            </li>
            <li>
              <Link href="/sign-up">bismal@gmail.com</Link>
            </li>
          </span>
        ) : (
          <span>
            <li>
              <Link href="/logins">Log In</Link>
            </li>
            <li>
              <Link href="/sign-up">Sign Up</Link>
            </li>
          </span>
        )}
      </ul>
    </div>
  );
};

export default Header;
