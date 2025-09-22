import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/p1.jpg'
import IMG2 from '../../assets/p2.jpg'
import IMG3 from '../../assets/p3.jpg'
import IMG4 from '../../assets/p4.jpg'
import IMG5 from '../../assets/p5.jpg'
import IMG6 from '../../assets/p6.jpg'

const data=[
  {
    "id": 1,
    "image": IMG1,
    "title": "Charts templates & infographics in Figma",
    "GitHub": "https://github.com",
    "demo": "https://dribbble.com/shots/path-of-video-1"
  },
  {
    "id": 2,
    "image": IMG2,
    "title": "Creative UI Design Kit for Web",
    "GitHub": "https://github.com",
    "demo": "https://dribbble.com/shots/path-of-video-2"
  },
  {
    "id": 3,
    "image": IMG3,
    "title": "Modern Dashboard UI in Figma",
    "GitHub": "https://github.com",
    "demo": "https://dribbble.com/shots/path-of-video-3"
  },
  {
    "id": 4,
    "image": IMG4,
    "title": "E-commerce Product Templates",
    "GitHub": "https://github.com",
    "demo": "https://dribbble.com/shots/path-of-video-4"
  },
  {
    "id": 5,
    "image": IMG5,
    "title": "Portfolio Website Design",
    "GitHub": "https://github.com",
    "demo": "https://dribbble.com/shots/path-of-video-5"
  },
  {
    "id": 6,
    "image": IMG6,
    "title": "Interactive Prototyping UI",
    "GitHub": "https://github.com",
    "demo": "https://dribbble.com/shots/path-of-video-6"
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>
        {
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        }
        )
      }

      
      </div>
    </section>
  )
}

export default Portfolio
