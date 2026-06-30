"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">AutoMarket</div>
            <p className="footer-desc">
              The better way to buy and sell cars online. Verified dealers, transparent pricing, and home delivery.
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Buy</h4>
            <Link href="/search" className="footer-link">Search Cars</Link>
            <Link href="/finance" className="footer-link">Car Finance</Link>
            <Link href="/part-exchange" className="footer-link">Part Exchange</Link>
            <Link href="/reviews" className="footer-link">Buyer Reviews</Link>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Sell</h4>
            <Link href="/sell" className="footer-link">Sell Your Car</Link>
            <Link href="/dealer-signup" className="footer-link">Dealer Sign Up</Link>
            <Link href="/dealer-portal" className="footer-link">Dealer Portal</Link>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/careers" className="footer-link">Careers</Link>
            <Link href="/press" className="footer-link">Press</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AutoMarket. All rights reserved.</span>
          <div className="footer-legal">
            <Link href="/terms" className="footer-link">Terms</Link>
            <Link href="/privacy" className="footer-link">Privacy</Link>
            <Link href="/cookies" className="footer-link">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
