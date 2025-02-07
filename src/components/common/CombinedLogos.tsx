import wdccLogo from '../../../public/logos/clubs/wdcc.png';
import sesaLogo from '../../../public/logos/clubs/sesa.svg';

export default function CombinedLogos() {
  return (
    <div className="flex items-center">
      <a href="https://wdcc.co.nz" target="_blank" className="text-xl">
        <img src={wdccLogo.src} alt="WDCC Logo" className="mr-1 h-6" />
      </a>
      <div className="relative mx-3 h-4 w-4">
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rotate-45 transform bg-white"></div>
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 -rotate-45 transform bg-white"></div>
      </div>
      <a href="https://sesa.org.nz/" target="_blank" className="text-xl">
        <img src={sesaLogo.src} alt="SESA Logo" className="h-14" />
      </a>
    </div>
  );
}
