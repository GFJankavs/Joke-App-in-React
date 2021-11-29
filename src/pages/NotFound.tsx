import { Link } from 'react-router-dom';

import './styles/NotFound.scss';

const NotFound = () => (
  <div
    className="not-found__container"
  >
    <h1
      className="not-found__title"
    >
      Error 404
    </h1>
    <img
      className="not-found__image"
      src="https://media.istockphoto.com/vectors/dying-comedian-vector-id472384851?k=20&m=472384851&s=612x612&w=0&h=NrmWvX-rid6aAMg3N8L-04Z4ODvJGtEyvXNExp45okI="
      alt="throw tomatos"
    />
    <p
      className="not-found__description"
    >
      Unfortunately, such web page does not exist.
      <br />
      <br />
      Check other pages before the audience gets mad.
    </p>
    <Link
      className="joke__link"
      to="/"
    >
      Return Home
    </Link>
  </div>
);

export default NotFound;
