<template>
  <div class="comment-container">
    <div class="comment-header">
      <img :src="require('../assets/img/user-icon-png-person-user-profile-icon-20.png')" />
      <p><span>{{ "yan_alex" }}</span>{{" "}}{{ "1 hour ago" }}</p>
    </div>
    <div class="comment-content">
      Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

      Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
</template>

<script>
export default {
  name: "commentComponent"
}
</script>

<style lang="scss">
@import "../assets/theme";


.comment-container {
  width: 100%;
  background-color: $secondary-light-gray;
  border-radius: $borderRadius * 2;
  padding: $paddingSmall * 1.5;
}

.comment-header {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: $paddingSmall;

  span {
    color: $unionBlue !important;
  }

  p {
    margin: 0;
    display: flex;
    align-items: center;
  }

  img {
    width: 35px;
    height: 35px;
  }

}


</style>


