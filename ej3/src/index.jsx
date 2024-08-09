const rootEl = document.getElementById('root');
const Root = ReactDOM.createRoot(rootEl);

//

const SkillBox = ({ title, percent, delay = 0.1 }) => (
  <section className="skill-box">
    <span className="title">{title}</span>

    <div className="skill-bar">
      <span
        className="skill-per"
        style={{ width: `${percent}%`, animationDelay: `${delay}s` }}
      >
        <span className="tooltip">{percent}%</span>
      </span>
    </div>
  </section>
);

const Container = ({ centerOnScreen = false, children }) => (
  <div className={centerOnScreen ? ' center' : ''}>
    <main className="container">{children}</main>
  </div>
);

const App = () => (
  <Container centerOnScreen>
    <SkillBox title="HTML" percent="90" delay={0.1} />
    <SkillBox title="CSS" percent="60" delay={0.2} />
    <SkillBox title="JS" percent="110" delay={0.3} />
  </Container>
);

Root.render(<App />);
