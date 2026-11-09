const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React Fundamentals',
  'Basic Programming',
  'Database Management',
  'Computer Hardware Troubleshooting',
  'Problem Solving',
  'Research and Technical Learning',
]

function About() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">ABOUT ME</p>
        <h1>A little about me</h1>
      </div>

      <p className="long-text">
        I am Jethro Maverick B. Ibanez, a BSIT 3D student at Gordon College. I
        am interested in technology, exploring new ideas, learning new skills,
        and discovering how software and digital tools work. I enjoy
        researching, brainstorming, and improving my knowledge in the field of
        Information Technology.
      </p>

      <h2>Draft skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  )
}

export default About
