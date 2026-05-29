import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <section className="container py-5">
      <h1 className="mb-4">OctoFit Tracker</h1>
      <p className="lead">
        A modern React 19 + Vite frontend for tracking workouts, teams, and leaderboards.
      </p>
      <p>
        Frontend running on <strong>http://localhost:5173</strong>.
      </p>
      <Link to="/dashboard" className="btn btn-primary">
        Open Dashboard
      </Link>
    </section>
  );
}

function Dashboard() {
  return (
    <section className="container py-5">
      <h1 className="mb-4">Tracker Dashboard</h1>
      <p>Backend API is expected on <strong>http://localhost:8000</strong>.</p>
      <Link to="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit Tracker
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
