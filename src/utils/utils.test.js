import { string } from 'prop-types';
import {
  convertUnixDate,
  parseDate,
  addZero,
  convertTime,
  createWeatherObj,
} from '../services/Functions';

describe('convertUnixDate', () => {
  test('it works with a unix input as string', () => {
    const input = '1655176547';
    const returnVal = convertUnixDate(input);
    expect(returnVal).toEqual('6/13/2022');
  });
});

describe('parseDate', () => {
  test('it works with a standard date to convert to an object', () => {
    const input = '6/13/2022';
    const returnVal = parseDate(input);
    expect(returnVal).toMatchObject({
      day: '13',
      dayOfWeek: 'Monday',
      month: '6',
      year: '2022',
    });
  });
});

describe('parseDate', () => {
  test('it adds a zero to a day value less than 10', () => {
    const input = '9';
    const returnVal = addZero(input);
    expect(returnVal).toEqual('09');
  });

  test('it does not add a zero to a day value greater than or equal to 10', () => {
    const input = '10';
    const returnVal = addZero(input);
    expect(returnVal).toEqual('10');
  });
});

describe('convertTime', () => {
  test('it converts unix to standard to meridiem time', () => {
    const input = '1655176547';
    const returnVal = convertTime(input);
    expect(returnVal).toEqual('08:15 PM');
  });
});

describe('createWeatherObj', () => {
  test('it converts weather parameters into an object', () => {
    const inputTitle = 'Santa Clara, CA';
    const inputData = {
      temp: '73.22',
      weather: [
        {
          icon: '01d',
          description: 'clear sky',
        },
      ],
    };
    const inputLat = '37.3541';
    const inputLng = '121.9552';
    const returnVal = createWeatherObj(
      inputData,
      inputTitle,
      inputLat,
      inputLng,
    );
    expect(returnVal).toMatchObject({
      cityTitle: 'Santa Clara, CA',
      temp: '73.22',
      img: 'http://openweathermap.org/img/wn/01d.png',
      desc: 'clear sky',
      cityLat: '37.3541',
      cityLng: '121.9552',
    });
  });
});
