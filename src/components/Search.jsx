import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid';
import { getLocation, getReverseGeo } from '../services/API';
import { colors } from '../utils/NeonAnimations';
import LocationContext from '../utils/LocationContext';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  input {
    height: 1.3rem;
    font-size: 1.3rem;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const SearchDivider = styled.span`
  left: 50%;
  top: 10%;
  bottom: 40%;
  margin: 0 12px;
  border-left: 0.1rem solid ${colors.white};
  box-shadow: 0 0 0.2rem ${colors.white}, 0 0 0.2rem ${colors.white},
    0 0 2rem ${colors.neon_green}, 0 0 0.9rem ${colors.neon_green},
    0 0 2.8rem ${colors.neon_green};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
  color: ${colors.white};
  &:hover {
    cursor: pointer;
    color: ${colors.neon_green};
  }
`;

function Search() {
  const { curLoc, setCurLoc, setLat, setLng, setTitle } =
    useContext(LocationContext);
  const [newLoc, setNewLoc] = useState('');

  // for userLoc, get city, state... for normal search, get city, state or country
  const getLocTitle = useCallback(
    async (locData, isGeo) => {
      let city;
      let state;
      let country;
      let name;
      for (
        let i = 0;
        i < locData.results[0].address_components.length;
        i += 1
      ) {
        for (
          let j = 0;
          j < locData.results[0].address_components[i].types.length;
          j += 1
        ) {
          switch (locData.results[0].address_components[i].types[j]) {
            case 'establishment':
              name =
                locData.results[0].address_components[i].short_name;
              break;
            case 'park':
              name =
                locData.results[0].address_components[i].short_name;
              break;
            case 'point_of_interest':
              name =
                locData.results[0].address_components[i].short_name;
              break;
            case 'tourist_attraction':
              name =
                locData.results[0].address_components[i].short_name;
              break;
            case 'locality':
              city =
                locData.results[0].address_components[i].short_name;
              break;
            case 'administrative_area_level_1':
              state =
                locData.results[0].address_components[i].short_name;
              break;
            case 'country':
              country =
                locData.results[0].address_components[i].long_name;
              break;
            default:
            // do nothing
          }
        }
      }
      // prio city/state if using userlocation, else prio establishment if user input search
      if (isGeo) {
        if (city && state) {
          setTitle(`${city}, ${state}`);
        } else {
          setTitle(country);
        }
      } else if (!isGeo) {
        if (name) {
          setTitle(name);
        } else if (city && state) {
          setTitle(`${city}, ${state}`);
        } else {
          setTitle(country);
        }
      }
    },
    [setTitle],
  );
  // declare formSubmit before useEffect below
  const formSubmit = (e) => {
    e.preventDefault();
    setCurLoc(newLoc);
    setNewLoc('');
  };

  // geocode success
  const showPosition = async (position) => {
    const gLat = position.coords.latitude;
    const gLng = position.coords.longitude;
    const gLoc = await getReverseGeo(gLat, gLng);
    getLocTitle(gLoc, true);
    setLat(gLat);
    setLng(gLng);
  };

  // geocode error
  const posError = () => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((res) => {
          if (res.state === 'denied') {
            console.warn(
              'Enable location permissions for this website in your browser settings.',
            );
          }
        });
    } else {
      console.warn(
        'Unable to access your location. You can continue by submitting location manually.',
      );
    }
  };

  // get current location of user
  const getGeoLoc = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        showPosition,
        posError,
      );
    } else {
      console.warn('User location is unavailable');
    }
  };

  const renderForm = () => {
    const formElmts = [];

    formElmts.push(
      <form id="search" key="userSubmit">
        <label htmlFor="search" onSubmit={formSubmit}>
          <input
            placeholder="Search Location"
            className="searchInput"
            type="text"
            value={newLoc}
            onChange={(e) => setNewLoc(e.target.value)}
          />
        </label>
      </form>,
    );

    formElmts.push(<SearchDivider key={nanoid()} />);

    formElmts.push(
      <StyledFontAwesomeIcon
        key={nanoid()}
        icon={faLocationCrosshairs}
        onClick={() => getGeoLoc()}
        data-testid="user_geoloc"
      />,
    );

    return formElmts;
  };

  // call getLocation to set lat and lng values
  useEffect(() => {
    const getLatLon = async () => {
      if (curLoc) {
        const loc = await getLocation(curLoc);
        if (loc.status === 'OK') {
          setLat(loc.results[0].geometry.location.lat);
          setLng(loc.results[0].geometry.location.lng);
          getLocTitle(loc, false);
        } else {
          console.warn(`Unable to find ${curLoc}`);
        }
      }
    };
    getLatLon();
  }, [curLoc, getLocTitle, setLat, setLng]);

  // handle enter event key
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        formSubmit(event);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  return <FormWrapper>{renderForm()}</FormWrapper>;
}

export default Search;
