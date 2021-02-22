import React, { useState } from 'react';
import Header from 'components/Header';
import Weather from 'components/Weather';
import './index.css';
import api from 'services/api';

function Home() {
  const [weathers, setWeathers] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const getCity = async (city) => {
    if (city) {
      await api.get(`/weather/${city}`)
        .then((response) => {
          setErrorMessage(null);
          setWeathers(response?.data);
        }).catch((error) => {
          if (error.response) {
            setErrorMessage(error?.response.data.message);
          } else {
            setErrorMessage('Sorry. A system problem has ocurred');
          }
        });
    }
  };

  return (
    <div className="view-all">
      <Header />
      <div className="h-view">
        <div className="d-flex">
          <div className="col-flex">
            <div className="m-mobile">
              <span className="s-input">
                How is the weather in
                {' '}
                <input
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      getCity(e.target.value);
                    }
                  }}
                  onBlur={(e) => getCity(e.target.value)}
                />
                {' '}
                now?
              </span>
            </div>
            {errorMessage && (
            <div className="m-mobile">
              <p className="error-message">{errorMessage}</p>
            </div>
            )}
            {weathers && !errorMessage && (
              <div className="m-mobile">
                <Weather weather={weathers[0]} />
              </div>
            )}
            {weathers ? (
              <div className="all-weathers m-mobile">
                {weathers.map((weather) => (
                  <Weather key={weather.name} weather={weather} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
