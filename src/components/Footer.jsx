import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import "../styles/PreFooter.css";
import '../styles/Footer.css'

const repeatIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
  >
    <path d="M451 934q-123-10-207-101t-84-216q0-77 35.5-145T295 361l43 43q-56 33-87 90.5T220 617q0 100 66 173t165 84v60Zm60 0v-60q100-12 165-84.5T741 617q0-109-75.5-184.5T481 357h-20l60 60-43 43-133-133 133-133 43 43-60 60h20q134 0 227 93.5T801 617q0 125-83.5 216T511 934Z" />
  </svg>
);
const shieldIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
  >
    <path d="M480 731q72.917 0 123.958-51.042Q655 628.917 655 556q0-72.083-51.5-122.542Q552 383 480 381v50q52 1 88.5 37.235 36.5 36.236 36.5 88Q605 608 568.542 644.5 532.083 681 480 681q-33.367 0-62.183-16Q389 649 372 620l-43 24q24 40 63.806 63.5T480 731ZM330.116 585Q341 585 348 577.884q7-7.117 7-18Q355 549 347.884 542q-7.117-7-18-7Q319 535 312 542.116q-7 7.117-7 18Q305 571 312.116 578q7.117 7 18 7Zm22-84Q363 501 370 493.884q7-7.117 7-18Q377 465 369.884 458q-7.117-7-18-7Q341 451 334 458.116q-7 7.117-7 18Q327 487 334.116 494q7.117 7 18 7Zm58-55Q421 446 428 438.884q7-7.117 7-18Q435 410 427.884 403q-7.117-7-18-7Q399 396 392 403.116q-7 7.117-7 18Q385 432 392.116 439q7.117 7 18 7ZM480 975q-140-35-230-162.5T160 533V295l320-120 320 120v238q0 152-90 279.5T480 975Zm0-62q115-38 187.5-143.5T740 533V337l-260-98-260 98v196q0 131 72.5 236.5T480 913Zm0-337Z" />
  </svg>
);
const mapIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
  >
    <path d="m612 936-263-93-179 71q-17 9-33.5-1T120 883V325q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840 268v565q0 11-7.5 19T814 864l-202 72Zm-34-75V356l-196-66v505l196 66Zm60 0 142-47V302l-142 54v505Zm-458-12 142-54V290l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z" />
  </svg>
);

const Footer = ({footer} ) => {
  return (
    <>
      <div className="preFooter">
        <div className="repeat">
          {repeatIcon}
          <p>
            <b>Hastle free Replacement</b> <br /> 10 day free replacement
            challenge{" "}
          </p>
        </div>
        <div className="shield">
          {shieldIcon}
          <p>
            <b>100% secure Payments </b>
            <br /> We support Cards, Wallets and OMI{" "}
          </p>
        </div>
        <div>
          {mapIcon}
          <p>
            <b>Vast Service centers </b>
            <br /> 100 centers supported all over the country{" "}
          </p>
        </div>
      </div>

      <div className="preFooter2">
        <div>
          <p>Lets stay in touch</p>{" "}
          <span>Get Updates on specials and more </span>
        </div>
        <div>
          <div>
            <input type="email" name="email" placeholder="Type your Email" />
            <button> › </button>
          </div>
          <span>Thanks, you are on our email lists for special offers</span>
        </div>

        <div>
          <p>
            {" "}
            Follow MI
            <br />
          </p>
          <span> We want to hear from you</span>
        </div>
        <div>
          <BsFacebook className="facebook-icon" />
          <BsInstagram className="instagram-icon" />
          <BsLinkedin className="linkedin-icon" />
        </div>
      </div>
      <div className="footer">
        <div>
          <p> SUPPORT</p>
          {footer.support.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> SHOP AND LEARN</p>
          {footer.shopAndLearn.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}{" "}
            </a>
          ))}
        </div>
        <div>
          <p> RETAIL STORE</p>
          {footer.retailStore.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> ABOUT</p>
          {footer.aboutUS.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> CONTACT US</p>
          {footer.contactUs.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div>
          <button>CHAT NOW</button>
        </div>
      </div>
      <div className="footerBorder">
        <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
