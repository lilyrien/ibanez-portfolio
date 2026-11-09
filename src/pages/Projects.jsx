const projects = [
  {
    title: 'BayanAlert',
    description: 'A web-based community emergency reporting and response system.',
  },
  {
    title: 'Student Academic Progress System',
    description: 'A web-based system for monitoring student academic performance and progress.',
  },
  {
    title: 'Personal Portfolio',
    description: 'My personal website showcasing my background, skills, and projects.',
  },
]

function Projects() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">MY WORK</p>
        <h1>Projects</h1>
        <p>These are simple project ideas and first drafts that I can improve over time.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">Project image placeholder</div>
            <div className="project-card-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
