import wdccLogo from "../../../public/logos/clubs/wdcc.png";
import sesaLogo from "../../../public/logos/clubs/sesa.svg";

export default function CombinedLogos() {
  return (
    <div className="flex items-center">
      <a href="https://wdcc.co.nz" target="_blank" className="text-xl">
        <img
          src={wdccLogo.src} alt="WDCC Logo" className="h-7 mt-2 mr-1" />
      </a>
      <div className="relative w-4 h-4 mx-3">
        <div className="absolute w-full h-0.5 bg-white rotate-45 top-1/2 left-0 transform -translate-y-1/2"></div>
        <div className="absolute w-full h-0.5 bg-white -rotate-45 top-1/2 left-0 transform -translate-y-1/2"></div>
      </div>
      <a href="https://sesa.org.nz/" target="_blank" className="text-xl">
        <img
          src={sesaLogo.src} alt="SESA Logo" className="h-12" />
      </a>
    </div>
  )
}