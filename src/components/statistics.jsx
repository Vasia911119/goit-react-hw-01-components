import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title && title}</h2>
      <ul className="stat-list">
        {stats.map(elem => (
          <li className="item" key={elem.id} style={{backgroundColor: '#' + (Math.random().toString(16) + '000000').substring(2,8)}}>
            <span className="label">{elem.label}</span>
            <span className="percentage">{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired
};

export default Statistics;