import React, {PropTypes} from 'react';

const Info = ({text, link}) => {
  return (
    <div className="intro">
      <p>{text}
        {(link) ? <a href={link}>here</a> : null}.
      </p>
    </div>
  );
};

Info.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Info;
