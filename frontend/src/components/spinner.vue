<template>
  <clip-loader :size="sizeValue"></clip-loader>
</template>

<script>
import ClipLoader from "vue-spinner/src/ClipLoader";

export default {
  name: "spinner",
  components: { ClipLoader },
  computed: {
    sizeValue: function() {
      switch (this.size) {
        case "small":
          return "25px";
        case "medium":
          return "75px";
        case "large":
          return "100px";
        case "huge":
          return "125px";
        default:
          return "75px";
      }
    },
  },
  props: {
    size: {
      type: String,
    },
  },
};
</script>
