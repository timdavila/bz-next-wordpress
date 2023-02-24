const Nav = () => {
  return (
    <>
      <div class="navbar wf-section">
        <div class="navbar_container w-container">
          <a href="index.html" aria-current="page" class="navbar_logo w-nav-brand w--current">
            <img
              src="images/logo-backblaze-flame-header.4851ea2289eaf4242079c6dcd0acb1be.png"
              loading="eager"
              alt=""
              class="navbar_logo_image"
            />
          </a>
          <nav role="navigation" class="nav-menu w-nav-menu">
            <div class="navbar_links-left">
              <a href="b2/cloud-storage.html" class="navbar_link-lg w-nav-link">
                B2 Cloud Storage
              </a>
              <a href="backup/business/business-backup.html" class="navbar_link-lg w-nav-link">
                Business Backup
              </a>
              <a href="#" class="navbar_link-lg w-nav-link">
                Personal Backup
              </a>
            </div>
            <div class="navbar_links-right">
              <a href="#" class="navbar_link-sm navbar_link-sm-blue w-nav-link">
                Partners
              </a>
              <a href="#" class="navbar_link-sm navbar_link-sm-blue w-nav-link">
                Blog
              </a>
              <a href="#" class="navbar_link-sm navbar_link-sm-blue w-nav-link">
                Help
              </a>
              <a href="#" class="navbar_link-sm navbar_link-sm-red w-nav-link">
                Sign In
              </a>
            </div>
          </nav>
          <div class="navbar_menubtn w-nav-button">
            <div class="div-block-47">
              <div class="w-embed"></div>
              <div class="navbar_menubtn_icon">
                <div class="navbar_menubtn_icon_line1 navbar_menubtn_icon_line"></div>
                <div class="navbar_menubtn_icon_line3 navbar_menubtn_icon_line"></div>
                <div class="navbar_menubtn_icon_line2 navbar_menubtn_icon_line"></div>
              </div>
              <div class="div-block-48">
                <div class="navbar_menubtn_label-close navbar_menubtn_label">Close</div>
                <div class="navbar_menubtn_label-menu navbar_menubtn_label">Menu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbarspacer"></div>
      <div id="alert-primary" class="alert-primary alert wf-section">
        <div class="html-embed-2 w-embed w-script"></div>
        <div class="alert_container w-container">
          <div class="alert_text body-s-regular text-white">
            Migrate on Us - move to Backblaze B2 with egress and transfer.
          </div>
          <a href="#" class="cta cta-text w-inline-block">
            <div class="cta-label cta-label-white">Learn More</div>
            <div class="cta-arrow-white-svg-embed cta-arrow cta-text-arrow w-embed">
              <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5077 19.3916C14.1172 19.7821 13.484 19.7821 13.0935 19.3916C12.703 19.0011 12.703 18.3679 13.0935 17.9774L18.0712 12.9996H3.51489C2.96261 12.9996 2.51489 12.5519 2.51489 11.9996C2.51489 11.4473 2.96261 10.9996 3.51489 10.9996H18.0709L13.0935 6.02217C12.703 5.63165 12.703 4.99848 13.0935 4.60796C13.484 4.21743 14.1172 4.21743 14.5077 4.60796L21.1772 11.2775C21.3672 11.4595 21.4855 11.7157 21.4855 11.9996C21.4855 12.1697 21.443 12.3299 21.368 12.4702C21.3287 12.5439 21.2795 12.6137 21.2204 12.6777C21.2111 12.6878 21.2015 12.6978 21.1918 12.7075M21.1918 12.7075L14.5077 19.3916Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
            <div class="cta-underline cta-underline-white"></div>
          </a>
          <a href="#" class="alert-primary_closebtn close-btn w-inline-block">
            <img
              src="images/Close-Window_ColorWhite.svg"
              loading="lazy"
              alt="Product icon close window in white"
              class="alert_closebtn_icon"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
