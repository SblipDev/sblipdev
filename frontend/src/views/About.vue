<template>
  <div class="about">

    <header class="masthead">
      <p class="masthead-intro">Hi I'm</p>
      <h1 class="masthead-heading">Shaurya Pratap Singh</h1>
    </header>
    <section class="introduction-section">
             <p>Hi I am Shaurya aka SblipDev.</p>
        <p>I am a 13 year old developer who is interested in web development, and machine learning. I write blogs about PostgreSQL, Django, Machine learning, and more on <a style="color:#FFF01F;" href="http://sblip.medium.com" target="_blank">medium.com</a></p>
        <p>
          I am the founder of <a style="color:#FFF01F;" href="https://muchscript.sblip.dev">MuchScript</a> (A programming language), <a style="color:#FFF01F;" href="https://github.com/SblipDev/pyserved/">Pyserved</a>
          (A file transfer tool), and <a style="color:#FFF01F;" href="https://github.com/SblipDev/dremo">Dremo</a> (Currently in development). I am also a blogger with more than 190 followers on <a style="color:#FFF01F;" href="http://sblip.medium.com" target="_blank">medium.com</a>.
        </p>
        <p>
          I like coding, watching TV, playing basketball, and playing video games(Favourite: Jedi Fallen Order). 
        </p>
    </section>
    <section class="location-section">
      <h1>What do I know?</h1>
      <p>Here is a list of technologies, I know -></p>
      <ul>
        <li>Language: Python <i class="fab fa-python"></i></li>
        <li>Backend Framework: Django</li>
        <li>JavaScript Framework: Vue <i class="fab fa-vuejs"></i></li>
        <li>Frontend languages: html, css and js</li>
        <li>SQL: PostgreSQL <i class="fas fa-database"></i></li>
        <li>Data Science libraries: 
          <ul>
            <li>Numpy</li>
            <li>Pandas</li>
            <li>SKlearn</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
            <li>Plot.ly</li>
            <li>Tensorflow</li>
            <li>Keras</li>
          </ul>
        </li>
        <li>Pycord <i class="fab fa-discord"></i></li>
      </ul>
    </section>
    <section class="questions-section d">
      <h1>More About Me</h1>
      <h2>What are your favorite books?</h2>
      <p>My favorite books are -></p>
      <ul>
        <li>Ready Player One - Ernest Cline</li>
        <li>Sapiens - Yuval Noah Harari</li>
        <li>Homo Deus - Yuval Noah Harari</li>
        <li>The God Delusion - Richard Dawkins</li>
        <li>Ikigai - Hector Garcia and Francesc Miralles</li>
      </ul>
      <h2>What are your favorite movies?</h2>
      <p>My favorite movies are -></p>
      <ul>
        <li>The Matrix Trilogy (YES, even the sequels)</li>
        <li>The Star Wars trilogy (NOT the sequels)</li>
        <li>Interstellar</li>
        <li>2001 - A Space Odyssey</li>
        <li>The Harry Potter trilogy</li>
        <li>Forrest Gump</li>
      </ul>
      <h2>Why do you program?</h2>
      <p>
        Because programming is awesome and programming for the internet is even
        more awesome.
      </p>
      
    </section>
    <section class="location-section">
      <h1>Github Stats</h1><br>
      <img src="https://activity-graph.herokuapp.com/graph?username=shaurya-blip&theme=react-dark&area=true&hide_border=true" width="100%" align="right">
      <br>
      <br>
      <table>
        <tr>
          <th>

          </th>
          <th>
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=shaurya-blip&theme=dark">
          </th>
        </tr> 
      </table>
    </section>
  </div>
</template>
<script>

export default {
  name: "About",
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Changa:wght@300&family=Russo+One&display=swap');

.about {
  min-height: 102vh;
  background: black;
  padding-top: 200px;
  color: white;
  background: black;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
}
.content-footer,
.masthead-heading,
.masthead-intro {
  text-align: center;
}

.masthead {
  border-top: solid 1em #ffcf33;
}

h1, h2{
  color: #FFF01F;
  font-family: 'Russo One', sans-serif;
}

p {
  color:#00fff6;
}

li {
  color:#00fff6;
}

.masthead-intro {
  /* Layout Declarations */
  margin-bottom: 0.1em;
  /* Typography Declarations */
  /* font-family: "Gentium Book Basic", Georgia, serif; */
  font-family: 'Russo One', sans-serif;
  font-size: 2em;
}

.masthead-heading {
  /* Layout Declarations */
  color: #8400ff;
  margin-top: -0.2em;
  /* Typography Declarations */
  font-family: 'Russo One', sans-serif;
  /* font-weight: bold; */
  font-size: 6em;
  /* letter-spacing: -0.02em; */
  text-transform: uppercase;
}



.introduction-section > p,
.location-section > p,
.questions-section,
.content-footer > p {
  /* Typography Declarations */
  font-weight: 300;
  letter-spacing: 0.05em;
}

.questions-section > h2 {
  /* font-family: "Gentium Book Basic", Georgia, serif; */
  font-size: 1.2em;
  font-weight: bold;
  font-family: 'Russo One', sans-serif;
  /* Layout */
  margin: 2em 0 1em 0;
}

section > h1 {
  margin-top: 2em;
}

.masthead-heading,
.masthead-intro {
  text-align: center;
}

.masthead {
  padding: 6em 0;
  border-top: solid 1em #ffcf33;
}

.introduction > p,
.location > p,
.content-footer > p {
  /* Typography Declarations */
  font-weight: 300;
  letter-spacing: 0.05em;
}
.d h2 {
  /* Typography Declarations */
  font-family: 'Russo One', sans-serif;
  font-size: 1.2em;
  font-weight: bold;
}

.introduction-section,
.location-section,
.questions-section {
  max-width: 38em;
  margin-left: 20em;
  margin-right: 20em;
  margin-top: 2em;
}
@media only screen and (max-width: 768px) {
  a.middle {
    text-decoration: none;
  }
  .masthead-heading {
    /* Layout Declarations */
    /* color: white; */
    margin-top: -0.2em;
    /* Typography Declarations */
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 4em;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }
  .introduction-section,
.location-section,
.questions-section {
  max-width: 38em;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 2em;
}
}

</style>