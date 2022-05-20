
function App() {
  return (
    <div className = "app-container">
      <header className = "header-container">
        <h1 className = "header-title">Victoria Topham</h1>
        <p className = "header-subtitle">Full-stack developer, open-minded dabbler, free-falling daydreamer.</p>
      </header>
      <div className = "homepage-banner-container">
        <img className = "homepage-banner" src = "sf-banner.jpg" alt = "Victoria enjoying a San Francisco sunset"/>
      </div>
      <div className = "homepage-bio">
          <p>Thanks for dropping by- if you have a moment I'd love to introduce myself. I'm a web developer who's been dabbling in code since 2017. In 2020 I transitioned into full-time development.</p>

          <p>I've worked in the worlds of finance, roadside assistance, cross-platform manufacturing, and construction. It has been my pleasure to contribute in a variety of roles in my previous life before engineering, including learning &#38; development, office management &#38; accounting, and product management. I love that development allows me to continue to be curious about new industries and technologies. As a developer I am grateful to have had the opportunity to mentor and contribute to the growth of other engineers.</p>

          <p>Both my portfolio and GitHub are under construction but if you have any questions or just want to poke around, feel free to access the links below.</p>
      </div>
      <div className = "outside-links">
        <a className = "icon-container" href = "https://www.linkedin.com/in/victoria-topham/" rel = "noreferrer" target = "_blank">
          <i className = "fa-brands fa-linkedin"></i>
          <p>LinkedIn</p>
        </a>
        <a className = "icon-container" href = "https://github.com/vtopham" rel = "noreferrer" target = "_blank">
          <i className = "fa-brands fa-github"></i>
          <p>GitHub</p>
        </a>
        <a className = "icon-container" href = "mailto:topham.victoria@gmail.com" rel = "noreferrer" target = "_blank">
          <i className = "fa-solid fa-envelope"></i>
          <p>Email</p>
        </a>
      </div>

      {/* TODO: Mobile links

      TODO: email copy pop-up */}
    </div>
  );
}

export default App;
