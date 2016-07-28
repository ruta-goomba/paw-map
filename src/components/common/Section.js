import React, {PropTypes} from 'react';
import SectionHeader from './SectionHeader';

const Section = ({header_content, children}) => {
    return (
      <div className="section">
        <SectionHeader content={header_content}/>
        {children}
      </div>
    );
};

Section.propTypes = {
  header_content: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
