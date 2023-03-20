import { useRouter } from 'next/router';

const User = () => {
  const router = useRouter();
  return (
    <div>
      <h1>User Details</h1>
      <p>user ID: {router.query.User}</p>
    </div>
  );
};

export default User;
