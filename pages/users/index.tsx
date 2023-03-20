import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const Index: NextPageWithLayout = () => {
  return (
    <div>
      <div></div>
      Index
    </div>
  );
};

Index.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Index;
