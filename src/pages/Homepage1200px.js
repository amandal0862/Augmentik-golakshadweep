import { Button, FormControlLabel, Radio } from "@mui/material";
import styles from "./Homepage1200px.module.css";

const Homepage1200px = () => {
  return (
    <div className={styles.homepage1200px}>
      <div className={styles.homepage1200pxChild} />
      <div className={styles.illus}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/vector-99.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <button className={styles.loginSignupButton}>
        <div className={styles.loginWrapper}>
          <a className={styles.login}>Login</a>
        </div>
        <button className={styles.signUpWrapper}>
          <div className={styles.signUp}>Sign up</div>
        </button>
      </button>
      <img className={styles.golLogo1Icon} alt="" src="/gollogo-1@2x.png" />
      <div className={styles.navVar}>
        <a className={styles.findReservations}>Find Reservations</a>
        <a className={styles.packagesParent}>
          <div className={styles.packages}>Packages</div>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </a>
        <a className={styles.aboutLakshadweepParent}>
          <div className={styles.packages}>About Lakshadweep</div>
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        </a>
        <a className={styles.findReservations}>About Us</a>
        <a className={styles.findReservations}>Gol</a>
        <a className={styles.findReservations}>Support</a>
      </div>
      <div className={styles.heading}>
        <h1 className={styles.theExoticLakshadweepContainer}>
          <span className={styles.theExoticLakshadweepContainer1}>
            <p className={styles.theExotic}>The Exotic</p>
            <p className={styles.lakshadweep}>Lakshadweep</p>
            <p className={styles.theExotic}>Islands</p>
          </span>
        </h1>
        <button className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.visitParent}>
            <div className={styles.visit}>Visit</div>
            <img className={styles.groupInner} alt="" src="/group-8.svg" />
          </div>
        </button>
      </div>
      <button className={styles.discoverBtn}>
        <b className={styles.discoverNow}>Discover Now</b>
      </button>
      <img className={styles.mapIcon} alt="" src="/map@2x.png" />
      <div className={styles.illustration}>
        <div className={styles.illustrationChild} />
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
        <img className={styles.peopleIcon} alt="" src="/people@2x.png" />
        <div className={styles.item}>
          <button className={styles.icbaselineFlightParent}>
            <img
              className={styles.icbaselineFlightIcon}
              alt=""
              src="/icbaselineflight.svg"
            />
            <div className={styles.jakartaBali}>Jakarta - Bali</div>
          </button>
          <img className={styles.itemChild} alt="" src="/frame-11@2x.png" />
          <div className={styles.card}>
            <div className={styles.cardChild} />
            <img className={styles.cardItem} alt="" src="/rectangle-9@2x.png" />
            <div className={styles.exploreLabuanBajoParent}>
              <b className={styles.exploreLabuanBajo}>Explore Labuan Bajo</b>
              <div className={styles.iconlyboldlocationParent}>
                <img
                  className={styles.iconlyboldlocation}
                  alt=""
                  src="/iconlyboldlocation.svg"
                />
                <div className={styles.exploreLabuanBajo}>NTT, Indonesua</div>
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.cardInner} />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-91@2x.png"
            />
            <div className={styles.frameDiv} />
          </div>
        </div>
      </div>
      <div className={styles.homepage1200pxInner}>
        <div className={styles.lePirateHotelParent}>
          <b className={styles.lePirateHotel}>Le Pirate Hotel</b>
          <button className={styles.iconlyboldlocationGroup}>
            <img
              className={styles.iconlyboldlocation1}
              alt=""
              src="/iconlyboldlocation1.svg"
            />
            <div className={styles.floresIndonesia}>Flores, Indonesia</div>
          </button>
        </div>
      </div>
      <div className={styles.flightBooking}>
        <div className={styles.whereAreYou}>{`Where are you flying? `}</div>
        <div className={styles.textFieldParent}>
          <input
            className={styles.textField}
            type="text"
            defaultValue="From - To"
            placeholder="Lahore - Karachi"
          />
          <button className={styles.textField1}>
            <div className={styles.textField2}>
              <div className={styles.stateLayer}>
                <div className={styles.content}>
                  <div className={styles.inputText}>
                    <div className={styles.inputText1}>Return</div>
                  </div>
                  <div className={styles.labelText}>
                    <div className={styles.labelText1}>Trip</div>
                  </div>
                </div>
                <div className={styles.trailingIcon}>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="/chevron-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.supportingText}>
              <div className={styles.supportingText1}>Supporting text</div>
            </div>
          </button>
          <input
            className={styles.textField}
            type="text"
            defaultValue="Depart- Return"
            placeholder="07 Nov 22 - 13 Nov 22"
          />
          <input
            className={styles.textField}
            type="text"
            defaultValue="Passenger - Class"
            placeholder="1 Passenger, Economy"
          />
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <button className={styles.styleLayer}>
              <img
                className={styles.addOutlineIcon}
                alt=""
                src="/addoutline.svg"
              />
              <div className={styles.button1}>Add Promo Code</div>
            </button>
          </div>
          <button className={styles.button2}>
            <div className={styles.styleLayer1}>
              <img
                className={styles.addOutlineIcon}
                alt=""
                src="/paper-plane.svg"
              />
              <div className={styles.button3}>Show Filghts</div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.packageHeading}>
        <b className={styles.bestPackagesFor}>Best Packages For You</b>
        <div className={styles.thisIsA}>
          This is a unique experience on ship, sea and land, exploring different
          coral islands of Lakshadweep.
        </div>
      </div>
      <div className={styles.packType}>
        <button className={styles.maldivesWrapper}>
          <b className={styles.maldives}>Maldives</b>
        </button>
        <button className={styles.samudramWrapper}>
          <b className={styles.samudram}>Samudram</b>
        </button>
        <button className={styles.cordeliaWrapper}>
          <b className={styles.cordelia}>Cordelia</b>
        </button>
        <button className={styles.agattiWrapper}>
          <b className={styles.cordelia}>Agatti</b>
        </button>
        <button className={styles.moreWrapper}>
          <b className={styles.cordelia}>More</b>
        </button>
      </div>
      <div className={styles.homepage1200pxItem} />
      <div className={styles.card2}>
        <img className={styles.photoIcon} alt="" src="/photo@2x.png" />
        <div className={styles.content1}>
          <div className={styles.frameParent}>
            <div className={styles.eplocationParent}>
              <img
                className={styles.eplocationIcon}
                alt=""
                src="/eplocation.svg"
              />
              <div className={styles.indonesia}>Indonesia</div>
            </div>
            <div className={styles.exploreTheBeautyOfTheIslaWrapper}>
              <div className={styles.exploreTheBeautyContainer}>
                <p className={styles.theExotic}>
                  Explore the Beauty of the island for 3 days
                </p>
                <p className={styles.theExotic}>
                  and 2 nights with our travel agency...
                </p>
              </div>
            </div>
          </div>
          <div className={styles.componentParent}>
            <img className={styles.frameChild} alt="" src="/star-1@2x.png" />
            <div className={styles.wrapper}>
              <b className={styles.b}>4.5</b>
            </div>
          </div>
          <div className={styles.contentInner}>
            <button className={styles.bookNowWrapper}>
              <div className={styles.bookNow}>Book Now</div>
            </button>
          </div>
        </div>
        <div className={styles.rs}>
          <div className={styles.rsChild} />
          <b className={styles.b1}>₹500</b>
        </div>
      </div>
      <div className={styles.card3}>
        <img className={styles.photoIcon} alt="" src="/photo1@2x.png" />
        <div className={styles.content1}>
          <div className={styles.frameParent}>
            <div className={styles.eplocationParent}>
              <img
                className={styles.eplocationIcon}
                alt=""
                src="/eplocation.svg"
              />
              <div className={styles.indonesia}>Indonesia</div>
            </div>
            <div className={styles.exploreTheBeautyOfTheIslaWrapper}>
              <div className={styles.exploreTheBeautyContainer}>
                <p className={styles.theExotic}>
                  Explore the Beauty of the island for 3 days
                </p>
                <p className={styles.theExotic}>
                  and 2 nights with our travel agency...
                </p>
              </div>
            </div>
          </div>
          <div className={styles.componentParent}>
            <img className={styles.frameChild} alt="" src="/star-1@2x.png" />
            <div className={styles.wrapper}>
              <b className={styles.b}>4.5</b>
            </div>
          </div>
          <div className={styles.contentInner}>
            <button className={styles.bookNowWrapper}>
              <div className={styles.bookNow}>Book Now</div>
            </button>
          </div>
        </div>
        <div className={styles.rs}>
          <div className={styles.rsChild} />
          <b className={styles.b1}>₹500</b>
        </div>
      </div>
      <div className={styles.card4}>
        <img className={styles.photoIcon} alt="" src="/photo2@2x.png" />
        <div className={styles.content1}>
          <div className={styles.frameParent}>
            <div className={styles.eplocationParent}>
              <img
                className={styles.eplocationIcon}
                alt=""
                src="/eplocation.svg"
              />
              <div className={styles.indonesia}>Indonesia</div>
            </div>
            <div className={styles.exploreTheBeautyOfTheIslaWrapper}>
              <div className={styles.exploreTheBeautyContainer}>
                <p className={styles.theExotic}>
                  Explore the Beauty of the island for 3 days
                </p>
                <p className={styles.theExotic}>
                  and 2 nights with our travel agency...
                </p>
              </div>
            </div>
          </div>
          <div className={styles.componentParent}>
            <img className={styles.frameChild} alt="" src="/star-1@2x.png" />
            <div className={styles.wrapper}>
              <b className={styles.b}>4.5</b>
            </div>
          </div>
          <div className={styles.contentInner}>
            <button className={styles.bookNowWrapper}>
              <div className={styles.bookNow}>Book Now</div>
            </button>
          </div>
        </div>
        <div className={styles.rs}>
          <div className={styles.rsChild} />
          <b className={styles.b1}>₹500</b>
        </div>
      </div>
      <button className={styles.discoverMoreWrapper}>
        <div className={styles.discoverMore}>Discover More</div>
      </button>
      <div className={styles.islandHaeding}>
        <b className={styles.bestPackagesFor}>Island Stays</b>
        <div className={styles.thisIsA}>
          <p className={styles.theExotic}>
            One can choose from a variety of beautiful coral islands which
            offers different staying experiences from thatched huts to luxurious
          </p>
          <p className={styles.theExotic}>
            {" "}
            modern properties. Every island offers a wider range of water sports
            and beach activities for you to enjoy.
          </p>
        </div>
      </div>
      <div className={styles.images171Parent}>
        <img className={styles.images171} alt="" src="/images-17-1@2x.png" />
        <div className={styles.frameParent1}>
          <div className={styles.kavarattiWrapper}>
            <b className={styles.kavaratti}>Kavaratti</b>
          </div>
          <div className={styles.kavarattiIsTheCapitalOfThWrapper}>
            <div className={styles.kavarattiIsTheContainer}>
              <p className={styles.theExotic}>
                Kavaratti is the capital of the Union Territory
              </p>
              <p className={styles.theExotic}>of Lakshadweep having ...</p>
            </div>
          </div>
          <div className={styles.exploreBtnWrapper}>
            <button className={styles.exploreBtn}>
              <div className={styles.exploreMore}>Explore More</div>
            </button>
          </div>
          <button className={styles.rating}>
            <div className={styles.instanceContainer}>
              <img className={styles.starIcon} alt="" src="/star-11@2x.png" />
              <b className={styles.b6}>{`4.5 `}</b>
            </div>
            <div className={styles.kReview}>(1.5k Review)</div>
          </button>
        </div>
      </div>
      <div className={styles.images171Group}>
        <img className={styles.images171} alt="" src="/images-17-11@2x.png" />
        <div className={styles.frameParent1}>
          <div className={styles.kavarattiWrapper}>
            <b className={styles.kavaratti}>Kavaratti</b>
          </div>
          <div className={styles.kavarattiIsTheCapitalOfThWrapper}>
            <div className={styles.kavarattiIsTheContainer}>
              <p className={styles.theExotic}>
                Kavaratti is the capital of the Union Territory
              </p>
              <p className={styles.theExotic}>of Lakshadweep having ...</p>
            </div>
          </div>
          <div className={styles.exploreBtnWrapper}>
            <button className={styles.exploreBtn}>
              <div className={styles.exploreMore}>Explore More</div>
            </button>
          </div>
          <button className={styles.rating}>
            <div className={styles.instanceContainer}>
              <img className={styles.starIcon} alt="" src="/star-11@2x.png" />
              <b className={styles.b6}>{`4.5 `}</b>
            </div>
            <div className={styles.kReview}>(1.5k Review)</div>
          </button>
        </div>
      </div>
      <div className={styles.images171Container}>
        <img className={styles.images171} alt="" src="/images-17-12@2x.png" />
        <div className={styles.frameParent1}>
          <div className={styles.kavarattiWrapper}>
            <b className={styles.kavaratti}>Kavaratti</b>
          </div>
          <div className={styles.kavarattiIsTheCapitalOfThWrapper}>
            <div className={styles.kavarattiIsTheContainer}>
              <p className={styles.theExotic}>
                Kavaratti is the capital of the Union Territory
              </p>
              <p className={styles.theExotic}>of Lakshadweep having ...</p>
            </div>
          </div>
          <div className={styles.exploreBtnWrapper}>
            <button className={styles.exploreBtn}>
              <div className={styles.exploreMore}>Explore More</div>
            </button>
          </div>
          <button className={styles.rating}>
            <div className={styles.instanceContainer}>
              <img className={styles.starIcon} alt="" src="/star-11@2x.png" />
              <b className={styles.b6}>{`4.5 `}</b>
            </div>
            <div className={styles.kReview}>(1.5k Review)</div>
          </button>
        </div>
      </div>
      <div className={styles.images171Parent1}>
        <img className={styles.images171} alt="" src="/images-17-13@2x.png" />
        <div className={styles.frameParent1}>
          <div className={styles.kavarattiWrapper}>
            <b className={styles.kavaratti}>Kavaratti</b>
          </div>
          <div className={styles.kavarattiIsTheCapitalOfThWrapper}>
            <div className={styles.kavarattiIsTheContainer}>
              <p className={styles.theExotic}>
                Kavaratti is the capital of the Union Territory
              </p>
              <p className={styles.theExotic}>of Lakshadweep having ...</p>
            </div>
          </div>
          <div className={styles.exploreBtnWrapper}>
            <button className={styles.exploreBtn}>
              <div className={styles.exploreMore}>Explore More</div>
            </button>
          </div>
          <button className={styles.rating}>
            <div className={styles.instanceContainer}>
              <img className={styles.starIcon} alt="" src="/star-11@2x.png" />
              <b className={styles.b6}>{`4.5 `}</b>
            </div>
            <div className={styles.kReview}>(1.5k Review)</div>
          </button>
        </div>
      </div>
      <div className={styles.images171Parent2}>
        <img className={styles.images171} alt="" src="/images-17-14@2x.png" />
        <div className={styles.frameParent1}>
          <div className={styles.kavarattiWrapper}>
            <b className={styles.kavaratti}>Kavaratti</b>
          </div>
          <div className={styles.kavarattiIsTheCapitalOfThWrapper}>
            <div className={styles.kavarattiIsTheContainer}>
              <p className={styles.theExotic}>
                Kavaratti is the capital of the Union Territory
              </p>
              <p className={styles.theExotic}>of Lakshadweep having ...</p>
            </div>
          </div>
          <div className={styles.exploreBtnWrapper}>
            <button className={styles.exploreBtn}>
              <div className={styles.exploreMore}>Explore More</div>
            </button>
          </div>
          <button className={styles.rating}>
            <div className={styles.instanceContainer}>
              <img className={styles.starIcon} alt="" src="/star-11@2x.png" />
              <b className={styles.b6}>{`4.5 `}</b>
            </div>
            <div className={styles.kReview}>(1.5k Review)</div>
          </button>
        </div>
      </div>
      <div className={styles.images171Parent3}>
        <img className={styles.images171} alt="" src="/images-17-15@2x.png" />
        <div className={styles.frameParent1}>
          <div className={styles.kavarattiWrapper}>
            <b className={styles.kavaratti}>Kavaratti</b>
          </div>
          <div className={styles.kavarattiIsTheCapitalOfThWrapper}>
            <div className={styles.kavarattiIsTheContainer}>
              <p className={styles.theExotic}>
                Kavaratti is the capital of the Union Territory
              </p>
              <p className={styles.theExotic}>of Lakshadweep having ...</p>
            </div>
          </div>
          <div className={styles.exploreBtnWrapper}>
            <button className={styles.exploreBtn}>
              <div className={styles.exploreMore}>Explore More</div>
            </button>
          </div>
          <button className={styles.rating}>
            <div className={styles.instanceContainer}>
              <img className={styles.starIcon} alt="" src="/star-11@2x.png" />
              <b className={styles.b6}>{`4.5 `}</b>
            </div>
            <div className={styles.kReview}>(1.5k Review)</div>
          </button>
        </div>
      </div>
      <div className={styles.ctc}>
        <div className={styles.letsReadyToExploreTheWorParent}>
          <b className={styles.letsReadyToContainer}>
            <p className={styles.theExotic}>{`Let’s Ready to Explore The `}</p>
            <p className={styles.theExotic}>World With Us.</p>
          </b>
          <div className={styles.loremIpsumDolorContainer}>
            <span className={styles.theExoticLakshadweepContainer1}>
              <p
                className={styles.theExotic}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</p>
              <p
                className={styles.theExotic}
              >{`Pellentesque efficitur ac quam in congue. `}</p>
            </span>
          </div>
          <button className={styles.ctaWrapper}>
            <div className={styles.cta}>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
          </button>
        </div>
        <textarea className={styles.worldMapPng283} />
      </div>
      <footer className={styles.footer}>
        <img className={styles.footerChild} alt="" src="/rectangle-14@2x.png" />
        <div className={styles.socialMedia}>
          <div className={styles.socialMediaChild} />
          <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
          <div className={styles.socialMediaItem} />
          <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
          <div className={styles.socialMediaInner} />
          <div className={styles.rectangleDiv} />
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
        </div>
        <div className={styles.link}>
          <div className={styles.company}>Company</div>
          <a className={styles.events}>Events</a>
          <a className={styles.blogs}>Blogs</a>
          <a className={styles.faq}>FAQ</a>
          <a className={styles.joinUs}>Join US</a>
          <div className={styles.about}>About</div>
          <a className={styles.project}>Project</a>
          <a className={styles.lorem}>Lorem</a>
          <a className={styles.services}>Services</a>
          <a className={styles.ourStory}>Our Story</a>
          <div className={styles.contactUs1}>Contact Us</div>
          <div className={styles.abcloremcom}>abc@lorem.com</div>
          <div className={styles.india}>India</div>
        </div>
        <div className={styles.logoSummary}>
          <button className={styles.loremIpsumIsContainer}>
            <span className={styles.theExoticLakshadweepContainer1}>
              <p
                className={styles.theExotic}
              >{`Lorem Ipsum is simply dummy `}</p>
              <p className={styles.theExotic}>text of the printing and type</p>
              <p className={styles.theExotic}>setting industry.</p>
            </span>
          </button>
          <img
            className={styles.golLogoWhite1Icon}
            alt=""
            src="/gollogowhite-1@2x.png"
          />
        </div>
        <div className={styles.footerItem} />
        <div className={styles.copyright2023}>
          Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
        </div>
      </footer>
      <div className={styles.downloadOurApp}>
        <div className={styles.downloadOurAppChild} />
        <Button
          className={styles.download}
          sx={{ width: 184.16664123535156 }}
          variant="contained"
          color="primary"
        >
          GET IN ON
        </Button>
        <div className={styles.ellipseParent}>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-10.svg" />
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
        </div>
        <b className={styles.downloadOurApp1}>Download Our App</b>
        <div className={styles.theBestTravel}>The best travel in the world</div>
        <img className={styles.elementIcon} alt="" src="/element.svg" />
      </div>
      <div className={styles.testomonial}>
        <div className={styles.testomonial1}>
          <div className={styles.whatOurClientsSaysAboutUsWrapper}>
            <b className={styles.whatOurClientsContainer}>
              <p className={styles.theExotic}>{`What Our Clients Says `}</p>
              <p className={styles.theExotic}>About Us</p>
            </b>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild6} />
            <img
              className={styles.groupChild7}
              alt=""
              src="/ellipse-8@2x.png"
            />
            <div className={styles.romanRey}>Roman Rey</div>
            <div className={styles.torantoCanada}>Toranto, Canada</div>
            <div className={styles.stars}>
              <img className={styles.starsChild} alt="" src="/star-2@2x.png" />
              <img className={styles.starsItem} alt="" src="/star-3@2x.png" />
              <img className={styles.starsInner} alt="" src="/star-4@2x.png" />
              <img className={styles.starsChild1} alt="" src="/star-5@2x.png" />
              <img className={styles.starsChild2} alt="" src="/star-6@2x.png" />
            </div>
            <div className={styles.loremIpsumDolorContainer2}>
              <span className={styles.theExoticLakshadweepContainer1}>
                <p
                  className={styles.theExotic}
                >{`Lorem ipsum dolor sit amet, `}</p>
                <p
                  className={styles.theExotic}
                >{`consectetur adipiscing elit. `}</p>
                <p
                  className={styles.theExotic}
                >{`Pellentesque efficitur ac quam `}</p>
                <p className={styles.theExotic}>{`in congue. `}</p>
              </span>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild8} />
            <img
              className={styles.groupChild9}
              alt=""
              src="/ellipse-81@2x.png"
            />
            <div className={styles.alexTom}>Alex Tom</div>
            <div className={styles.torantoCanada1}>Toranto, Canada</div>
            <div className={styles.stars1}>
              <img
                className={styles.starsChild3}
                alt=""
                src="/star-21@2x.png"
              />
              <img
                className={styles.starsChild4}
                alt=""
                src="/star-31@2x.png"
              />
              <img
                className={styles.starsChild5}
                alt=""
                src="/star-41@2x.png"
              />
              <img
                className={styles.starsChild6}
                alt=""
                src="/star-51@2x.png"
              />
              <img
                className={styles.starsChild7}
                alt=""
                src="/star-61@2x.png"
              />
            </div>
            <div className={styles.loremIpsumDolorContainer4}>
              <span className={styles.theExoticLakshadweepContainer1}>
                <p
                  className={styles.theExotic}
                >{`Lorem ipsum dolor sit amet, `}</p>
                <p
                  className={styles.theExotic}
                >{`consectetur adipiscing elit. `}</p>
                <p
                  className={styles.theExotic}
                >{`Pellentesque efficitur ac quam `}</p>
                <p className={styles.theExotic}>{`in congue. `}</p>
              </span>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild10} />
            <img
              className={styles.groupChild7}
              alt=""
              src="/ellipse-9@2x.png"
            />
            <div className={styles.finnBalor}>Finn Balor</div>
            <div className={styles.torantoCanada}>Toranto, Canada</div>
            <div className={styles.stars}>
              <img className={styles.starsChild} alt="" src="/star-2@2x.png" />
              <img className={styles.starsItem} alt="" src="/star-3@2x.png" />
              <img className={styles.starsInner} alt="" src="/star-4@2x.png" />
              <img className={styles.starsChild1} alt="" src="/star-5@2x.png" />
              <img className={styles.starsChild2} alt="" src="/star-6@2x.png" />
            </div>
            <div className={styles.loremIpsumDolorContainer6}>
              <span className={styles.theExoticLakshadweepContainer1}>
                <p
                  className={styles.theExotic}
                >{`Lorem ipsum dolor sit amet, `}</p>
                <p
                  className={styles.theExotic}
                >{`consectetur adipiscing elit. `}</p>
                <p
                  className={styles.theExotic}
                >{`Pellentesque efficitur ac quam `}</p>
                <p className={styles.theExotic}>{`in congue. `}</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.slider}>
          <FormControlLabel
            className={styles.sliderChild}
            label=""
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            className={styles.sliderItem}
            label=""
            control={<Radio color="primary" checked size="medium" />}
          />
          <FormControlLabel
            className={styles.sliderInner}
            label=""
            control={<Radio color="primary" />}
          />
        </div>
      </div>
      <div className={styles.sliderDesktop}>
        <FormControlLabel
          className={styles.sliderChild}
          label=""
          control={<Radio color="primary" />}
        />
        <FormControlLabel
          className={styles.sliderItem}
          label=""
          control={<Radio color="primary" checked />}
        />
        <FormControlLabel
          className={styles.sliderInner}
          label=""
          control={<Radio color="primary" />}
        />
      </div>
    </div>
  );
};

export default Homepage1200px;
