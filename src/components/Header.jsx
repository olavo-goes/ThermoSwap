// src/components/Header.jsx
export default function Header({ title, subtitle }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
