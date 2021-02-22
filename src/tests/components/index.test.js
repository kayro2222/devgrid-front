import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import Header from 'components/Header';
import Weather from 'components/Weather';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders <Header /> component', () => {
  const { getByText } = render(<Header />);

  expect(getByText(/Weather Buddy/i)).toBeInTheDocument();
});

test('Renders <Weather /> component', async () => {
  const mockWeather = {
    weather: [
      {
        id: 800,
        main: 'Clear',
      },
    ],
    main: {
      temp: -7.12,
    },
    name: 'Rome',
  };

  const { getByText } = render(<Weather weather={mockWeather} />);

  expect(
    getByText(mockWeather.name)
    && getByText(mockWeather.weather[0].main)
    && getByText(`${Math.floor(mockWeather.main.temp)}ºC`),
  ).toBeInTheDocument();
});
