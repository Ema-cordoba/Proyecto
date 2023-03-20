import { FC } from 'react';

interface IUser extends React.ComponentPropsWithoutRef<'svg'> {
  isActive: boolean;
}

export const User: FC<IUser> = ({ isActive = false, ...svgProps }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <g clipPath="url(#clip0_3321_13598)">
        <path
          d="M10.892 20.3778L10.8918 20.378C10.6857 20.7135 10.583 21.0766 10.583 21.4833V22.25C10.583 22.5764 10.6906 22.8375 10.9268 23.0738C11.1622 23.3092 11.4229 23.4167 11.7497 23.4167H23.2497C23.5763 23.4167 23.8374 23.3093 24.0735 23.0738C24.3089 22.8378 24.4163 22.5766 24.4163 22.25V21.4833C24.4163 21.0766 24.3136 20.7135 24.1075 20.378L24.1074 20.3778C23.8988 20.0379 23.6296 19.7873 23.2927 19.6121C22.3519 19.1422 21.4004 18.7916 20.4375 18.5581C19.4733 18.3249 18.4944 18.2083 17.4997 18.2083C16.5049 18.2083 15.5261 18.3249 14.5618 18.5581L10.892 20.3778ZM10.892 20.3778C11.1006 20.0379 11.3697 19.7874 11.7066 19.6122M10.892 20.3778L11.7066 19.6122M11.7066 19.6122C12.6473 19.1422 13.5987 18.7917 14.5614 18.5582L11.7066 19.6122ZM17.4997 15.75C16.646 15.75 15.9339 15.4548 15.3227 14.8436C14.7115 14.2325 14.4163 13.5204 14.4163 12.6667C14.4163 11.813 14.7115 11.1009 15.3227 10.4897C15.9339 9.87855 16.646 9.58334 17.4997 9.58334C18.3533 9.58334 19.0655 9.87855 19.6766 10.4897C20.2878 11.1009 20.583 11.813 20.583 12.6667C20.583 13.5204 20.2878 14.2325 19.6766 14.8436C19.0655 15.4548 18.3533 15.75 17.4997 15.75Z"
          stroke="white"
          strokeWidth="1.5"
        />
      </g>
      <circle cx="17" cy="17" r="16.25" stroke="white" strokeWidth="1.5" />
      <defs>
        <clipPath id="clip0_3321_13598">
          <rect
            width="23"
            height="23"
            fill="white"
            transform="translate(6 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default User;
