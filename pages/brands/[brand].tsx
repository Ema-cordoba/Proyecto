import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const Brand: NextPageWithLayout = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>brand Details</h1>
      <p>brand ID: {router.query.brand}</p>
    </div>
  );
};

Brand.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Brand;
