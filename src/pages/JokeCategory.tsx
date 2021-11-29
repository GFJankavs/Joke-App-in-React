import { Link, useParams } from 'react-router-dom';
import { useGetAllJokesQuery } from '../services/jokesAPI';
import { Joke } from '../types/interfaces';

import './styles/JokeCategory.scss';

const JokeCategory = () => {
  const { category } = useParams();
  const searchString = `${category}`;

  const { data, isLoading } = useGetAllJokesQuery(searchString);
  const jokeListData: Joke[] | undefined = data?.jokes;

  if (data?.error) {
    return (
      <div
        className="no-joke__container"
      >
        <h1
          className="no-joke__title"
        >
          Non-Existant Category
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
      {}
      <h1
        className="joke__title"
      >
        {`List of all ${category} jokes`}
      </h1>
      {jokeListData?.map((joke) => (
        <div
          className="joke"
          key={joke.id}
        >
          <h3
            className="joke-category__setup"
          >
            {joke.setup}
          </h3>
          <Link
            className="joke__link"
            to={`../${category}/${joke.id}`}
          >
            Press to See the Answer
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JokeCategory;
