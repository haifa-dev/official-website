
import React from 'react';

const Home = () => {
  return (
   <div className="home"> 
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

    <article >
        <h4>Who are we?</h4>
        <p>
            We're an enthusiastic group of developers from Haifa. Some of us are professionals, some are still learning, but all of us agree upon one thing: Haifa offers barely enough for local developers to thrive.
        </p>
        <p>
            Nobody wants to move far away from the place they call home just to establish a career. We don't think anyone should. That's why we've established Haife:Dev, so that all of Haifa's developers will have <b>a reason to stay in Haifa</b>.
        </p>
    </article>

    <article >
        <h4>What do we want?</h4>
        <p>
            We want our careers to thrive in the city we call home.
        </p>
        <p>
            Our goal is to bring professional software-related content to Haifa <b>for free</b>. We aim to organize meetups and other events that can help developers in Haifa develop their career without the need to leave their home, or travel even farther if the live in the north.
        </p>

    </article>

    <article >
        <h4>How do we do that?</h4>
        <p>
            We've partnered with <a href="http://www.haifa24.co.il/%D7%91%D7%95%D7%A8%D7%9C%D7%90_17_-_%D7%94%D7%97%D7%9E%D7%9E%D7%94_%D7%9C%D7%A7%D7%A8%D7%99%D7%99%D7%A8%D7%94">Burla 17</a> as a host for our professional meetups. We're bringing professional developers and lectors from all around the country to provide top quality content to our dearest Haifa developers.
        </p>
        <p>
            For beginners and students, we've partnered with <a href="http://www3.haifa.muni.il/inventuipub/">In-Vent</a> to establish weekly study group meetups in association with the <a href="https://www.freecodecamp.org/">freeCodeCamp</a> non-profit organization.
        </p>
    </article>

    <h2 >Let's get in touch.</h2>

    <article>
        <p>
            If you're a professional developer or lector, and you'd like to talk or provide content to our meetups, please <b>contact David Klein</b> via <a href="https://www.linkedin.com/in/david-klein-835048161/">LinkedIn</a> or by <a href="mailto:davidklein.4496@gmail.com">Email</a>.
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
