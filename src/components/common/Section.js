import React, {PropTypes} from 'react';
import SectionHeader from './SectionHeader';

const Section = ({header_content}) => {
    return (
      <div className="section">
        <SectionHeader content={header_content}/>
        <div className="section__sub"></div>
        <div className="section__sub"></div>
      </div>
    );
};

Section.propTypes = {
  header_content: PropTypes.string.isRequired
};

export default Section;
