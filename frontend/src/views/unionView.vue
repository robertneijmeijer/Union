<template>
  <union-overview-navigator></union-overview-navigator>
  <CreatePostComponent v-if="showCreatePost" />
  <UnionHeader/>
  <UnionContent @callbackToggleCreatePost="toggleCreatePost"/>
</template>

<script>
import UnionHeader from "@/components/unionHeader";
import UnionContent from "@/components/unionContent";
import UnionOverviewNavigator from "@/components/unionOverviewNavigator";
import CreatePostComponent from "../components/createPost"

export default {
  name: "unionOverviewView",
  components: {
    UnionOverviewNavigator,
    UnionHeader,
    UnionContent,
    CreatePostComponent,
  },
  data() {
    return {
      showCreatePost: false
    }
  },
  methods: {
    toggleCreatePost() {
      console.log("TOGGLE");
      this.showCreatePost = !this.showCreatePost
    }
  }
};
</script>
