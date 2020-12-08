import PropTypes from 'prop-types';

const bookItem = PropTypes.shape({
  title: PropTypes.string,
  id: PropTypes.string,
  age: PropTypes.string,
  count: PropTypes.string,
  date: PropTypes.date,
  isbn: PropTypes.string,
  publishing: PropTypes.string,
  autorList: PropTypes.arrayOf(
    PropTypes.shape({
      family: PropTypes.string,
      name: PropTypes.string
    })
  )
});

export {bookItem};