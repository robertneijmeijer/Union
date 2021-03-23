<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <h1 class="welcome-text">Welcome to union !</h1>
    </div>
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <h3 class="createTitle">Create a community</h3>
        <div class="card-body">
          <div class="column-left">
            <h4 class="white-text">Name *</h4>
            <input type="text" name="usernameId" class="form-control input" placeholder="Name"/>
            <h4 class="white-text">Description *</h4>
            <input size="lg" type="text" name="description" class="form-control input description-height"
                   placeholder="Description"/>
          </div>
          <div class="column-right">
            <h4 class="white-text">Invite privilege *</h4>
            <div class="rows">
              <input type="checkbox" id="onlyMe">
              <img src="../assets/singleEnvelope.svg" class="evelopes"/>
              <h6 class="white-text horizontal-padding">Only i can invite</h6>
            </div>
            <div class="rows">
              <input type="checkbox" id="everyone">
              <img src="../assets/multipleEnvelope.svg" class="evelopes"/>
              <p class="everyone-invite">Everyone can invite *</p>

            </div>
            <div>
              <h4 class="white-text"> Icon </h4>
              <div class="circle">
                <img src="../assets/imageIcon.svg" class="image-upload"/>
              </div>
            </div>
            <div>
              <h4 class="white-text"> Banner image </h4>
              <div class="banner-image">
                <img src="../assets/imageIcon.svg" class="image-upload"/>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="form-group">
            <div class="text-center create-btn">
              <button
                  class="btn btn-primary create-union "
                  type="submit"
                  name="login-button"
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
// import router from "@/router";

export default {
  name: "unionCreate",
  methods: {
    // TODO: add methods here
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
  padding-left: $paddingSmall;
  padding-right: $paddingSmall;
  color: white;
}

.everyone-invite {
  padding-left: $paddingSmall;
  padding-right: $paddingSmall;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.everyone-invite::after {
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
  width: 300px;
  height: 100px;
  background-color: $darkGreyColor;
  border-radius: $borderRadius;
  display: grid;
  place-items: center;
}

.evelopes {
  margin: 0 auto;
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
  margin-top: 10px;
  user-select: none;
}

.createTitle::after {
  content: "* Fields are required";
  color: $lightGreyColor;
  user-select: none;
  font-size: 14px;
  position: absolute;
  right: $paddingSmall;
}

.card {
  height: 700px;
  margin-top: auto;
  margin-bottom: auto;
  width: 800px;
  background-color: $buttonHoverColor;
  border-radius: $borderRadius;
}

.card-body {
  padding: 0;
  margin: 10px 15px 0 15px;
  display: flex;
  flex-direction: row;
}

.create-btn {
  margin-top: 30px;
  margin-bottom: 0;
}

.create-union {
  width: 175px;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  color: white;
  background: transparent;

  &:hover {
    background-color: $buttonHoverColor;
    border: $buttonBorder $buttonHoverColor;
  }

}

.white-text {
  color: white;
  padding-bottom: $paddingSmall;
  padding-top: $paddingSmall;
}

.welcome-text {
  color: white;
  padding-bottom: $paddingLarge;
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
  border-radius: $borderRadius;
  border: 2px white;
}

.description-height {
  height: 200px;
}
</style>
