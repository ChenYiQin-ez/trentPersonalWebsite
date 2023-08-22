<script>
import Clipboard from 'clipboard';
export default {
  methods: {
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
    },
  },
};
</script>

<template>
  <div class="container">
    <section class="contacts" name="cont">
      <div class="contacts-header">
        <h3>
          Contacts
        </h3>
      </div>
      <div class="contacts-content">
        <el-row class="row-bg" justify="space-evenly" align="flex">
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <span class="icon" style="padding-right: 3px">
                <font-awesome-icon class="addr" icon="fa-solid fa-share-nodes"/>
              </span>
              <h6>
                Socials
              </h6>
              <ul class="social-list">
                <li>
                  WeChat: <el-tooltip content="click to copy" placement="right" effect="dark">
                            <b @click="copyToClipboard('18908710067')">18908710067</b>
                        </el-tooltip>
                </li>
                <li>
                  QQ: <el-tooltip content="click to copy" placement="right" effect="dark">
                          <b @click="copyToClipboard('1259238268')">1259238268</b>
                      </el-tooltip>
                </li>
                <li>
                  Facebook: <a href="https://www.facebook.com/Apocalypse671617/"
                                class="fb" target="_blank">Yiqin Chen</a>
                </li>
                <li>
                  LinkedIn: <a class="linked" href="linkedin.com/in/yiqin-chen-ba2a99278" target="_blank">Yiqin Chen</a>
                </li>
                <li>
                  instagram: <a class="insta" href="https://instagram.com/trent_cyq?igshid=MjEwN2IyYWYwYw==" target="_blank">Trent Chen</a>
                </li>
              </ul>
<!--              <p>-->
<!--                WeChat: <a href="@">18908710067</a>-->
<!--                <br>-->
<!--                QQ: <b>1259238268</b>-->
<!--                <br>-->
<!--                Facebook: <a href="https://www.facebook.com/Apocalypse671617/">Yiqin Chen</a>-->
<!--                <br>-->
<!--                LinkedIn: <a href="linkedin.com/in/yiqin-chen-ba2a99278">Yiqin Chen</a>-->
<!--                <br>-->
<!--                instagram: <a href="https://instagram.com/trent_cyq?igshid=MjEwN2IyYWYwYw==">Trent Chen</a>-->
<!--              </p>-->
            </div>
          </el-col>

          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <span class="icon">
                <font-awesome-icon class="addr" icon="fa-solid fa-location-dot"/>
              </span>
              <h6>
                Address
              </h6>
              <p>
                No.355 Wenqu Rd, Shushan District, Hefei, Anhui, China
              </p>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <span class="icon">
                <font-awesome-icon class="addr" icon="fa-solid fa-envelope"/>
              </span>
              <h6>
                Email
              </h6>
              <p>
                chen.yiqin@ustcinfo.com
                <br>
                ychen89@alumni.ncsu.edu
              </p>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <span class="icon">
                <font-awesome-icon class="addr" icon="fa-solid fa-phone"/>
              </span>
              <h6>
                Phone
              </h6>
              <p>
                (+1) 919-986-4382
                <br>
                (+86) 189-0871-0067
              </p>
            </div>
          </el-col>


        </el-row>
      </div>


    </section>
  </div>
</template>

<style scoped>

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.contacts {
  padding: 100px 0;
  margin-right: -15px;
  margin-left: -15px;
}

.contacts-header {
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

h6 {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
  margin: 0;
  font-size: 15px;
  color: #2c3e50;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.contacts-content {
  text-align: center;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-bottom: 30px;
}

span {
  display: inline-block;
}

.addr {
  margin-top: 18px;
  width: 40px;
  height: 40px;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.icon {
  font-size: 25px;
  margin-bottom: 15px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  background: #f4f4f4;
  border-radius: 50%;
  -webkit-transition: all .5s;
  transition: all .5s;
}

.icon:hover {
  color: white;
  background-color: black;
}

.social-list {
  list-style: none;
  padding-left: 0;

}

.social-list b {
  cursor: pointer;
}
li {
  padding-bottom: 4px;
}

</style>