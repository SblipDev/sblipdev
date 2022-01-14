<template>
  <div>
      <div class="home">
    <div class="middle">
        <img src="https://avatars.githubusercontent.com/u/65819451?s=400&u=b0b0db2f1125657f70b250be3a3ade75a6fdc13e&v=4" alt="" class='avatar'><br /><br>
      <h2 class="font-weight-bold glow" style="font-family: 'Russo One', sans-serif;">Shaurya Pratap Singh</h2>
      <p class="font-weight-bold glow">Coder, Student, and a massive geek.</p>
      <a href="https://sblip.medium.com/" target="_blank"><i class="fab fa-medium-m facon"></i></a>
      <a href="https://github.com/shaurya-blip/" target="_blank"><i class="fab fa-github facon"></i></a>
      <a href="https://codepen.io/shaurya-blip" target="_blank"><i class="fab fa-codepen facon"></i></a>
      <a href="https://twitter.com/SblipDev/" target="_blank"><i class="fa fa-twitter facon"></i></a>
      <a href="https://keybase.io/sblipdev" target="_blank"><i class="fab fa-keybase facon"></i></a>

      <a href="https://sblip.dev"><i class="fas fa-wifi facon" target="_blank"></i></a>
    </div>
  </div>
      <div class="aboutme">
      <div class="boom container">
        <h2 style="color:#FFF01F"><i class="fas fa-paint-brush"></i> About Me</h2><br>
        <p>Hi I am Shaurya aka SblipDev.</p>
        <p>I am a 13 year old developer who is interested in web development, and machine learning. I write blogs about PostgreSQL, Django, Machine learning, and more on <a style="color:#FFF01F;" href="http://sblip.medium.com" target="_blank">medium.com</a></p>
        <p>
          I am the founder of <a style="color:#FFF01F;" href="https://muchscript.sblip.dev">MuchScript</a> (A programming language), <a style="color:#FFF01F;" href="https://github.com/SblipDev/pyserved/">Pyserved</a>
          (A file transfer tool), and <a style="color:#FFF01F;" href="https://github.com/SblipDev/dremo">Dremo</a> (Currently in development). I am also a blogger with more than 190 followers on <a style="color:#FFF01F;" href="http://sblip.medium.com" target="_blank">medium.com</a>.
        </p><br>
        <h5 align="center">
          More about me <a style="color:#FFF01F;" class="font-weight-bold" href="/about/">here.</a>
        </h5>
      </div>
    </div><br><br><br>
  </div>
</template>
<script>
// @ is an alias to /src
// import Vue from 'vue'


export default {
  name: "Home",
  data() {
    return {
      error:'hello!'
    };
  },
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Changa:wght@300&family=Russo+One&display=swap');

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 97vh;
  background: black;
  color: #8400ff;
  text-align: center;
  /* background-image: black; */
}

.aboutme {
  color:#00fff6;
}

.atag{
  color:#FFF01F;
}

.boom{
  padding:30px;
  border:3px solid #FFF01F;
  border-radius: 10px;
}

.avatar {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background:url('https://avatars.githubusercontent.com/u/65819451?s=400&u=b0b0db2f1125657f70b250be3a3ade75a6fdc13e&v=4');
  background-size:180px 190px;
  /* border-top: 20px solid white; */
  /* border-bottom: 17px solid white; */
  border:2px solid #FFF01F;
}
.facon {
  font-size: 30px;
  padding: 10px;
  transition: all 0.3s;
  color:#00fff6;
}
.facon:hover {
  /* background-color:black; */
  color:#00fff6;
  padding-left: 20px;
  padding-right: 20px;
}


</style>
