
import React from 'react';

const Home = () => {
  return (
   <div className="home" id="home"> 
      <div className="jambo bg-secondary">
      <div className="landing-page">
        <h1>haifa<span>:dev</span></h1>
        <h4><span>developers</span> community</h4>
      </div>
    </div>  
  <div className="container">
    <h2 >
      Developers of Haifa <b>unite!</b>
    </h2>

    <article id="about">
        <h4>Who are we?</h4>
        <p>
            We're an enthusiastic group of developers from Haifa. Some of us are professionals, some are still learning, but all of us agree upon one thing: Haifa offers barely enough for local developers to thrive.
        </p>
        <p>
            Nobody wants to move far away from the place they call home just to establish a career. We don't think anyone should. That's why we've established Haife:Dev, so that all of Haifa's developers will have <b>a reason to stay in Haifa</b>.
        </p>
    </article>

    <article>
        <h4>What do we want?</h4>
        <p>
            We want our careers to thrive in the city we call home.
        </p>
        <p>
            Our goal is to bring professional software-related content to Haifa <b>for free</b>. We aim to organize meetups and other events that can help developers in Haifa develop their career without the need to leave their home, or travel even farther if the live in the north.
        </p>

    </article>

    <article>
        <h4>How do we do that?</h4>
        <p>
            We're establishing partnership with local companies and office complexes as hosts for our professional meetups. We're bringing professional developers and lectors from all around the country to provide top quality content to our dearest Haifa developers.
        </p>
        <p>
            For beginners and students, we've partnered with <a href="http://www3.haifa.muni.il/inventuipub/">In-Vent</a> to establish weekly study group meetups in association with the <a href="https://www.freecodecamp.org/">freeCodeCamp</a> non-profit organization.
        </p>
    </article>


    <article>
        <h2 id="contact">Let's get in touch.</h2>
        <p>
            If you'd like to provide us with a lecture, host our next meetup, or help us improve our website, please <b>contact David Klein</b> via <a href="https://www.linkedin.com/in/david-klein-835048161/">LinkedIn</a> or by <a href="mailto:davidklein.4496@gmail.com">Email</a>.
        </p>
        <p>
            We welcome you to join us on <a href="https://chat.whatsapp.com/G26LTepUrpT2W3GS26mpoo">WhatsApp</a> & <a href="https://www.facebook.com/groups/haifadev/">Facebook</a>, and follow our meetup announcements as member of our <a href="https://www.meetup.com/Haifa-dev/">Meetup group</a>.
        </p>
        <p>
            If you're new to development and would like to learn how to code, network with professionals and learn together, join the freeCodeCamp Haifa <a href="https://chat.whatsapp.com/8skL1KY0Nhv1uy3MDYbLIR">WhatsApp group</a> and we'll meet you as soon as our next weekly meetup!
        </p>
    </article>

    </div>    
   </div>
  );
}
    
export default  Home; 
