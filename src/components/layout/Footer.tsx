import CombinedLogos from '../common/CombinedLogos';

export default function Footer() {
  return (
    <footer className="responsive-fullwidth text-base-conten flex flex-col items-center justify-center p-6">
      <div className="mb-6 h-[0.1px] w-[90%] bg-white"></div>
      <aside>
        <CombinedLogos />
        <div className="flex justify-center space-x-8 *:text-white">
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
        <p className="text-center text-white">
          Copyright © {new Date().getFullYear()} - All rights reserved.
        </p>
      </aside>
    </footer>
  );
}
