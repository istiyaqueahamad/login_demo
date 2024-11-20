import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About AR and VR</h1>
      <p>
        <strong>Augmented Reality (AR)</strong> is a technology that overlays
        digital information, like images, sounds, and video, onto the real
        world. It enhances the way we perceive our surroundings by adding
        interactive elements, allowing for a more immersive experience. Some
        popular examples of AR are mobile games like <strong>Pokémon GO</strong>,
        which uses the phone's camera and GPS to overlay virtual elements in the
        real world.
      </p>
      <p>
        <strong>Virtual Reality (VR)</strong>, on the other hand, creates a
        completely virtual environment that users can interact with, often
        through VR headsets like the <strong>Oculus Rift</strong> or
        <strong>HTC Vive</strong>. Unlike AR, VR fully immerses users in a
        digital space, which can simulate real or imagined experiences.
        Popular VR applications include gaming, virtual tours, and simulations.
      </p>
      <p>
        Both AR and VR are revolutionizing various fields, including gaming,
        education, healthcare, and retail. They offer new ways to experience
        digital content, making them powerful tools for entertainment,
        learning, and beyond.
      </p>

      <h1>Applications of AR and VR</h1>
      <p>
        AR and VR are being used in numerous fields, such as:
        <ul>
          <li>Gaming: Immersive experiences for players, such as VR headsets and AR mobile games.</li>
          <li>Education: Virtual classrooms, interactive simulations, and AR textbooks.</li>
          <li>Healthcare: Virtual surgeries, AR diagnostics, and pain management therapies.</li>
          <li>Retail: Virtual try-ons, product visualization, and interactive store displays.</li>
        </ul>
      </p>
      <p>
        These technologies are shaping the future and expanding the boundaries
        of human interaction with the digital world. <br />
        For more information, visit the official <a href="https://www.vive.com/us/vr/what-is-vr/" target="_blank" rel="noopener noreferrer">HTC Vive - What is VR?</a>
      </p>

      <h1>Example Image</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/Virtual_reality_headset_%28by_Antoine_%29.jpg" // Replace with an actual image URL
        alt="AR and VR in Action"
        className="about-image"
      />

      <h1>Future of AR and VR</h1>
      <p>
        As AR and VR technologies continue to evolve, their potential is
        expanding across industries. For example:
      </p>
      <ul>
        <li>In architecture, AR is used to overlay digital blueprints onto physical spaces.</li>
        <li>In tourism, VR allows users to take virtual tours of locations from the comfort of their homes.</li>
        <li>In manufacturing, AR helps workers by providing real-time, hands-on guidance for assembly tasks.</li>
      </ul>
      <p>
        The future is bright, and as technology continues to advance, we can
        expect even more incredible developments in AR and VR that will continue
        to enhance our world in unimaginable ways.
      </p>
    </div>
  );
};

export default About;
