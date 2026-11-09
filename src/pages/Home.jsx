import { Link } from 'react-router-dom'
import profilePlaceholder from '../assets/profile-placeholder.svg'

function Home() {
  return (
    <section className="home-page page-section">
      <div className="welcome-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I&apos;m Jethro Maverick B. Ibanez.</h1>
        <p className="student-details">
          Bachelor of Science in Information Technology<br />
          BSIT 3D · Gordon College
        </p>
        <p className="intro-text">
          I am an IT student interested in technology, software, and learning
          how digital tools can help solve everyday problems.
        </p>
        <div className="button-group">
          <Link className="button" to="/about">Learn more about me</Link>
          <Link className="text-link" to="/projects">View my projects →</Link>
        </div>
      </div>

      <div className="profile-placeholder">
        <img src={profilePlaceholder} alt="Placeholder profile" />
        <p>Profile picture placeholder</p>
      </div>
    </section>
  )
}

export default Home
