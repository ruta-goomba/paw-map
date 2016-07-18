import React, {PropTypes} from 'react';

const SectionContent = ({content}) => {
  return (
    <div className="section__content">
      {content}
    </div>
  );
};

SectionContent.propTypes = {
  content: PropTypes.string.isRequired
};

export default SectionContent;
