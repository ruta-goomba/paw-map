import React, {PropTypes} from 'react';

const SectionHeader = ({content}) => {
  return (
    <div className="section__header">
      <h3>{content}</h3>
    </div>
  );
};

SectionHeader.propTypes = {
  content: PropTypes.string.isRequired
};

export default SectionHeader;
