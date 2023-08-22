<script>

export default {
  methods: {
    moveToContact() {
      this.emitter.emit('custom-event');
    },
  },
};
</script>

<template>
  <div class="section-containter">
    <section class="aboutme" name="About">
      <div class="style-container">
        <el-row style="margin-right: -15px; margin-left: -15px;" align="flex" justify="space-evenly">
          <el-col class="my-pic" span="6">

            <div class="img-container">
              <img src="../assets/images/bg-2.jpg">
            </div>

          </el-col>

          <el-col class="intro" span="6">

            <div class="intro-content">
              <h3>
                About Me
              </h3>
              <span class="sub-title"><b>Software Development Engineer</b> & <b>Web Developer</b></span>

              <p>
                Hello! I'm <b>Yiqin Chen</b>, also known as Trent. I'm originally from Kunming, China, and I spent my college years at North Carolina State University, where I earned a bachelor's degree in Computer Science. I'm currently working in the tech industry and planning to apply to the graduate school at the University of Toronto. My interests include playing the electric guitar, BMX riding, badminton, video gaming, and indulging in various forms of media, both offline and online. I'm a fan of learning and enjoy engaging conversations.
              </p>

              <div class="skills">

              </div>

            </div>
            <el-button @click="moveToContact">Contact Me</el-button>
          </el-col>
        </el-row>
      </div>

    </section>
  </div>

</template>

<style scoped>

b {
  font-weight: 700;
}

.aboutme {
  padding: 100px 0;
}

.style-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

h3 {
  font-size: 30px;
  font-weight: 800;

}

.sub-title {
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 2px;
}

p {
  padding-top: 20px;
  line-height: 1.6;
  margin: 0;
  font-size: 15px;
  color: #748182;
}

.img-container {
  position: relative;
  padding-right: 30px;
  border-right: 1px solid #cecece;
}


img {
  max-width: 500px;
  max-height: 500px;
  vertical-align: middle;
}

.intro-content {
  margin-bottom: 20px;
}

@media (min-width: 992px) {
  .style-container {
    width: 970px;
  }
  .intro {
    width: 58.33333333%;
  }
}


</style>