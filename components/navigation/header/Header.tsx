import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconLogo } from '../../assets/logo/IconLogo';
import { HeartSimple } from '../../assets/svg/HeartSimple';
import { User } from '../../assets/svg/User';

const Header = () => {
  const [login, setlogin] = useState(false);
  const [user, setUser] = useState('Juan');

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
          <div className="flex items-center gap-x-1 hover:cursor-pointer ">
            {' '}
            <span className="text-3xl text-app-blue ">+</span>{' '}
            <span className="text-app-blue "> crear publicación </span>
            <li className="inline">
              <Link className="m-3" href="/logins">
                <HeartSimple isActive={true} className="inline" /> Mi votos
              </Link>
            </li>
            <li className="inline">
              <Link href="/sign-up">
                <User isActive={true} className="inline" />
                <span> bismal@gmail.com</span>
              </Link>
            </li>
          </div>
        ) : (
          <span className="flex items-center gap-x-1 hover:cursor-pointer ">
            <span className="text-3xl text-app-blue ">+</span>{' '}
            <span className="text-app-blue "> crear publicación </span>
            <li className="inline mx-2">
              <Link href="/logins">Log In </Link>
            </li>
            <li className="inline">
              <Link href="/sign-up"> Sign Up</Link>
            </li>
          </span>
        )}
      </ul>
    </div>
  );
};

export default Header;
