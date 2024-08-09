const rootEl = document.getElementById('root');
const Root = ReactDOM.createRoot(rootEl);

const Card = ({ text = '' }) => {
  return (
    <section className="card">
      <span>{text}</span>
    </section>
  );
};

const CardsContainer = ({ children }) => {
  return <main className="container">{children}</main>;
};

function App() {
  return (
    <CardsContainer>
      <Card text="Card 1" />
      <Card text="Card 2" />
      <Card text="Card 3" />
    </CardsContainer>
  );
}

Root.render(
  <>
    <App />
  </>
);
