<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="header-row">
        <h1 class="welcome-text">{{ $t("union_create.welcome") }}</h1>
        <img src="../assets/svg/union.svg"/>
        <h1 class="welcome-text">!</h1>
      </div>
    </div>
      <div class="union-card">
       <div>
         <p class="createTitle">{{ $t("union_create.create_community") }}</p>
         <p class="requiredFields">{{ $t("union_create.fields_required") }}</p>
       </div>
        <div class="union-card-body">
            <section>
              <h4 class="white-text">
                {{ $t("union_create.name") }}
              </h4>
              <input
                  type="text"
                  name="usernameId"
                  class="form-control name-height input"
                  v-model="name"
              />
            </section>
            <section>
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
            </section>
          </div>
          <div>
            <section>
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
            </section>

            <section>
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

            </section>

            <section>
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
            </section>
          </div>
        </div>
        <div>
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
</template>

<script>
import router from "@/router";
import UnionApi from "../api/union";

export default {
  name: "unionCreate",
  methods: {
    create: function () {
      const data = new FormData();
      data.append('union_id', this.name);
      this.banner ? data.append("banner", this.banner) : data.append("banner", '');
      this.icon ? data.append("icon", this.icon) : data.append("icon", '');

      UnionApi.postUnionImages({
        data
      }).then((response) => {
        UnionApi.postUnion({
          union: {
            name: this.name,
            description: this.description,
            members_can_invite: this.members_can_invite,
            icon: response.data.icon, // If no img don't give it one because it will grap default
            banner: response.data.banner,
          },
        }).then(() =>
            router.push({name: "union-view", params: {unionName: this.name}})
        );
      }
    );
    },
    upload_banner: function (event) {
      this.banner = event.target.files[0];
    },
    upload_avatar: function (event) {
      this.icon = event.target.files[0];
    },
  },
};
</script>

<style lang="scss">
@import "../assets/theme";

@media (max-width: 992px)  {
  .union-card-body {
    grid-gap: $paddingHuge;
  }

  textarea, input {
    width: 100% !important;
  }
}

.union-card {
  display: flex;
  flex-direction: column;
  height: auto;
  padding: $paddingMedium;
  margin-bottom: 300px;
  background-color: $primary-black;
  border-radius: $borderRadius;
  font-family: "Overpass-SemiBold",serif;

  section {
    margin-bottom: $paddingMedium;
  }

  textarea, input {
    width: 90%;
  }
}

.union-card-body {
  padding: 0;
  margin: $paddingMedium;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: $paddingSmall;
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
  max-width: 350px;
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

.createTitle {
  color: white;
  text-align: center;
  user-select: none;
  font-size: 36px;
}

.requiredFields {
  float: right;
  font-family: "Overpass",serif;
  user-select: none;
  color: #c8c8c8;
  font-size: 18px;
  white-space: nowrap;
  margin: 0 !important;
}

.union-create-btn {
  padding-top: $paddingSmall;
  margin-bottom: 0;
}

.create-union {
  max-width: 250px;
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

.center {
  margin-left: 6px;
}

.description-height {
  height: 100%;
  min-height: 200px;
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
