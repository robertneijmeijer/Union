<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <h1 class="welcome-text">Welcome to union !</h1>
    </div>
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3 class="createTitle">Create a community</h3>
          <h6 class="required">* Fields are required</h6>
        </div>
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
            <div class="row">
              <input type="checkbox" id="onlyMe">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.13158 4.76053H24.8684C25.8917 4.7633 26.7699 5.48965 26.9645 6.4941L13.5 13.9974L0.0355263 6.4941C0.230088 5.48965 1.10825 4.7633 2.13158 4.76053ZM24.8684 22.2822H2.13158C0.95588 22.2786 0.00333059 21.3263 0 20.1506V8.1L13.152 15.4326C13.2585 15.4911 13.3782 15.5231 13.5 15.525C13.6224 15.5264 13.7426 15.4945 13.848 15.4326L27 8.1V20.1506C26.9992 21.3274 26.0452 22.2811 24.8684 22.2822Z"
                    fill="#00C9C9"/>
              </svg>
              <h6 class="white-text horizontal-padding">Only i can invite</h6>
            </div>
            <div class="row">
              <input type="checkbox" id="everyone">
              <svg width="61" height="37" viewBox="0 0 61 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="33" y="19" width="28" height="18" rx="2" fill="#2C2C2C"/>
                <rect x="16" width="28" height="18" rx="2" fill="#2C2C2C"/>
                <path
                    d="M18.2105 0H41.7895C42.8507 0.00285126 43.7614 0.749026 43.9632 1.7809L30 9.48899L16.0368 1.7809C16.2386 0.749026 17.1493 0.00285126 18.2105 0ZM41.7895 18H18.2105C16.9913 17.9963 16.0035 17.018 16 15.8102V3.43063L29.6391 10.9634C29.7496 11.0235 29.8736 11.0563 30 11.0583C30.1269 11.0597 30.2516 11.027 30.3609 10.9634L44 3.43063V15.8102C43.9991 17.0192 43.0099 17.9989 41.7895 18Z"
                    fill="#00C9C9"/>
                <rect x="0.5" y="19.5" width="27" height="17" rx="1.5" fill="#2C2C2C" stroke="black"/>
                <path
                    d="M2.21053 19H25.7895C26.8507 19.0029 27.7614 19.749 27.9632 20.7809L14 28.489L0.0368421 20.7809C0.23861 19.749 1.1493 19.0029 2.21053 19ZM25.7895 37H2.21053C0.991283 36.9963 0.00345395 36.018 0 34.8102V22.4306L13.6391 29.9634C13.7496 30.0235 13.8736 30.0563 14 30.0583C14.1269 30.0597 14.2516 30.027 14.3609 29.9634L28 22.4306V34.8102C27.9991 36.0192 27.0099 36.9989 25.7895 37Z"
                    fill="#00C9C9"/>
                <path
                    d="M35.2105 19H58.7895C59.8507 19.0029 60.7614 19.749 60.9632 20.7809L47 28.489L33.0368 20.7809C33.2386 19.749 34.1493 19.0029 35.2105 19ZM58.7895 37H35.2105C33.9913 36.9963 33.0035 36.018 33 34.8102V22.4306L46.6391 29.9634C46.7496 30.0235 46.8736 30.0563 47 30.0583C47.1269 30.0597 47.2516 30.027 47.3609 29.9634L61 22.4306V34.8102C60.9991 36.0192 60.0099 36.9989 58.7895 37Z"
                    fill="#00C9C9"/>
              </svg>
              <div class="column">
                <h6 class="horizontal-padding">Everyone can invite *</h6>
                <h6 class="max-invites">Members get max 2 invites</h6>
              </div>

            </div>
            <div>
              <h4 class="white-text"> Icon </h4>
              <div class="circle">
                <svg class="image-upload" width="55" height="55" viewBox="0 0 55 55" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M46.4062 1.93359H8.59375C3.85502 1.93359 0 5.78861 0 10.5273V40.6055C0 45.3442 3.85502 49.1992 8.59375 49.1992H37.9199C39.1066 49.1992 40.0684 48.2375 40.0684 47.0508C40.0684 45.8641 39.1066 44.9023 37.9199 44.9023H30.0068L25.0671 38.494L40.7209 18.5836L51.2587 30.2304C51.8546 30.8897 52.7949 31.1133 53.6241 30.794C54.4528 30.4742 55 29.6774 55 28.7891V10.5273C55 5.78861 51.145 1.93359 46.4062 1.93359V1.93359ZM50.7031 23.2124L42.1988 13.8125C41.7741 13.343 41.1631 13.0836 40.5312 13.1067C39.8988 13.129 39.308 13.4286 38.9165 13.9262L22.361 34.9834L16.7406 27.6922C16.334 27.1647 15.7054 26.8555 15.0391 26.8555C15.0386 26.8555 15.0382 26.8555 15.0378 26.8555C14.3715 26.8559 13.7424 27.1656 13.3363 27.6939L8.60802 33.8404C7.8846 34.7812 8.06042 36.1298 9.00078 36.8533C9.94156 37.5771 11.2902 37.4009 12.014 36.4605L15.0407 32.5253L24.5816 44.9023H8.59375C6.22459 44.9023 4.29688 42.9746 4.29688 40.6055V10.5273C4.29688 8.15819 6.22459 6.23047 8.59375 6.23047H46.4062C48.7754 6.23047 50.7031 8.15819 50.7031 10.5273V23.2124Z"
                      fill="#00FFFF"/>
                  <path
                      d="M15.0391 9.66797C11.4849 9.66797 8.59375 12.5591 8.59375 16.1133C8.59375 19.6674 11.4849 22.5586 15.0391 22.5586C18.5932 22.5586 21.4844 19.6674 21.4844 16.1133C21.4844 12.5591 18.5932 9.66797 15.0391 9.66797ZM15.0391 18.2617C13.8545 18.2617 12.8906 17.2979 12.8906 16.1133C12.8906 14.9287 13.8545 13.9648 15.0391 13.9648C16.2236 13.9648 17.1875 14.9287 17.1875 16.1133C17.1875 17.2979 16.2236 18.2617 15.0391 18.2617Z"
                      fill="#00FFFF"/>
                  <path
                      d="M50.3247 34.4761C50.3184 34.4698 50.3121 34.4631 50.3058 34.4568C49.2904 33.4342 47.9396 32.8711 46.502 32.8711C45.0686 32.8711 43.7216 33.4309 42.7074 34.4476L38.5595 38.5389C37.7148 39.3718 37.7056 40.7322 38.539 41.5769C39.3719 42.4216 40.7323 42.4312 41.577 41.5979L44.3536 38.8594V50.918C44.3536 52.1046 45.3153 53.0664 46.502 53.0664C47.6887 53.0664 48.6505 52.1046 48.6505 50.918V38.9249L51.3079 41.67C51.7292 42.1056 52.2902 42.3242 52.8517 42.3242C53.39 42.3242 53.9288 42.1232 54.3459 41.7196C55.1986 40.8942 55.2204 39.5342 54.395 38.6815L50.3247 34.4761Z"
                      fill="#00FFFF"/>
                </svg>
              </div>
            </div>
            <div>
              <h4 class="white-text"> Banner image </h4>
              <div class="banner-image">
                <svg class="image-upload" width="55" height="55" viewBox="0 0 55 55" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M46.4062 1.93359H8.59375C3.85502 1.93359 0 5.78861 0 10.5273V40.6055C0 45.3442 3.85502 49.1992 8.59375 49.1992H37.9199C39.1066 49.1992 40.0684 48.2375 40.0684 47.0508C40.0684 45.8641 39.1066 44.9023 37.9199 44.9023H30.0068L25.0671 38.494L40.7209 18.5836L51.2587 30.2304C51.8546 30.8897 52.7949 31.1133 53.6241 30.794C54.4528 30.4742 55 29.6774 55 28.7891V10.5273C55 5.78861 51.145 1.93359 46.4062 1.93359V1.93359ZM50.7031 23.2124L42.1988 13.8125C41.7741 13.343 41.1631 13.0836 40.5312 13.1067C39.8988 13.129 39.308 13.4286 38.9165 13.9262L22.361 34.9834L16.7406 27.6922C16.334 27.1647 15.7054 26.8555 15.0391 26.8555C15.0386 26.8555 15.0382 26.8555 15.0378 26.8555C14.3715 26.8559 13.7424 27.1656 13.3363 27.6939L8.60802 33.8404C7.8846 34.7812 8.06042 36.1298 9.00078 36.8533C9.94156 37.5771 11.2902 37.4009 12.014 36.4605L15.0407 32.5253L24.5816 44.9023H8.59375C6.22459 44.9023 4.29688 42.9746 4.29688 40.6055V10.5273C4.29688 8.15819 6.22459 6.23047 8.59375 6.23047H46.4062C48.7754 6.23047 50.7031 8.15819 50.7031 10.5273V23.2124Z"
                      fill="#00FFFF"/>
                  <path
                      d="M15.0391 9.66797C11.4849 9.66797 8.59375 12.5591 8.59375 16.1133C8.59375 19.6674 11.4849 22.5586 15.0391 22.5586C18.5932 22.5586 21.4844 19.6674 21.4844 16.1133C21.4844 12.5591 18.5932 9.66797 15.0391 9.66797ZM15.0391 18.2617C13.8545 18.2617 12.8906 17.2979 12.8906 16.1133C12.8906 14.9287 13.8545 13.9648 15.0391 13.9648C16.2236 13.9648 17.1875 14.9287 17.1875 16.1133C17.1875 17.2979 16.2236 18.2617 15.0391 18.2617Z"
                      fill="#00FFFF"/>
                  <path
                      d="M50.3247 34.4761C50.3184 34.4698 50.3121 34.4631 50.3058 34.4568C49.2904 33.4342 47.9396 32.8711 46.502 32.8711C45.0686 32.8711 43.7216 33.4309 42.7074 34.4476L38.5595 38.5389C37.7148 39.3718 37.7056 40.7322 38.539 41.5769C39.3719 42.4216 40.7323 42.4312 41.577 41.5979L44.3536 38.8594V50.918C44.3536 52.1046 45.3153 53.0664 46.502 53.0664C47.6887 53.0664 48.6505 52.1046 48.6505 50.918V38.9249L51.3079 41.67C51.7292 42.1056 52.2902 42.3242 52.8517 42.3242C53.39 42.3242 53.9288 42.1232 54.3459 41.7196C55.1986 40.8942 55.2204 39.5342 54.395 38.6815L50.3247 34.4761Z"
                      fill="#00FFFF"/>
                </svg>
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

.max-invites {
  color: $lightGreyColor;
}

.row {
  flex-direction: row;
  justify-content: flex-start;
}

.column {
  flex-direction: column;
}

.horizontal-padding {
  padding-left: $paddingSmall;
  padding-right: $paddingSmall;
  color: white;
}

.circle {
  width: 100px;
  height: 100px;
  background-color: $darkGreyColor;
  border-radius: $borderRadius * 3;
}

.banner-image {
  width: 300px;
  height: 100px;
  background-color: $darkGreyColor;
  border-radius: $borderRadius;
}

.image-upload {

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
  padding-right: $paddingHuge *2;
  width: 300px;
}

.createTitle {
  color: white;
  text-align: center;
  margin-top: 10px;
  user-select: none;
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
