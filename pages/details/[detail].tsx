import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();
  return (
    <div>
      <h1>detail Details</h1>
      <p>detail ID: {router.query.detail}</p>
    </div>
  );
};

export default Detail;
