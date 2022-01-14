<template>
  <div class="contact">
      <div class="hellothere">
          hello there, email me <a href="mailto:shaurya.p.singh21@gmail.com" style='color:white;'>here.</a>
      </div>
      
  </div>
</template>

<script>
export default {
    name:"Contact"
}
</script>

<style>
.contact{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: black;
  color: white;
  text-align: center;
  background-image: black;
}

div .hellothere{
      font-size: 30px;
      font-family: "Gentium Book Basic", Georgia, serif;
      color:rgb(189, 185, 185);
}

.main-contact{
  font-size: 30px;
  color:rgb(189, 185, 185);
}

</style>