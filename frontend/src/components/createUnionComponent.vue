<template>
  <div class="container">
    <div class="union-card border-for-div">
      <p class="requiredFields">{{ $t("union_create.fields_required") }}</p>
      <p class="createTitle">{{ $t("union_create.create_community") }}</p>

      <div class="union-card-body">
        <section>
          <h4>{{ $t("union_create.name") }}</h4>
          <p v-if="name_inValid" class="error-text-color">
            {{ $t("union_create.invalid_title") }}
          </p>
          <input
            type="text"
            name="usernameId"
            class="form-control"
            v-model="name"
            v-bind:class="{ 'error-border': name_inValid }"
          />
        </section>

        <section>
          <h4>
            {{ $t("union_create.description") }}
          </h4>
          <p v-if="description_inValid" class="error-text-color">
            {{ $t("union_create.invalid_description") }}
          </p>
          <textarea
            size="lg"
            type="text"
            name="description"
            class="form-control union-card-body-description"
            v-model="description"
            v-bind:class="{ 'error-border': description_inValid }"
          />
        </section>
        <div class="union-card-choices">
          <section class="union-card-invites">
            <h4>{{ $t("union_create.invite_privilege") }}</h4>
            <p>{{ $t("union_create.max_invites") }}</p>
            <p v-if="invite_inValid" class="error-text-color">
              {{ $t("union_create.invalid_ratio") }}
            </p>

            <div class="union-card-invites-rows">
              <div class="union-card-invites-rows-radio">
                <input
                  type="radio"
                  id="onlyMe"
                  name="invitePrivilege"
                  v-model="members_can_invite"
                  v-bind:value="false"
                />
                <label
                  for="onlyMe"
                  v-bind:class="{ 'error-border': invite_inValid }"
                ></label>
              </div>
              <div class="invites-row-single-envelope">
                <img src="../assets/svg/singleEnvelope.svg" />
              </div>
              <p class="horizontal-padding">{{ $t("union_create.only_i") }}</p>
            </div>

            <div class="union-card-invites-rows">
              <div class="union-card-invites-rows-radio">
                <input
                  type="radio"
                  id="everyone"
                  name="invitePrivilege"
                  v-model="members_can_invite"
                  v-bind:value="true"
                />
                <label
                  for="everyone"
                  v-bind:class="{ 'error-border': invite_inValid }"
                ></label>
              </div>
              <img src="../assets/svg/multipleEnvelope.svg" />
              <p>{{ $t("union_create.everyone") }}</p>
            </div>
          </section>

          <section class="union-card-icon">
            <h4>{{ $t("union_create.icon") }}</h4>
            <input
              type="file"
              ref="iconFile"
              accept="image/*"
              @change="upload_avatar($event)"
            />
            <img
              src="../assets/svg/imageIcon.svg"
              v-on:click="$refs.iconFile.click()"
            />
          </section>

          <section class="union-card-banner">
            <div class="union-card-banner-items">
              <h4>{{ $t("union_create.banner_image") }}</h4>
              <input
                type="file"
                ref="bannerFile"
                accept="image/*"
                @change="upload_banner($event)"
              />
              <img
                src="../assets/svg/imageIcon.svg"
                v-on:click="$refs.bannerFile.click()"
              />
            </div>
          </section>
        </div>
      </div>

      <button
        class="btn union-card-button"
        type="submit"
        name="login-button"
        v-on:click="create()"
      >
        {{ $t("union_create.create_button") }}
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import UnionApi from "../api/union";
import { validateUnionTitle } from "../validation/validation";

export default {
  name: "unionCreate",
  methods: {
    create: function () {
      const data = new FormData();
      data.append("union_id", this.name);
      this.banner
        ? data.append("banner", this.banner)
        : data.append("banner", "");
      this.icon ? data.append("icon", this.icon) : data.append("icon", "");

      this.name_inValid = this.name ? validateUnionTitle(this.name) : true;
      this.description_inValid = !this.description;
      this.invite_inValid = this.members_can_invite == undefined;

      console.log(
        this.name_inValid || this.description_inValid || this.invite_inValid
      );

      if (
        this.name_inValid ||
        this.description_inValid ||
        this.invite_inValid
      ) {
        return;
      }

      UnionApi.postUnionImages(data).then(response => {
        UnionApi.postUnion({
          union: {
            name: this.name,
            description: this.description,
            members_can_invite: this.members_can_invite,
            icon: response.data.icon, // If no img don't give it one because it will grap default
            banner: response.data.banner,
          },
        }).then(() =>
          router.push({ name: "union-view", params: { unionName: this.name } })
        );
      });
    },
    upload_banner: function (event) {
      this.banner = event.target.files[0];
    },
    upload_avatar: function (event) {
      this.icon = event.target.files[0];
    },
  },
  data() {
    return {
      name_inValid: false,
      description_inValid: false,
      invite_inValid: false,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/theme";

img {
  user-select: none;
}

.union-card {
  display: flex;
  margin-top: 7.5%;
  flex-direction: column;
  padding: $paddingSmall $paddingMedium;
  background-color: $primary-black;

  P {
    margin: 0;
  }
  p,
  h4 {
    color: white;
  }
}

.requiredFields {
  user-select: none;
  color: $primary-light-gray;
  font-size: 0.8rem;
}

.createTitle {
  color: white;
  text-align: center;
  user-select: none;
  font-size: 36px;
}

.union-card-body {
  display: grid;
  gap: $paddingHuge;
  padding: $paddingMedium;
}

.union-card-body-description {
  height: 100%;
  min-height: 200px;
}

.union-card-choices {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  section {
    flex: 1;
  }
}

.union-card-invites {
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
  }
  p {
    color: $primary-light-gray;
    font-size: 0.6rem;
    margin-bottom: $paddingSmall;
  }
}

.union-card-invites-rows {
  display: inline-flex;
  flex-direction: row;

  > img,
  .invites-row-single-envelope {
    margin: 0 1rem;
    width: 3rem;
  }
  .invites-row-single-envelope {
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 2rem;
    }
  }

  p {
    display: flex;
    align-items: center;
    margin: 0;
    color: white;
    font-size: 1rem;
    line-height: 1rem;
  }
}

.union-card-invites-rows-radio {
  display: flex;
  align-items: center;
  padding: $paddingMedium $paddingSmall;

  label {
    background-color: $primary-black;
    border: 2px solid #c4c4c4;
    border-radius: 50%;
    cursor: pointer;
    height: 1.25rem;
    width: 1.25rem;
    margin: 0;
  }

  input[type="radio"] {
    visibility: hidden;
  }

  input[type="radio"]:checked + label {
    border: 0.4rem solid #00ffff;
  }
}

.union-card-icon,
.union-card-banner {
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
  }

  input {
    display: none;
  }
}

.union-card-icon {
  align-items: center;
  gap: 0.75rem;

  img {
    cursor: pointer;
  }
}
.union-card-banner {
  align-items: flex-end;

  img {
    cursor: pointer;
  }

  .union-card-banner-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
}

.union-card-button {
  align-self: center;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  color: white;
  background: transparent;
  font-size: 24px;

  &:hover {
    color: white;
    background-color: $primary-black;
    border: $buttonBorder $primary-black;
  }
}

@media (max-width: 75rem) {
  .union-card-choices {
    flex-direction: column;

    section,
    .union-card-banner-items {
      align-items: flex-start;

      h4 {
        margin-top: 1rem;
      }
    }
  }
}

@media (max-width: 45rem) {
  .union-card {
    padding: $paddingSmall;
  }
}

.error-border {
  border-color: $errorColor !important;
}

.error-text-color {
  color: $errorColor !important;
  font-size: 1rem !important;
}
</style>
