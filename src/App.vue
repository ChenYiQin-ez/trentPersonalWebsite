<script>
import AboutMe from './components/AboutMe.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Clipboard from "clipboard";
export default {
  name: "App",
  components: {AboutMe, Portfolio, Contact},
  data() {
    return {
      arg: '',
      moveToAboutMe: "about",
      moveToPortfolio: "port",
      moveToContacts: "cont",
      isMenuOpen: false,
      isFixed: false,
      isOffline: false,
      move: false,
      typedWord: '',
      wordList: [' Yiqin Chen', ' A Developer', ' A Guitarist'],
      image1: '',
      image2: '',
      image3: ''
    }
  },
  created() {
    window.addEventListener('offline', () => {
      // Display an offline notification here
      this.showOfflineNotification();
    });
    this.image1 = 'src/assets/images/bg-2.jpg'
  },
  mounted() {

    this.magic(-1, 0)
    window.addEventListener("click", this.handleDocumentClick);
    const navbar = document.querySelector('.page-nav');
    const headerSection = document.querySelector('.header-back');
    let isFixed = false;
    let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const headerRect = headerSection.getBoundingClientRect();

    window.addEventListener('scroll', function () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition > headerRect.bottom) {
        // Scrolling down, fix the navbar
        if (!isFixed) {
          navbar.classList.add('navbar-fixed');
          isFixed = true;
        }
      } else {
        // Scrolling up, unfix the navbar
        if (isFixed) {
          navbar.classList.remove('navbar-fixed');
          isFixed = false;
        }
      }
      prevScrollPosition = currentScrollPosition;
    });

    this.emitter.on('custom-event', () => {
      this.handleClick('cont');
    });
  },
  beforeDestroy() {
    // Remove the click event listener when the component is destroyed
    window.removeEventListener("click", this.handleDocumentClick);
  },
  methods: {
    magic(index, current) {
      this.typedWord =  document.querySelector('.typed-word')
      if (current === this.wordList.length) {
        current = 0;
      }
      let typeText = setInterval(() => {
        if (index == this.wordList[current].length - 1) {
          clearInterval(typeText);
          setTimeout(() => {
            this.magicClear(index, current, this.typedWord);
          }, 2000);
        } else {
          index++;
          this.typedWord.textContent += this.wordList[current][index];

        }
      }, 100);
    },
    magicClear(index, current, typedWord){
      let clearText = setInterval(() => {
        if (typedWord.textContent.length == 0) {
          clearInterval(clearText);
          index = -1;
          current++
          this.magic(index, current);
        } else {
          typedWord.textContent = typedWord.textContent.slice(0, -1)
        }
      }, 100);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleClick(arg) {
      if(arg == "about") {
        this.$refs.about.scrollIntoView({ behavior: 'smooth' });
      }
      else if(arg == "port") {
        this.$refs.port.scrollIntoView({ behavior: 'smooth' });
      }
      else if(arg == "cont") {
        this.$refs.cont.scrollIntoView({ behavior: 'smooth' });
      }
      else {
        window.location.reload()
      }
    },
    handleDocumentClick(event) {
      const navContent = document.querySelector('.page-nav');
      if (this.isMenuOpen && !navContent.contains(event.target)) {
        this.toggleMenu()
      }
    },
    showOfflineNotification() {
      // Use a notification library or custom code to show the offline notification
      // For example, you can use the Web Notification API
      alert("You are currently offline.")
    },
    copyToClipboard(text) {
      const clipboard = new Clipboard('.social-list a, .social-list b', {
        text: () => text,
      });

      clipboard.on('success', (e) => {
        e.clearSelection(); // Deselect the copied text
        this.$message.success('Copied to clipboard');
        clipboard.destroy(); // Cleanup
      });

      clipboard.on('error', () => {
        this.$message.error('Failed to copy');
        clipboard.destroy();
      });
      clipboard.onClick(event);
    }
  }
}
</script>

<template>
  <div class="main-container" v-if="!isOffline">
    <nav class="page-nav" :class="{ 'navbar-fixed': isFixed }">
      <div class="nav-container">
        <div class="nav-header">
          <h3>
            Yiqin Chen
          </h3>
          <button class="menu-toggle" @click="toggleMenu">
            <font-awesome-icon class="faIcon" icon="fa-solid fa-bars" size="2xl"
                               style="padding-top: 10px; cursor: pointer" />
          </button>
        </div>
        <div class="nav-content" :class="{ 'menu-open': isMenuOpen }">
          <ul class="items">
            <li>
              <a @click="handleClick('home')" class="home">Home</a>
            </li>
            <li>
              <a @click="handleClick('about')" class="aboutme">About Me</a>
            </li>
            <li>
              <a @click="handleClick('port')" class="portf">Portfolio</a>
            </li>
            <li>
              <a @click="handleClick('cont')" class="conta">Contacts</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    <section class="header-back">
      <el-carousel height="100vh" autoplay indicator-position="none" interval="4200">
        <el-carousel-item>
          <div class="carousel-background-1" ></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="carousel-background" ></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="carousel-background-2" ></div>
        </el-carousel-item>
      </el-carousel>
      <div class="bottom-styling">
        <svg class="little-pony" viewBox="0 186.5 1920 113.5">
          <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
        </svg>
      </div>

      <div class="greeting">
        <div class="greeting-container">
          <div class="row">
            <div class="caption">
              <h5>
                Hello
              </h5>
              <h1 class="dynamic-headline">
                <span class="static">I Am  </span>
                <span class="word-wrapper">
                  <b class="typed-word"> </b>
                </span>
              </h1>
              <div class="social-icons">
                <el-tooltip content="click to copy" placement="bottom" effect="light">
                  <span class="weChat" style="cursor: pointer" @click="copyToClipboard('18908710067')">
                    <font-awesome-icon class="ic" icon="fa-brands fa-weixin" size="xl"/>
                  </span>
                </el-tooltip>
                <el-tooltip content="click to copy" placement="bottom" effect="light">
                  <span class="qq" style="cursor: pointer;" @click="copyToClipboard('1259238268')">
                    <font-awesome-icon class="ic" icon="fa-brands fa-qq" size="xl"/>
                  </span>
                </el-tooltip>
                <a class="fb" href="https://www.facebook.com/Apocalypse671617/" target="_blank">
                  <span>
                    <font-awesome-icon class="ic" icon="fa-brands fa-facebook" size="xl"/>
                  </span>
                </a>
                <a class="linked" href="https://linkedin.com/in/yiqin-chen-ba2a99278" target="_blank">
                  <span>
                    <font-awesome-icon class="ic" icon="fa-brands fa-linkedin" size="xl"/>
                  </span>
                </a>
                <a class="insta" href="https://instagram.com/trent_cyq?igshid=MjEwN2IyYWYwYw==" target="_blank">
                  <span>
                    <font-awesome-icon class="ic" icon="fa-brands fa-instagram" size="xl"/>
                  </span>
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>

    <main>
      <div ref="about">
        <AboutMe />
      </div>

      <div ref="port">
        <Portfolio/>
      </div>

      <div ref="cont">
        <Contact/>
      </div>
    </main>
  </div>
<!--  <offline v-if="isOffline"/>-->
</template>

<style scoped>

.main-container {
  opacity: 0; /* Start with opacity set to 0 */
  animation: fadeIn 1s ease-in-out forwards; /* Apply the fadeIn animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.menu-toggle {
  display: none; /* Hide the button by default */
  /* Styling for the toggle button icon */
}

.menu-open .nav-content {
  /* Adjust properties when menu is open */
  display: block;
}
@media (min-width: 1200px) {
  .nav-container {
    width: 1170px;
  }
  .nav-header {
    float: left;
  }
  .nav-content {
    border-color: #e7e7e7;
    display: block!important;
    height: auto!important;
    padding-bottom: 0;
    overflow: visible!important;
    width: auto;
    border-top: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding-right: 15px;
    padding-left: 15px;
  }
  .items {
    margin-left: 60%;
    list-style: none; /* Remove default list styles */
    padding: 0;
  }
}

@media (max-width: 1200px) {
  .menu-toggle {
    display: block; /* Show the button for smaller screens */
    /* Additional styling for the toggle button */
    position: relative;
    padding: 9px 10px;
    margin-right: 10px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    background: none !important;
    border: none !important;
    margin-left: 80%;
  }

  .nav-content {
    display: none; /* Hide navigation items by default */
    /* Styling for the collapsible menu */
  }

  .nav-content.menu-open {
    display: block;
    text-align: center;
    border: none;
    border-top: 1px solid rgba(12, 12, 12, 0.04);
    background: #fff;
    margin-top: 2px;
    padding-bottom: 15px;
    margin-right: -15px;
    margin-left: -15px;
    opacity: 0; /* Start with opacity set to 0 */
    animation: fadeIn 0.2s ease-in-out forwards; /* Apply the fadeIn animation */
    padding-bottom: 5px;

  }
  .nav-content.menu-open a {
    cursor: pointer;
    text-decoration: none; /* Remove the default underline */
    color: #000000; /* Set the default text color */
    position: relative; /* Create a stacking context for the ::before pseudo-element */

    /* Add a transition for smooth animation */
    transition: color 0.3s ease, transform 0.3s ease;
  }
  .nav-content.menu-open li {
    margin: 12px 0;
    font-size: 18px;
    display: block;
    border-bottom: 1px solid #cecece;
  }
  .nav-content.menu-open h3 {
    padding-top: 6px;
  }
  .nav-content.menu-open .items {
    mmargin-left: 60%;
    list-style: none; /* Remove default list styles */
    padding: 0;
  }
  .nav-content.menu-open a::before {
    content: ""; /* Empty content for the pseudo-element */
    position: absolute;
    width: 100%;
    height: 2px; /* Height of the underline */
    bottom: -2px; /* Position the underline below the text */
    left: 0;
    background-color: #000000; /* Default underline color */
    transform: scaleX(0); /* Start with no width (invisible) */
    transform-origin: left center; /* Set the origin to the left for scaling */

    /* Add a transition for the underline animation */
    transition: transform 0.3s ease;
  }

  .nav-content.menu-open a:hover {
    color: #007bff; /* Change the text color on hover */
  }

  .nav-content.menu-open a:hover::before {
    transform: scaleX(1); /* Expand the underline on hover */
  }

}

.header-back {
  height: 100vh;
}

.header-back::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0c0c0c;
  opacity: .65;
  z-index: 2;
}

.carousel-background {
  height: 100vh;
  background-size: cover;
  position: relative;
  overflow: hidden;
  background-position: 0px 0px;
  background-image: url('../src/assets/images/bg-1.jpg')
}

.carousel-background-1 {
  height: 100vh;
  background: black center center no-repeat;
  background-size: contain;
  position: relative;
  overflow: hidden;
  background-image: url('../src/assets/images/bg-2.jpg')
}

.carousel-background-2 {
  height: 100vh;
  background-size: cover;
  position: relative;
  overflow: hidden;
  background-position: 0px 0px;
  background-image: url('../src/assets/images/bg-3.jpg')
}

.page-nav {
  display: block;
  padding: 20px 0 30px;
  background: none;
  border: none;
  border-radius: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  max-height: 10%;
}

.navbar-fixed {
  position: fixed;
  top: 0;
  /* Add additional styling for the fixed navbar */
  background: #fff;
  -webkit-box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.05);
  min-height: 60px;
  line-height: 60px;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-transition: all .5s;
  transition: all .5s;
}

.navbar-fixed h3 {
  color: #1c1c1c;
}

.navbar-fixed.page-nav a {
  color: #1c1c1c;
}

.navbar-fixed.page-nav a::before {
  background-color: #1c1c1c;
}

.navbar-fixed.page-nav a {
  color: #1c1c1c;
}

.nav-header {
  vertical-align: middle;
}

h3 {
  float: left;
  padding-top: 5px;
  padding-left: 5px;
  font-size: 27px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
}

.nav-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.nav-content li {
  margin: 12px 15px 0;
  font-size: 18px;
  display: inline-block;
}

.bottom-styling {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  z-index: 22;
}

.little-pony {
  x: 0px;
  y: 0px;
  fill: #ffffff;
  width: 100%;
}

.page-nav a {
  cursor: pointer;
  text-decoration: none; /* Remove the default underline */
  color: #ffffff; /* Set the default text color */
  position: relative; /* Create a stacking context for the ::before pseudo-element */

  /* Add a transition for smooth animation */
  transition: color 0.3s ease, transform 0.3s ease;
}

.page-nav a::before {
  content: ""; /* Empty content for the pseudo-element */
  position: absolute;
  width: 100%;
  height: 2px; /* Height of the underline */
  bottom: -2px; /* Position the underline below the text */
  left: 0;
  background-color: #f1f1f1; /* Default underline color */
  transform: scaleX(0); /* Start with no width (invisible) */
  transform-origin: left center; /* Set the origin to the left for scaling */

  /* Add a transition for the underline animation */
  transition: transform 0.3s ease;
}

.page-nav a:hover {
  color: #4c9ef8; /* Change the text color on hover */
}

.faIcon {
  transition: color 0.3s ease;
  color: #ffffff;
}

.navbar-fixed .faIcon {
  transition: color 0.3s ease;
  color: #000000;
}

.faIcon:hover {
  color: #4c9ef8;
}

.page-nav a:hover::before {
  transform: scaleX(1); /* Expand the underline on hover */
}
li::marker {
  content: none;
}

.greeting {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  z-index: 11;
}

.greeting-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  margin-right: -15px;
  margin-left: -15px
}

.caption {
  text-align: center;
  color: #fff;
  margin-top: 50px;
}

h5 {
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 10px;
}

.typed-word {
  position: relative;
  padding: 0.2rem 0;
  font-weight: 400;
}

.typed-word::after {
  content: '';
  display: block;
  position: absolute;
  right: -5px;
  top: 0;
  height: 100%;
  width: 2px;
  background-color: #ffffff;
  animation: type 1.5s infinite;
  -webkit-animation: type 1.5s infinite;
}


@-webkit-keyframes type {
  0% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }

  100% {
    opacity: 0;
  }
}

@keyframes type {
  0% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }

  100% {
    opacity: 0;
  }
}

.social-icons {
  margin-top: 20px;
}

a {
  color: inherit;
}

.social-icons span {
  display: inline-block;
  font-size: 14px;
  width: 45px;
  height: 45px;
  line-height: 35px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
}

.ic {
  padding-top: 12px;
}

.weChat:hover {
  color: #2dff00;
  transition: color 0.3s ease;
}

.qq:hover {
  color: #ff0000;
  transition: color 0.3s ease;
}

.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>
