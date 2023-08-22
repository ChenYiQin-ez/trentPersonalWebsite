<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
</script>

<template>
  <div class="container">
    <section class="portfoilo" name="port">
      <div class="section-header">
        <h3>
          Portfolio
        </h3>
      </div>
      <WelcomeItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>North Carolina State University</template>
        <template #sub>2017.08 - 2021.05<br></template>

        Bachelor of Science in Computer Science,<a class="ncsu" href="https://www.csc.ncsu.edu/" target="_blank" rel="noopener">
         North Carolina State University</a>.
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-guitar" style="fill: currentColor;" size="xl"/>
        </template>
        <template #heading>The Half Gallon Milk Band</template>
        <template #sub>2022.06 - 2023.05<br></template>

        Lead Guitarist, Audio Tester in <a class="band" href="https://sites.google.com/g.ucla.edu/thehalfgallonmilk/home" target="_blank" rel="noopener">
        The Half Gallon Milk Band</a>.
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>KDGC Sinovative Techology Ltd.</template>
        <template #sub>2023.06 - Now<br></template>

        Web Developer & Software Development Engineer in <a class="kgdc" href="http://www.gccloud.com/" target="_blank" rel="noopener">
        KDGC Cloud Network Techology Co. Ltd.</a>.
      </WelcomeItem>

    </section>
  </div>
</template>

<style scoped>

.portfoilo {
  background: #f7f7f7;
  padding: 100px 0;
}

.section-header {
  margin-bottom: 80px;
  text-align: center;
}

h3 {
  font-weight: 900;
  font-size: 40px;
  position: relative;
  display: inline-block;
  z-index: 4;
}

.kgdc {
  text-decoration: none;
  color: #007aff;
  transition: 0.4s;
}

.kgdc:hover {
  color: #00458d;
  transition: color 0.3s ease;
}

.ncsu {
  text-decoration: none;
  color: red;
  transition: 0.4s;
}

.ncsu:hover {
  color: #880000;
  transition: color 0.3s ease;
}

.band {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

.band:hover {
  color: hsl(160, 96%, 31%);
  transition: color 0.3s ease;
}

</style>