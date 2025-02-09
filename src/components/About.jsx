import React from "react";
import "../style/About.css";

function About() {
  return (
    <div className="profile-page">
      {/* Profile Section */}
      <div className="profile">
        <img
          src="https://avatars.githubusercontent.com/u/151644619?v=4"
          alt="Laila Elmallass"
          className="profile-pic"
        />
        <h2>Laila Elmallass</h2>
        <p>🎓 Digital Development Student at the Institute of Applied Technology, Ait Melloul.</p>
        <p>💖 Passionate about Web Development & UX/UI Design.</p>
        <p>✨ Love working with React, Laravel, and Full-Stack Applications.</p>
        <p>🌍 Based in Agadir, Morocco.</p>
        <p>🌟 Open to exciting projects & collaborations.</p>

        {/* GitHub Link */}
        <a href="https://github.com/LailaElmallass" target="_blank" rel="noopener noreferrer" className="github-link">
          Visit My GitHub
        </a>
      </div>
    </div>
  );
}

export default About;
