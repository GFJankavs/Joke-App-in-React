import React from 'react';
import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import * as path from 'path';
import { useGetAllCategoriesQuery } from './services/jokesAPI';
import JokeCategory from './pages/JokeCategory';
import SingleJoke from './pages/SingleJoke';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';

const App = () => {
  const { data } = useGetAllCategoriesQuery(undefined);
  const categoryList = data?.categories;
  return (
    <div className="app">
      <nav
        className="navigation"
      >
        {categoryList?.map((category) => (
          <NavLink
            className={({ isActive }) => (
              isActive ? 'navigation__link navigation__link--active' : 'navigation__link'
            )}
            key={category}
            to={`/${category}`}
          >
            {category}
          </NavLink>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:category" element={<JokeCategory />} />
        <Route path="/:category/:id" element={<SingleJoke />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
