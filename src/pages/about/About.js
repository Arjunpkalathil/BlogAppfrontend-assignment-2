import React from 'react';
import './About.css'
const About = () => {
  return <div className='AboutOuter'>
      <article className='AboutContainer'>
        <div>
          <h1 className='Aboutheading'>About</h1>
          <hr />
        </div>
        <img className='AboutImg' src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=" alt="" />
      <div className='AboutFooter'>
        <p>Publish your passions your way. Whether you'd like to share your knowledge, experiences or the latest news, create a unique and beautiful blog for free.</p>
      </div>
      </article>
  </div>;
};

export default About;
