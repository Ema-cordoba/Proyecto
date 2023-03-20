import { useRouter } from 'next/router';

const Publication = () => {
  const router = useRouter();
  return (
    <div>
      <h1>publication Details</h1>
      <p>publication ID: {router.query.Publication}</p>
    </div>
  );
};

export default Publication;
