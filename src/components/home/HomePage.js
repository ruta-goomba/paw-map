import React from 'react';
import Intro from '../common/Intro';
import Section from '../common/Section';

class HomePage extends React.Component {
  render(){
    return (
      <div>
        <Intro/>
        <Section
          header_content="UK crime heatmaps by crime type (excluding Scotland) for January 2016"
          inner_content_left=""
          inner_content_right=""
        />
        <Section
          header_content="UK crime charts by crime type (excluding Scotland) for January 2016"
          inner_content_left=""
          inner_content_right=""
        />
      </div>
    );
  }
}

export default HomePage;
