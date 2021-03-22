
<template>
    <div class="menu-container">
      <div class="logo-container">
        <img class="photo" src="@/assets/photo.png" alt="Oktay Ibis logo">
        <h1>Oktay İbiş</h1>
        <h4>Front End Developer</h4>
      </div>
      <div class="link-container">
        <router-link class="menu-item" to="/">About</router-link>
        <router-link class="menu-item" to="/projects">Projects</router-link>
        <router-link class="menu-item" to="/blogs">Blogs</router-link>
        <router-link class="menu-item" to="/contact">Contact</router-link>
      </div>
      <div class="contact">
        <h2>Contact</h2>
        <div class="contact-item">
          <font-awesome-icon :icon="githubIcon" size="lg" />
          <a href="https://github.com/oktayibis">/oktayibis</a>
        </div>
        <div class="contact-item">
          <font-awesome-icon :icon="linkedInIcon" size="lg" />
          <a href="https://www.linkedin.com/in/oktay-ibi%C5%9F/">/in/oktay-ibiş</a>
        </div>
        <div class="contact-item">
          <font-awesome-icon :icon="mailIcon" size="lg" />
          <a href="mailto:oktayibis@gmail.com">Send a mail</a>
        </div>
      </div>
    </div>

</template>

<script>
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export default {

  computed: {
    githubIcon () {
      return faGithub
    },
    linkedInIcon () {
      return faLinkedinIn
    },
    mailIcon () {
      return faEnvelopeSquare
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/costum-theme.scss";
.menu-container {
  padding: 45px 30px;
  position: sticky;
  top: 10px;
  overflow-y: scroll;
  z-index: 1001;
  background: white;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  -webkit-box-shadow: 0 0 5px rgb(0, 0, 0 / 5%);
  box-shadow: 0 0 5px rgb(0, 0, 0 / 5%);
  height: 900px;

  .logo-container {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 1em;
    margin-bottom: 45px;
    display: block;
    width: 100%;

  }
  .photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 20px;
    border: 1px solid transparent;
    box-shadow: 0 5px 20px 0 rgb(0, 0, 0 / 10%), 0 5px 20px 0 rgb(0, 0, 0 / 10%);
  }
  .link-container {
    display: flex;
    flex-direction: column;

    .menu-item {
      margin: 12px 0 12px 0;
      padding: 0 0 8px 0;
      list-style: none;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5em;
      text-transform: uppercase;
      letter-spacing: 0;
      border-bottom: 1px solid #ececec;
      color: $--color-info;

      &:hover{
        color: lighten($--color-info, 10%);
        text-decoration: underline;
      }
      &:focus{
        color: darken($--color-info, 30%);
      }
  }
  }
  .contact {
    display: grid;
    grid-template-columns: 100%;
    row-gap: 10px;

    .contact-item {
      width: 100%;
      a {
        text-decoration: none;
        color: $--color-primary;
        margin-left: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
