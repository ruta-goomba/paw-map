import React, {PropTypes} from 'react';
import SectionHeader from './SectionHeader';
import SectionContent from './SectionContent';

const Section = ({header_content, inner_content_left, inner_content_right}) => {
    return (
      <div className="section">
        <SectionHeader content={header_content}/>
        <SectionContent content={inner_content_left}/>
        <SectionContent content={inner_content_right}/>
      </div>
    );
};

Section.propTypes = {
  header_content: PropTypes.string.isRequired,
  inner_content_left: PropTypes.string.isRequired,
  inner_content_right: PropTypes.string.isRequired
};

export default Section;
