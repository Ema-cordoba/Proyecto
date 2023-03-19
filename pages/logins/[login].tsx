import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const Login: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login Details</h1>
      <p>Login ID: {router.query.login}</p>
    </div>
  );
};

Login.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Login;
