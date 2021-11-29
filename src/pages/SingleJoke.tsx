import './styles/SingleJoke.scss';
import { Link, useParams } from 'react-router-dom';
import { useGetJokeQuery } from '../services/jokesAPI';
import { Joke } from '../types/interfaces';

const SingleJoke = () => {
  const { category, id } = useParams();
  const searchParams = [category, id].map(String);

  const { data, isLoading } = useGetJokeQuery(searchParams);
  const jokeData: Joke | undefined = data;
  if (data?.error) {
    return (
      <div
        className="no-joke__container"
      >
        <h1
          className="no-joke__title"
        >
          Non-Existant Joke
        </h1>
        <h3
          className="no-joke__description"
        >
          No jokes were found that match your provided filter(s).
        </h3>
        <Link
          className="joke__link"
          to="/"
        >
          Return Home
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className="no-joke__container"
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div
      className="joke__container"
    >
      {isLoading ? <h1>Loading...</h1> : (
        <>
          <h1
            className="joke__title"
          >
            Joke Nr.
            {jokeData?.id}
          </h1>
          <h3
            className="joke__setup"
          >
            {jokeData?.setup}
          </h3>
          <div
            className="joke__delivery-container"
          >
            <h5
              className="joke__delivery"
            >
              {jokeData?.delivery}
            </h5>
            <img
              className="joke__delivery-image joke__delivery-image--left"
              src="https://cdn4.iconfinder.com/data/icons/emoji-66/64/21-haha-512.png"
              alt="laugh"
            />
            <img
              className="joke__delivery-image joke__delivery-image--right"
              src="https://cdn4.iconfinder.com/data/icons/emoji-66/64/21-haha-512.png"
              alt="laugh"
            />
          </div>
          <Link
            className="joke__link"
            to={`../${category}`}
          >
            Back To The List
          </Link>
        </>
      )}
    </div>
  );
};

export default SingleJoke;
