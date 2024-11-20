import CombinedLogos from './CombinedLogos';

export default function Footer() {
  return (
    <footer className="footer-center p-6 text-base-content">
      <div className="mb-6 h-[0.1] w-[90%] bg-white"></div>
      <aside>
        <CombinedLogos />
        <div className="flex space-x-8">
          <a
            href="https://wdcc.co.nz"
            target="_blank"
            className="hover:underline"
          >
            wdcc.co.nz
          </a>
          <a
            href="https://sesa.org.nz/"
            target="_blank"
            className="hover:underline"
          >
            sesa.org.nz
          </a>
        </div>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
      </aside>
    </footer>
  );
}
