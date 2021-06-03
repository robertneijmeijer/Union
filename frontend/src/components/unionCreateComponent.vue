<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="header-row">
        <h1 class="welcome-text">{{ $t("union_create.welcome") }}</h1>
        <img src="../assets/svg/union.svg"/>
        <h1 class="welcome-text">!</h1>
      </div>
    </div>
    <div class="d-flex justify-content-center h-100">
      <div class="union-card">
        <p class="requiredFields">{{ $t("union_create.fields_required") }}</p>
        <p class="createTitle">{{ $t("union_create.create_community") }}</p>
        <div class="union-card-body">
          <div class="column-left">
            <h4 class="white-text">
              {{ $t("union_create.name") }}
            </h4>
            <input
                type="text"
                name="usernameId"
                class="form-control name-height input"
                v-model="name"
            />
            <h4 class="white-text">
              {{ $t("union_create.description") }}
            </h4>
            <textarea
                size="lg"
                type="text"
                name="description"
                class="form-control input description-height"
                v-model="description"
            />
          </div>
          <div class="column-right">
            <h4 class="white-text">
              {{ $t("union_create.invite_privilege") }}
            </h4>
            <div class="rows">
              <div class="round">
                <input
                    type="radio"
                    id="onlyMe"
                    name="invitePrivilege"
                    v-model="members_can_invite"
                    v-bind:value="false"
                />
                <label for="onlyMe"></label>
              </div>
              <img
                  src="../assets/svg/singleEnvelope.svg"
                  class="top-envelope"
              />

              <h6 class="only-i-invite horizontal-padding">
                {{ $t("union_create.only_i") }}
              </h6>
            </div>
            <div class="rows">
              <div class="round">
                <input
                    type="radio"
                    id="everyone"
                    name="invitePrivilege"
                    v-model="members_can_invite"
                    v-bind:value="true"
                />
                <label for="everyone"></label>
              </div>
              <img
                  src="../assets/svg/multipleEnvelope.svg"
                  class="bottom-envelopes"
              />
              <p class="everyone-invite">{{ $t("union_create.everyone") }}</p>
              <p class="max-invites">{{ $t("union_create.max_invites") }}</p>
            </div>
            <div>
              <h4 class="white-text">{{ $t("union_create.icon") }}</h4>
              <div class="circle">
                <input type="file" ref="iconFile" accept="image/*" @change="upload_avatar($event)"
                       style="display: none">
                <img
                    src="../assets/svg/imageIcon.svg"
                    class="image-upload"
                    v-on:click="$refs.iconFile.click()"
                />
              </div>
            </div>
            <div>
              <h4 class="white-text">{{ $t("union_create.banner_image") }}</h4>
              <div class="banner-image">
                <input type="file" ref="bannerFile" accept="image/*" @change="upload_banner($event)"
                       style="display: none">
                <img
                    src="../assets/svg/imageIcon.svg"
                    class="image-upload"
                    v-on:click="$refs.bannerFile.click()"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="union-card-footer">
          <div class="form-group">
            <div class="text-center union-create-btn">
              <button
                  class="btn btn-primary create-union"
                  type="submit"
                  name="login-button"
                  v-on:click="create()"
              >
                {{ $t("union_create.create_button") }}
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
import UnionApi from "../api/union";

export default {
  name: "unionCreate",
  methods: {
    create: function () {
      UnionApi.postUnion({
        union: {
          name: this.name,
          description: this.description,
          members_can_invite: this.members_can_invite,
          icon: "", // If no img don't give it one because it will grap default
          banner: "",
        },
      })
      const data = new FormData();
      data.append('union_id', this.name);
      this.banner ? data.append("banner", this.banner) : data.append("banner", '');
      this.icon ? data.append("icon", this.icon) : data.append("icon", '');

      UnionApi.postUnionImages({
        data
      }).then(() =>
          router.push({name: "union-view", params: {unionName: this.name}})
      );
    },
    upload_banner: function (event) {
      console.log("banner")
      this.banner = event.target.files[0];
      console.log(this.banner)
    },
    upload_avatar: function (event) {
      this.icon = event.target.files[0];
    },
  },
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
  color: $primary-light-gray;
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

.max-invites {
  color: $primary-light-gray;
  font-size: 18px;
  margin-right: $paddingMedium;
  margin-top: -$paddingMedium;
  width: max-content;
}

.only-i-invite {
  padding-left: $paddingMedium;
  padding-right: $paddingSmall;
  color: white;
  font-size: 18px;
}

.circle {
  width: 100px;
  height: 100px;
  background-color: $secondary-gray;
  border-radius: $borderRadius * 3;
  display: grid;
  place-items: center;
}

.banner-image {
  width: 350px;
  height: 100px;
  background-color: $secondary-gray;
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
  justify-content: center;
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
  user-select: none;
  margin-top: -$paddingMedium;
  font-size: 36px;
}

.requiredFields {
  font-family: "Overpass";
  user-select: none;
  color: #c8c8c8;
  font-size: 18px;
  padding-left: $paddingHuge * 20;
  margin-top: $paddingMedium;
  white-space: nowrap;
}

.union-card {
  height: 800px;
  margin-top: auto;
  margin-bottom: auto;
  width: 1000px;
  background-color: $primary-black;
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
  padding-top: $paddingHuge * 1.5;
  margin-bottom: 0;
}

.create-union {
  width: 250px;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  color: white;
  background: transparent;
  font-size: 24px;

  &:hover {
    background-color: $primary-black;
    border: $buttonBorder $primary-black;
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
  background-color: $primary-black;
  border: 2px solid #c4c4c4;
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
  background-color: $primary-black;
  border-radius: 50%;
  display: inline-block;
}

.round input[type="radio"] {
  visibility: hidden;
}

.round input[type="radio"]:checked + label {
  border: 8px solid #00ffff;
  background-color: $primary-black;
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
