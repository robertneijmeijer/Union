<template>
  <UnionHeader />
  <UnionContent />
</template>

<script>
import UnionHeader from "@/components/unionHeader";
import UnionContent from "@/components/unionContent";

export default {
  name: "unionOverviewView",
  components: {
    UnionHeader,
    UnionContent,
  },
};
</script>
