const Footer = () => {
  return (
    <div class="footer-light footer bg-beige10 wf-section">
      <div class="footer_container w-container">
        <div class="footer_left">
          <div class="body-m-bold">Backblaze</div>
          <div class="body-m-regular">
            A Publicly Traded Company (
            <a href="#" class="footer_textlink">
              BLZE
            </a>
            )
          </div>
        </div>
        <div class="footer_right">
          <a href="company/about.html" class="footer_link">
            Company
          </a>
          <a href="company/contact.html" class="footer_link">
            Contact
          </a>
          <a href="#" class="footer_link">
            Terms &amp; Privacy
          </a>
          <div class="footer_text">
            <strong>© 2022</strong>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
