<template>
    <div class="home">
        <el-container class="home-container">
            <!--       侧边栏区域        -->
            <el-aside :width="isCollapsed ? '64px': '200px'">
                <div class="logo">
                        <div class="logo_img">
                            <img src="../../assets/images/logo-ip.png" alt="">
                        </div>

                    <div class="logo_text" v-show="isLogoText">
                        可立刻
                    </div>
                </div>
                <!--       导航区         -->
                <el-menu
                        background-color="#304156"
                        text-color="#fff"
                        active-text-color="#409EFF"
                        :unique-opened="true"
                        :collapse="isCollapsed"
                        :collapse-transition="false"
                        :router="true"
                >
                    <el-submenu index="1">
                        <!--       一级菜单模板区        -->
                        <template slot="title">
<!--                          <router-link to="/report" tag="p">-->
                              <i class="el-icon-location"></i>
                              <span>导航一</span>
<!--                          </router-link>-->
                        </template>
                        <!--       二级菜单区域        -->
                        <el-menu-item index="1-4-1">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>导航二</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>

            </el-aside>
            <el-container>
                <!--       头部区域         -->
                <el-header>
                    <div class="header">
                        <div class="header-left">
                            <span class="iconfont icon-category" @click="up" style="display: block"></span>
                            <div class="nav-page">
                                <!--  面包屑导航     -->
                                <el-breadcrumb>
                                    <el-breadcrumb-item :to="{ path: '/report' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>导航一</el-breadcrumb-item>
                                    <el-breadcrumb-item>导航二</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                        </div>
                        <div class="header-right">
                            <el-row>
                                <el-button type="info" @click="exit">退出</el-button>
                            </el-row>
                        </div>
                    </div>
                </el-header>
                <!--       主体区域         -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                //折叠
                isCollapsed:false,
                isLogoText:true
            }
        },
        methods: {
            exit() {
                window.sessionStorage.clear();
                this.$router.push('/')
            },
            up(){
                this.isCollapsed= !this.isCollapsed;
                this.isLogoText=!this.isLogoText
            }

        }
    }
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
    }

    .el-header {
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    }

    .el-aside {
        background-color: #304156;
    }

    .el-main {
        background-color: #f0f2f5;
    }
    .el-menu{
        border-right: none;
    }


    .home-container {
        height: 100% !important;
    }

    .header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .icon-category {
        font-weight: bold;
        cursor: pointer;
        font-size: 20px;
    }
    .header-right{
        cursor: pointer;
    }
    .logo {
        width: 100%;
        height: 60px;
        display: flex;
        background: #2b2f3a;
        color: #fff;
        align-items: center;
        justify-content: center;
    }

    .logo_img {
        width: 32px;
        height: 32px;
    }

    .logo_img > img {
        width: 100%;
        height: 32px;
    }

    .logo_text {
        margin-left: 20px;
    }
    .header-left{
        display: flex;
    }
    .nav-page{
        margin-left: 30px;
    }

</style>
