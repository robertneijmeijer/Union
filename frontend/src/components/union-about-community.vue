<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        {{ $t("union_overview.community-info") }}
      </div>
      <div class="card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis quam
        ultricies, porta lacus nec, aliquet purus. Proin maximus diam risus, in
        commodo orci dapibus et. Integer vestibulum enim quis magna lacinia
        suscipit. Cras molestie, nibh vitae gravida feugiat, dolor nisl
        imperdiet ex, at scelerisque mi arcu id urna. Fusce lorem ipsum.
      </div>
      <div class="com-info">
        <div class="members">
          152k
          <div class="members-sub">{{ $t("union_overview.members") }}</div>
        </div>
        <div class="online">
          195
          <div class="online-sub">
            {{ $t("union_overview.online-members") }}
          </div>
        </div>
      </div>
      <div class="created">{{ $t("union_overview.created") }} 18 dec. 2008</div>
      <div class="card-action">
        <button class="create-post">
          {{ $t("union_overview.create-post") }}
        </button>
        <button class="invite">
          {{ $t("union_overview.invite-members") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "union-about-community",
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

@font-face {
  font-family: "Overpass-Regular";
}

.card {
  background-color: #1a1a1b;
  height: 500px;
  width: 100%;
  padding: 8px;
}

.card-header {
  color: white;
  padding: 6px;
  opacity: 60%;
  height: 5vh;
}

.card-content {
  color: white;
  padding: 6px;
  height: 45vh;
  overflow: hidden;
}

.com-info {
  width: 100%;
  padding: 6px;
  border-bottom: 1px solid white;
}

.members {
  color: white;
  float: left;
}

.online {
  color: white;
  text-align: center;
}

.created {
  color: white;
  padding: 6px;
  margin-top: 10px;
}

.card-action {
  height: 20vh;
}

.create-post {
  margin-top: 10px;
  width: 100%;
  background-color: #cccccc;
  border-radius: $borderRadius;
  border: none;
  font-weight: bold;
  user-select: none;
}

.invite {
  width: 100%;
  margin-top: 15px;
  background-color: transparent;
  border: 1px solid #cccccc;
  color: #cccccc;
  font-weight: bold;
  border-radius: $borderRadius;
}
</style>
