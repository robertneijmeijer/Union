<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="header-row">
        <h1 class="welcome-text">Welcome to </h1>
        <img src="../assets/union.svg"/>
        <h1 class="welcome-text">!</h1>
      </div>
    </div>
    <div class="d-flex justify-content-center h-100">
      <div class="union-card">
        <p class="createTitle">Create a community</p>
        <div class="union-card-body">
          <div class="column-left">
            <h4 class="white-text overpass-bold">Name *</h4>
            <input type="text" name="usernameId" class="form-control name-height input"/>
            <h4 class="white-text overpass-bold">Description *</h4>
            <textarea size="lg" type="text" name="description" class="form-control input description-height"
            />
          </div>
          <div class="column-right">
            <h4 class="white-text overpass-bold">Invite privilege *</h4>
            <div class="rows">
              <div class="round">
                <input type="checkbox" id="onlyMe" v-on:click="check_one()">
                <label for="onlyMe"/>
              </div>
              <img src="../assets/singleEnvelope.svg" class="top-envelope"/>
              <h6 class="only-i-invite horizontal-padding">Only i can invite</h6>
            </div>
            <div class="rows">
              <div class="round">
                <input type="checkbox" id="everyone" v-on:click="check_one()">
                <label for="everyone"/>
              </div>
              <img src="../assets/multipleEnvelope.svg" class="bottom-envelopes"/>
              <p class="everyone-invite">Everyone can invite *</p>

            </div>
            <div>
              <h4 class="white-text"> Icon </h4>
              <div class="circle">
                <img src="../assets/imageIcon.svg" class="image-upload" v-on:click="upload_avatar()"/>
              </div>
            </div>
            <div>
              <h4 class="white-text"> Banner image </h4>
              <div class="banner-image">
                <img src="../assets/imageIcon.svg" class="image-upload" v-on:click="upload_banner()"/>
              </div>
            </div>
          </div>
        </div>
        <div class="union-card-footer">
          <div class="form-group">
            <div class="text-center union-create-btn">
              <button
                class="btn btn-primary create-union "
                type="submit"
                name="login-button"
                v-on:click="create()"
              >
                Create community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "unionCreate",
  methods: {
    // TODO: add methods here
    check_one: function () {
      console.log("clicked")
    },
    create: function () {
      router.push("/");
    },
    upload_banner: function (){
      console.log('clicked on banner')
      //TODO: add avatar stuff here
    },
    upload_avatar: function () {
      console.log('clicked on avatar')
      //TODO: add avatar stuff here
    }
  }
};
</script>


<style lang="scss">
@import "../assets/theme";

.container {
  height: 100%;
  align-content: center;
}

.required {
  margin-left: auto;
  color: $lightGreyColor;
  user-select: none;
}

.rows {
  display: grid;
  grid-template-columns: 24px 70px 1fr;
}

.column {
  flex-direction: column;
}

.horizontal-padding {
  padding-left: $paddingMedium;
  padding-right: $paddingSmall;
  color: white;
}

.everyone-invite {
  padding-left: $paddingMedium;
  padding-right: $paddingSmall;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 18px;
}

.only-i-invite {
  padding-left: $paddingMedium;
  padding-right: $paddingSmall;
  color: white;
  font-size: 18px;
}

.everyone-invite::after {
  font-family: "Overpass";
  content: "Members get max 2 invites";
  color: $lightGreyColor;
}

.circle {
  width: 100px;
  height: 100px;
  background-color: $darkGreyColor;
  border-radius: $borderRadius * 3;
  display: grid;
  place-items: center;
}

.banner-image {
  width: 350px;
  height: 100px;
  background-color: $darkGreyColor;
  border-radius: $borderRadius;
  display: grid;
  place-items: center;
}

.top-envelope {
  margin: 0 auto;
  padding-left: 25px;
}

.bottom-envelopes {
  margin: 0 auto;
  padding-left: 18px;
}

.card-header {
  display: flex;
  flex-direction: row;
}

.column-left {
  padding-left: $paddingMedium;
  width: 300px;
}

.column-right {
  margin-left: auto;
  padding-right: $paddingHuge * 2;
}

.createTitle {
  color: white;
  text-align: center;
  margin-top: 30px;
  user-select: none;
  font-size: 36px;
}

.createTitle::after {
  content: "* Fields are required";
  font-family: "Overpass";
  user-select: none;
  font-size: 18px;
  position: absolute;
  padding-left: $paddingHuge *3;
  margin-right: 40px;
  color: #C8C8C8;
}

.union-card {
  height: 800px;
  margin-top: auto;
  margin-bottom: auto;
  width: 1000px;
  background-color: $buttonHoverColor;
  border-radius: $borderRadius;
  font-family: "Overpass-SemiBold";
}

.union-card-body {
  padding: 0;
  margin: 10px 15px 0 15px;
  display: flex;
  flex-direction: row;
}

.union-create-btn {
  padding-top: $paddingHuge *1.5;
  margin-bottom: 0;
}

.create-union {
  width: 250px;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  color: white;
  background: transparent;
  font-size: 24px;
  border-radius: 33px;

  &:hover {
    background-color: $buttonHoverColor;
    border: $buttonBorder $buttonHoverColor;
  }

}

.white-text {
  color: white;
  padding-bottom: $paddingSmall;
  padding-top: $paddingMedium;
  font-size: 24px;
}

.welcome-text {
  color: white;
  padding-bottom: $paddingLarge;
  font-size: 48px;
  font-family: "Overpass-SemiBold", serif;
}

.overpass-regular {
  font-family: "Overpass-Regular", serif;
}

.overpass-bold {
  font-family: "Overpass-Bold", serif;
}

.card-header h3 {
  color: white;
}

.input-group-prepend span {
  width: 50px;
  background-color: $unionBlue;
  color: black;
  border: 0 !important;
}

.center {
  margin-left: 6px;
}

.form-control {
  background-color: #232323;
  border-radius: $borderRadiusInput;
  border: 1px solid $inputTextfielColor;
}

.name-height {
  width: 400px;
}

.description-height {
  height: 300px !important;
  width: 400px;
  max-height: 300px;
  max-width: 400px;
}

.round {
  position: relative;
  padding: $paddingMedium;
}

.round label {
  background-color: $darkGreyColor;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  height: 25px;
  width: 25px;
  background-color: $darkGreyColor;
  border-radius: 50%;
  display: inline-block;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #00FFFF;
  border-color: #00FFFF;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.header-row {
  display: grid;
  grid-template-columns: 270px 130px 0;
  user-select: none;
  align-items: baseline;
}
</style>
