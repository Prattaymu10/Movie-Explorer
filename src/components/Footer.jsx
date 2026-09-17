export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>🎬</span>
          <span className="footer-brand-name">MovieExplorer</span>
        </div>
        <p className="footer-copy">
          © 2026 MovieExplorer. Data courtesy of TVMaze.
        </p>
        <a
          href="https://github.com/Prattaymu10"
          target="_blank"
          className="footer-link"
        >
         GitHub
        </a>
      </div>
    </footer>
  );
}
