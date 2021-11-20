import "./App.css";
import hodLogo from "./hod_logo.png";
import band from "./band.jpeg";
import theCrimsonBoughsCover from "./cvrflt.jpg";

function Epk() {
  return (
    <div className="container">
      <div className="section right-section">
        <img src={hodLogo} className="right-section__logo" alt="logo" />
        <div className="title-container">
          <h2 className="right-section__title">presents you</h2>
          <h1 className="right-section__title main-title">
            The Crimson Boughs and Other Short Tales
          </h1>
          <p>
            Hands of despair returns with a new album, including 7 songs of
            progressive death/black metal.
          </p>
          <p>
            Featuring lots of atmospheric guitars and vintage keyboards, the
            album has a strong horror vibe while also being the Montreal's band
            most agressive album yet.
          </p>
          <p className="right-section__title--small">
            For fans of Opeth, Swallow the Sun, Katatonia, Insomnium.
          </p>
        </div>

        <div className="link-wrapper">
          <a
            target="_blank"
            href="https://www.dropbox.com/s/1errzz8snkpdc0e/Hands%20of%20Despair%20-%20The%20Crimson%20Boughs%20and%20Other%20Short%20Tales%20%282021%29.zip?dl=0"
            rel="noreferrer"
            className="download-link"
          >
            Download the album
          </a>
        </div>
        <div className="section left-section">
          <img
            src={theCrimsonBoughsCover}
            alt="the-crimson-boughs-cover"
            className="cover"
          />
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8GhZ10QKgs4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Details</h3>
        <div>Album title: The Crimson Boughs and Other Short Tales</div>
        <div>Release date: December 3rd, 2021</div>
        <div>Label: Self-release</div>
        <div>Distribution: ONErpm</div>
        <h3>Track Listing</h3>
        <div>1. They Say Their Screams Can Still Be Heard</div>
        <div>2. Drowned</div>
        <div>3. A Taste For Flesh</div>
        <div>4. From The Waves</div>
        <div>5. Aokigahara</div>
        <div>6. Hécatombe</div>
        <div>7. The Crimson Boughs</div>

        <h3>Credits</h3>
        <div>Written by Maxime Côté & Hands of Despair</div>
        <div>III by Alexandre Primeau & Hands of Despair</div>
        <div className="spacer"></div>
        <div>Lyrics by Jeff Mott</div>
        <div className="spacer"></div>
        <div>Guitars performed by Maxime Côté</div>
        <div>
          Leads on III and guitar solo on I performed by Alexandre Primeau
        </div>
        <div>Solo on III performed by David Gagné</div>
        <div>Bass performed by Maxime Côté</div>
        <div>Keyboards performed by Maxime Côté</div>
        <div>Drums performed by Michel Bélanger</div>
        <div>Vocals performed by Jeff Mott</div>
        <div className="spacer"></div>
        <div>Additional vocals on I by Samuel Arseneau-Roy</div>
        <div>Additional vocals on VII by Tobias Netzell</div>
        <div>Additional vocals in IV and VI by Viky Boyer</div>
        <div className="spacer"></div>
        <div>Cellos performed and recorded by Raphael Weinroth-Browne</div>
        <div className="spacer"></div>
        <div>Recorded by Maxime Côté at Arnicochet Studios</div>
        <div>Drums by Christian Donaldson</div>
        <div>Mixing and mastering by Christian Donaldson</div>

        <h3>Links</h3>

        <div className="link-wrapper">
          <a
            target="_blank"
            href="https://www.facebook.com/handsofdespair"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="link-wrapper">
          <a
            target="_blank"
            href="https://handsofdespair.bandcamp.com/"
            rel="noreferrer"
          >
            Bandcamp
          </a>
        </div>
        <div className="link-wrapper">
          <a
            target="_blank"
            href="https://www.instagram.com/handsofdespair/"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="link-wrapper">
          <a
            target="_blank"
            href="https://www.metal-archives.com/bands/Hands_of_Despair/3540340213"
            rel="noreferrer"
          >
            Metal Archives
          </a>
        </div>
        <img src={band} alt="band" className="band-picture" />
      </div>
    </div>
  );
}

export default Epk;
