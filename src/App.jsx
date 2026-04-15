import './App.css'
import profileImg from './assets/hero.png'

function App() {
  return (
    <div className="portfolio">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Student Portfolio</p>
          <h1>Hi, I'm Godfrey Gaba</h1>
          <p className="hero-subtitle">
            I am 21 years old from Brgy. 9, living with my parents while pursuing my studies.
          </p>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Godfrey Gaba" />
        </div>
      </header>

      <main>
        <section className="card">
          <h2>Who I Am</h2>
          <p>
            I am 21 years old from Brgy. 9, living with my parents while pursuing my studies.
          </p>
        </section>

        <section className="card">
          <h2>Interests & Goals</h2>
          <p>
            I am currently focused on my subjects. My primary goal is to pass this semester and graduate successfully.
            Outside of academics, I enjoy exploring the world of Gaming and Digital Creativity.
          </p>
        </section>

        <section className="card skill-grid">
          <div>
            <h2>What I Know</h2>
            <h3>Languages</h3>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <div>
            <h3>Tools & Frameworks</h3>
            <p>Git, VS Code, Figma</p>
          </div>
        </section>

        <section className="card project-card">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>Text to Image AI Generator</h3>
            <p><strong>Role:</strong> Documents</p>
            <p><strong>Tech Used:</strong> JavaScript, Google OAuth, Pollinations API</p>
            <p>
              A simple, accessible website that allows users to generate high-quality AI images for free using text prompts.
            </p>
          </div>
        </section>

        <section className="card reflection-card">
          <h2>Learning Reflection</h2>
          <div className="reflection-grid">
            <div>
              <h3>Technologies Used</h3>
              <p>
                I used HTML and CSS for the structure and styling because i only knew the basics.
              </p>
            </div>
            <div>
              <h3>The Easiest Parts</h3>
              <p>
                Designing and choosing the perfect colors of background and the part of About Me.
              </p>
            </div>
            <div>
              <h3>The Challenges</h3>
              <p>
                Coding is the most challenging part because sometimes i forgot the codes.
              </p>
            </div>
            <div>
              <h3>Future Learning</h3>
              <p>
                I am highly interested in learning AR because of what AR is capable of enhancing the real world using smartphones and other devices.
              </p>
            </div>
          </div>
        </section>

        <section className="card future-card">
          <h2>Future Vision</h2>
          <p>
            In the future, I want to build applications that solve local problems, such as community management systems or tools that help students track their academic progress.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>Built with React and Vite.</p>
      </footer>
    </div>
  )
}

export default App
