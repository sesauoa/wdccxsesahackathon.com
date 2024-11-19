import CombinedLogos from "./CombinedLogos"

export default function Footer() {
  return (
    <footer className="footer footer-center text-base-content p-4">
      <div className="border-t border-white"></div>
      <aside>
        <CombinedLogos />
        <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
      </aside>
    </footer>
  )
}