import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h1>
      Page is not Found go to <Link to="/">Home page</Link>
    </h1>
  );
};

export default NotFound;
