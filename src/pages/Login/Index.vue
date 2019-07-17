<template>

  <div id="app_wrapper" style=" padding: 2rem;" >
     <div class="logo">
           <img class="img"  src="@/assets/logo.jpg"
            alt=""/>
     </div>   

     <div class="frmgrid">
      <div class="field">
        <div class="item">
          <div class="item-left">
            <span class="icon">
            <img class="img"  src="@/assets/images/icon_username.png"
            alt=""/>
            </span>
          </div>
          <div class="item-middle">
            <input type="text" v-model="username" placeholder="账号" />
          </div>
          <div class="item-right"></div>
        </div>
           <div class="item">
          <div class="item-left">
            <span class="icon">
                      <img class="img"  src="@/assets/images/icon_password.png"
            alt=""/>
            </span>
          </div>
          <div class="item-middle">
            <input type="text" v-model="password"  placeholder="密码" />
          </div>
          <div class="item-right"></div>
        </div>
      </div>
    </div>
 

    <button id="btn_login" @click="login"  class="lumos-button lumos-button-full" >登录</button>
   
  </div>  

</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      let _this = this;

      if (_this.username == "") {
        this.$toast("账号不能为空");
        return;
      }

      if (_this.password == "") {
        this.$toast("密码不能为空");
        return;
      }

      this.$http
        .post("/User/LoginByAccount", {
          username: _this.username,
          password: _this.password
        })
        .then(res => {
          if (res.result == 1) {
            this.$store.dispatch("setUserInfo", res.data);
            this.$router.push({
              path: "/Home/Index"
            });
          } else {
            this.$toast(res.message);
          }
        });
    }
  }
};
</script>

<style lang="less" scope >
body {
  background-color: #fff;
}

.logo {
  width: 20rem;
  margin: auto;
}

.frmgrid {
  .field {
    .item {
      .item-left {
        width: 2rem;
      }
    }

    > .item:first-child {
      border-top-width: 0;
    }
  }
}

#btn_login {
  margin-top: 2rem;
}
</style>
