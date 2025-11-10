const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-section-bg">
      <div className="section-container">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} Max Mena. Built with passion and code.</p>
          <p className="mt-2">
            Hosted on{" "}
            <a 
              href="https://pages.github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub Pages
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
