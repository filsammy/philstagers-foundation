export const metadata = { title: 'Contact — Philippine Stagers Foundation' };

export default function ContactPage() {
  return (
    <section>
      <div className="section-label">Get in touch</div>
      <h2>Bring our shows to your school, theater, or community.</h2>
      <div className="contact-wrap">
        <ul className="contact-list">
          <li>
            <span className="label">Bookings &amp; Inquiries</span>
            <a href="mailto:philippinestagers@gmail.com">philippinestagers@gmail.com</a>
          </li>
          <li>
            <span className="label">Headquarters</span>
            Balic-Balic, Sampaloc, Manila, Philippines
          </li>
          <li>
            <span className="label">School &amp; Tour Sales</span>
            <a href="mailto:philippinestagers@gmail.com?subject=School%20or%20Community%20Booking%20Inquiry">
              Request a show booking
            </a>
          </li>
        </ul>
        <ul className="contact-list">
          <li>
            <span className="label">Facebook</span>
            <a 
              href="https://facebook.com/philstagersofficial" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              facebook.com/PhilStagers
            </a>
          </li>
          <li>
            <span className="label">Instagram</span>
            <a 
              href="https://www.instagram.com/philstagers" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              @philstagers
            </a>
          </li>
          <li>
            <span className="label">YouTube</span>
            <a 
              href="https://www.youtube.com/@stagerschannel" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              PhilStagers Official
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}