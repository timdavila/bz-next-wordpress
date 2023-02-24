import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Button from 'components/Button';

export default function Home() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <div class="_2c_hero wf-section">
        <div class="_2c_hero_container bg-beige20 w-container">
          <div class="_2c_hero_left">
            <div class="rt-headingxlredgrad-headings w-richtext">
              <h1>Get Astonishingly Easy Cloud Storage</h1>
              <p>
                Build applications, safeguard files &amp; systems, and much more on the platform built for growth.
                <a href="https://www.backblaze.com/b2/cloud-storage.html">
                  <strong>
                    <br />
                  </strong>
                </a>
              </p>
            </div>
            <div class="_2c_hero_ctaspacer"></div>
            <Button href="b2/cloud-storage.html" class="cta cta-solid cta-solid-red w-inline-block">
              Meet B2 Cloud Storage
            </Button>
          </div>
          <div class="_2c_hero_right">
            <img
              src="images/bb-homepage-mainimage.png"
              loading="eager"
              alt=""
              sizes="(max-width: 728px) 100vw, (max-width: 767px) 728px, (max-width: 991px) 47vw, 42vw"
              srcSet="images/bb-homepage-mainimage-p-500.png 500w, images/bb-homepage-mainimage.png 728w"
              class="_2c_hero_image"
            />
          </div>
          <div class="_2c_hero_background">
            <div class="flamebg-beige"></div>
          </div>
        </div>
      </div>
      <div class="_2c_hero-image-text wf-section">
        <div class="_2c_hero-image-text_container w-container">
          <img
            src="images/bb-personalbu-archive-red-navy-1.png"
            loading="lazy"
            alt=""
            sizes="(max-width: 479px) 47vw, (max-width: 767px) 48vw, 49vw"
            srcset="images/bb-personalbu-archive-red-navy-1-p-500.png 500w, images/bb-personalbu-archive-red-navy-1-p-800.png 800w, images/bb-personalbu-archive-red-navy-1.png 940w"
            class="_2c_hero-image-text_image"
          />
          <div class="_2c_hero-image-text_right">
            <h2 class="_2c_hero-image-text_heading heading-xl text-red-gradient">...or Back Up Your Mac or PC.</h2>
            <p class="_2c_hero-image-text_body body-l-regular">
              Get peace of mind knowing your files are backed up securely in the cloud. Back up your{' '}
              <a href="https://www.backblaze.com/mac-online-backup.html">Mac</a> or{' '}
              <a href="https://www.backblaze.com/windows-online-backup.html">PC</a> for just $7/month.
            </p>

            <Button href="backup/personal/cloud-backup.html" class="cta cta-solid cta-solid-red w-inline-block">
              Meet Personal Backup
            </Button>
          </div>
        </div>
      </div>
      <div class="_3c_logowall wf-section">
        <div class="_5c_logowall_container w-container">
          <h2 class="_5c_logowall_heading heading-s">Trusted by Nearly 500,000 Customers</h2>
          <div class="w-layout-grid _5c_logowall_logos">
            <img
              src="images/logo-canal-1.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df484-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/logo-gradstone-institutes.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df485-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/logo-santacruz.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df486-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/logo-fortune.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df487-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/logo-complex.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df488-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/logo-shark_ninja.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df489-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/logo-pagerduty.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df48a-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/logo-charity_-water.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df48b-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/logo-goodeats.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df48c-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/logo-streamlabs.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df48d-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
          </div>
        </div>
      </div>
      <div class="_1c_bytecounter wf-section">
        <div class="_1c_bytecounter_container bg-red50 w-container">
          <div class="div-block-31">
            <div class="_1c_bytecounter_num heading-xl text-white">2,280,426,850,155,030,000</div>
            <div class="_1c_bytecounter_bytes text-white body-l-regular">bytes</div>
          </div>
          <div class="_1c_bytecounter_body body-l-regular text-white">
            Exabytes of data storage under management, and counting.
          </div>
        </div>
      </div>
      <div class="_2c_text-image _2c_text-image_textfirst wf-section">
        <div class="_2c_text-image_container w-container">
          <div class="_2c_text-image_text _2c_text-image_textfirst">
            <div class="rt-headingm-bodym w-richtext">
              <h2>Innovative Companies Store and Grow on the B2 Cloud Storage Platform</h2>
              <p>
                Organizations around the world choose Backblaze to solve for their use cases while improving their cloud
                OpEx vs. Amazon S3 and others.
              </p>
            </div>
            <div class="vertspacer-40px"></div>
            <div class="_2c_text-image_ctas">
              <Button href="b2/cloud-storage.html" class="cta cta-solid cta-solid-red w-inline-block">
                Meet B2 Cloud Storage
              </Button>
            </div>
          </div>
          <img
            src="images/Single-Cloud-Man.png"
            loading="lazy"
            alt="person interacting with cloud storage"
            sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 47vw, 432px"
            srcset="images/Single-Cloud-Man-p-500.png 500w, images/Single-Cloud-Man-p-800.png 800w, images/Single-Cloud-Man-p-1080.png 1080w, images/Single-Cloud-Man.png 1200w"
            class="_2c_text-image_image _2c_text-image_textfirst"
          />
        </div>
      </div>
      <div class="_2c_icon-text2x2 wf-section">
        <div class="_2c_icon-text2x2_container w-container">
          <div class="w-layout-grid _2c_2x2linkablecards_grid">
            <a
              id="w-node-_99347fc3-ee96-1c26-2be4-ab21ee39d9cf-429a8b3d"
              href="#"
              class="_2c_2x2_linkablecard bg-beige10 w-inline-block"
            >
              <img
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                loading="lazy"
                alt=""
                class="_2c_icon-text2x2_card_icon"
              />
              <div class="_2c_icon-text2x2_card_text">
                <h3
                  id="w-node-c7e08a85-6870-b8ce-2718-a1f10758126b-429a8b3d"
                  class="_2c_2x2cardsonly_card_heading heading-xs"
                >
                  Backup &amp; Archive
                </h3>
                <div class="_2c_icon-text-2x2_card_body body-m-regular">
                  Store securely to the cloud including safeguarding data on VMs, servers, NAS, and computers
                </div>
              </div>
              <img
                src="images/Right-Arrow_NavyBeige-100.svg"
                loading="lazy"
                alt="Product icon clickable arrow in beige"
                class="_2c_2x2linkablecard_arrow"
              />
            </a>
            <a
              id="w-node-_4a0cff0d-5e7d-181b-43d3-2a6a4977753e-429a8b3d"
              href="#"
              class="_2c_2x2_linkablecard bg-beige10 w-inline-block"
            >
              <img
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                loading="lazy"
                alt=""
                class="_2c_icon-text2x2_card_icon"
              />
              <div class="_2c_icon-text2x2_card_text">
                <h3
                  id="w-node-_4a0cff0d-5e7d-181b-43d3-2a6a49777541-429a8b3d"
                  class="_2c_2x2cardsonly_card_heading heading-xs"
                >
                  Develop
                </h3>
                <div class="_2c_icon-text-2x2_card_body body-m-regular">This is some text inside of a div block.</div>
              </div>
              <img
                src="images/Right-Arrow_NavyBeige-100.svg"
                loading="lazy"
                alt="Product icon clickable arrow in beige"
                class="_2c_2x2linkablecard_arrow"
              />
            </a>
            <a
              id="w-node-cf3e1e21-ff1b-f3c5-c29c-54590be4e33b-429a8b3d"
              href="#"
              class="_2c_2x2_linkablecard bg-beige10 w-inline-block"
            >
              <img
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                loading="lazy"
                alt=""
                class="_2c_icon-text2x2_card_icon"
              />
              <div class="_2c_icon-text2x2_card_text">
                <h3
                  id="w-node-cf3e1e21-ff1b-f3c5-c29c-54590be4e33e-429a8b3d"
                  class="_2c_2x2cardsonly_card_heading heading-xs"
                >
                  Content Delivery
                </h3>
                <div class="_2c_icon-text-2x2_card_body body-m-regular">This is some text inside of a div block.</div>
              </div>
              <img
                src="images/Right-Arrow_NavyBeige-100.svg"
                loading="lazy"
                alt="Product icon clickable arrow in beige"
                class="_2c_2x2linkablecard_arrow"
              />
            </a>
            <a
              id="w-node-f5471460-cca9-90cd-a48f-5cbc171c035e-429a8b3d"
              href="#"
              class="_2c_2x2_linkablecard bg-beige10 w-inline-block"
            >
              <img
                src="images/AE200898-55D2-4DD7-8CC7-B41233BBF0E4.JPG"
                loading="lazy"
                alt=""
                sizes="(max-width: 479px) 66px, 80px"
                srcset="images/AE200898-55D2-4DD7-8CC7-B41233BBF0E4-p-500.jpg 500w, images/AE200898-55D2-4DD7-8CC7-B41233BBF0E4-p-800.jpg 800w, images/AE200898-55D2-4DD7-8CC7-B41233BBF0E4-p-1080.jpg 1080w, images/AE200898-55D2-4DD7-8CC7-B41233BBF0E4.JPG 1600w"
                class="_2c_icon-text2x2_card_icon"
              />
              <div class="_2c_icon-text2x2_card_text">
                <h3
                  id="w-node-f5471460-cca9-90cd-a48f-5cbc171c0361-429a8b3d"
                  class="_2c_2x2cardsonly_card_heading heading-xs"
                >
                  Manage Media
                </h3>
                <div class="_2c_icon-text-2x2_card_body body-m-regular">This is some text inside of a div block.</div>
              </div>
              <img
                src="images/Right-Arrow_NavyBeige-100.svg"
                loading="lazy"
                alt="Product icon clickable arrow in beige"
                class="_2c_2x2linkablecard_arrow"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="_3c_logowall wf-section">
        <div class="_5c_logowall_container w-container">
          <h2 class="_5c_logowall_heading heading-s">Hundreds of Integrations</h2>
          <div class="w-layout-grid _5c_logowall_logos">
            <img
              src="images/home-logowall-arq.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df484-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/home-logowall-cloudflare.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df485-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/home-logowall-facebook.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df486-481df47f"
              alt="Facebook logo"
              class="_5c_logowall_logo"
            />
            <img
              src="images/home-logowall-fastly.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df487-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/home-logowall-iconik.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df488-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/home-logowall-msp360.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df489-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/home-logowall-QNAP.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df48a-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/home-logowall-rclone.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df48b-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/home-logowall-synology.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df48c-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
            <img
              src="images/home-logowall-veeam.svg"
              loading="lazy"
              id="w-node-_9a2292f7-c964-c652-5c88-2c32481df48d-481df47f"
              alt=""
              class="_5c_logowall_logo"
            />
          </div>
        </div>
      </div>
      <div class="_2c_text-image-cards wf-section">
        <div class="_2c_text-image-cards_container w-container">
          <div class="_2c_text-image-cards_left vertspacer-40px">
            <div class="rt-headingl-bodyl rt-leftaligned w-richtext">
              <h2>Unlimited Computer Backup</h2>
              <p>Unlimited files. Unlimited file size. Blazing fast.</p>
            </div>
            <div class="vertspacer-40px"></div>

            <Button href="backup/personal/cloud-backup.html" class="cta cta-solid cta-solid-red w-inline-block">
              Meet Personal Backup
            </Button>
            <div class="w-layout-grid _2c_text-image-cards_cards">
              <div id="w-node-_16f802ea-bea2-f022-efce-5656d2d7d52d-d2d7d522" class="_2c_text-image-cards_card">
                <img
                  src="images/iconr-cloud-files-checkmark-medium.png"
                  loading="lazy"
                  alt=""
                  class="_2c_2x2cardsonly_card_icon"
                />
                <div>
                  <div class="rt-headingxs-bodym w-richtext">
                    <h3>Access &amp; Restore</h3>
                    <p>
                      Use your data worldwide with iOS and Android apps, and a web restore to download what you need.
                    </p>
                  </div>
                </div>
              </div>
              <div id="w-node-_16f802ea-bea2-f022-efce-5656d2d7d534-d2d7d522" class="_2c_text-image-cards_card">
                <img
                  src="images/iconr-shield-flame-medium.png"
                  loading="lazy"
                  alt=""
                  class="_2c_2x2cardsonly_card_icon"
                />
                <div>
                  <div class="rt-headingxs-bodym w-richtext">
                    <h3>Your Data Is Safe</h3>
                    <p>
                      All data is stored in our secure data centers with 24-hour staff, biometric security, and
                      redundant power.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="_2c_text-image-cards_right">
            <img
              src="images/home-illustration-man-couch-dog-red.png"
              loading="lazy"
              alt=""
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 47vw, (max-width: 991px) 340px, 446px"
              srcset="images/home-illustration-man-couch-dog-red-p-500.png 500w, images/home-illustration-man-couch-dog-red-p-800.png 800w, images/home-illustration-man-couch-dog-red-p-1080.png 1080w, images/home-illustration-man-couch-dog-red.png 1400w"
              class="_2c_text-image-cards_image"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
