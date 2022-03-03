import colors from '../constants/colors';
import data from '../data/data.json';

const valueMapHourOfReservation = new Map();

const listNumber = Array(9)
  .fill(0)
  .map((_, index) => {
    return index + 8;
  });

const dataReservation = [
  ...data.data[0].appoitment_calendar,
  ...data.data[1].appoitment_calendar,
];

const mapHourOfReservation = () => {
  listNumber.map(e => {
    dataReservation.map(f => {
      const hourOfReservation = new Date(f.start_time).getHours();
      if (hourOfReservation == e) {
        if (valueMapHourOfReservation.get(e)) {
          valueMapHourOfReservation.set(e, [
            ...valueMapHourOfReservation.get(e),
            f,
          ]);
        } else {
          valueMapHourOfReservation.set(e, [f]);
        }
      } else if (hourOfReservation != e) {
        if (valueMapHourOfReservation.get(e)) {
          valueMapHourOfReservation.set(e, [
            ...valueMapHourOfReservation.get(e),
          ]);
        } else {
          valueMapHourOfReservation.set(e);
        }
      }
    });
  });
};

const checkColor = status => {
  if (status == 'pending') {
    return colors.pink;
  } else if (status == 'passed') {
    return colors.grey;
  } else if (status == 'approved') {
    return colors.green;
  }
};

const shortenTheWord = (content, type) => {
  if (type == 1) {
    return content.slice(0, 30) + '...';
  } else if (type == 2) {
    return content.slice(0, 20) + '...';
  } else {
    return '';
  }
};

const shortenTheName = (content, type) => {
  const arrayName = content.split(' ');
  console.log(arrayName);
  if (type == 1) {
    return content;
  } else {
    return arrayName[arrayName.length - 1];
  }
};

const parseTime = time => {
  const parseTime = new Date(time);
  return parseTime.getHours() + ':00';
};

export {
  valueMapHourOfReservation,
  mapHourOfReservation,
  parseTime,
  checkColor,
  shortenTheWord,
  shortenTheName,
};
