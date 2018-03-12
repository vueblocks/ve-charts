<template>
  <div class="ve-sidebar">
    <a class="logo" href="">
      <img src="../assets/img/logo.svg" alt="logo">
    </a>
    <div class="site-descrpition">
      ve<span class="text-style-1">-</span>charts
    </div>
    <div class="sidebar-section">
      <section>
        <div class="sidebar-title">
          <span>图表示例</span>
        </div>
        <div class="sidebar-content">
          <ul>
            <li v-for="(item, index) in sidebarMenus" :key="index">
              <router-link exact :to="item.url" replace>
                <span v-text="item.name"></span>
                <div class="rectangle-right"></div>
              </router-link>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="sidebar-title">
          <span>Demo</span>
        </div>
        <div class="sidebar-content">
          <ul>
            <li>
              <router-link to="/test-page">测试页面</router-link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import chartTypes from '@/data/index'

const sidebarRouter = () => {
  return Object.keys(chartTypes).map(key => {
    return {
      name: chartTypes[key].name,
      url: `/chart/${chartTypes[key].type}`
    }
  })
}

export default {
  name: 'sidebar',
  created () {
    this.sidebarMenus = sidebarRouter()
  }
}
</script>

<style lang="less" scoped>
  @main-font-color: #35495e;
  @second-font-color: #7285a1;
  .ve-sidebar {
    height: 100%;
  }
  .logo {
    display: block;
    img {
      margin-top: 16px;
      width: 80px;
      height: 78px;
      object-fit: contain;
    }
  }
  .site-descrpition  {
    height: 18px;
    font-family: PangMenZhengDao;
    font-size: 18px;
    text-align: center;
    color: #0f49b3;
    margin-bottom: 36px;
    .text-style-1 {
      color: #fed24a;
    }
  }
  .sidebar-section {
    .sidebar-title {
      height: 25px;
      font-family: PingFangSC;
      font-size: 18px;
      text-align: center;
      color: @main-font-color;
    }
    .sidebar-content {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          a {
            display: block;
            position: relative;
            font-family: PingFangSC;
            font-size: 14px;
            text-align: center;
            color: @second-font-color;
            height: 42px;
            line-height: 42px;
            text-decoration: none;
            .rectangle-right {
              display: none;
            }
          }
        }
      }
      .router-link-active {
        background-color: rgba(61, 120, 232, 0.05);
        .rectangle-right {
          display: inline-block;
          position: absolute;
          right: 0;
          width: 4px;
          height: 36px;
          margin: 3px 0;
          border-radius: 4px;
          background-color: #3d78e8;
        }
      }
    }
  }
</style>
