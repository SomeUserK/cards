const rootEl = document.getElementById('root');
const Root = ReactDOM.createRoot(rootEl);

/**
 *
 * @param {{text: string}} props
 */
const Card = props => (
  <section className="card">
    <p class="title">{props.text}</p>
  </section>
);

const Container = ({ children }) => (
  <main className="container">{children}</main>
);

const App = () => (
  <Container>
    <Card text="Rick Sanchez" />
    <Card text="Morty Smith" />
    <Card text="Summer Smith" />
    <Card text="Beth Smith" />
    <Card text="Joe Doe" />
    <Card text="Jane Doe" />
    <Card text="John Doe" />
  </Container>
);

Root.render(
  <>
    <App />
  </>
);
