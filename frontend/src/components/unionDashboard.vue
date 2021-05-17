<template>
    <div class="union-section">
        <div class="union-section-post">
            <div class="union-section-post-comment border-for-div" v-for="(union, index) in unions"
                 v-bind:key="union.id">
                <union-list-item :union="union" :index="index" />
            </div>
        </div>
    </div>
</template>

<script>
  import UnionListItem from "@/components/unionListItem";
  export default {
    name: "unionDashboard",
    components: { UnionListItem },
    data() {
      return {
        unions: [
          {
            id: 1,
            name: "The crypto union",
            url: "../assets/img/bravenewcoin-Fungibility-in-Crypto-banner.jpeg",
            creator: "Joel",
          },
          {
            id: 2,
            name: "Another one",
            url: "../assets/img/bravenewcoin-Fungibility-in-Crypto-banner.jpeg",
            creator: "Koen",
          },
          {
            id: 2,
            name: "Another one",
            url: "../assets/img/bravenewcoin-Fungibility-in-Crypto-banner.jpeg",
            creator: "Koen",
          }]
    }}
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";
    
    .union-section {
        display: grid;
        grid-template-columns: 25fr 50fr 25fr;
        padding: 2em;
        column-gap: 2em;
        max-width: 40em;
        margin: 0 auto;
    }

    .union-section-post {
        grid-column-start: 2;
        grid-column-end: 2;
    }

    .union-section-post-comment {
        display: flex;
        flex: 1;
        flex-direction: row;
        margin-bottom: 1em;
        background-color: $primary-gray;
    }

    @media only screen and (max-width: 80rem) {
        .union-section {
            grid-template-columns: 5fr 90fr 5fr;
            column-gap: 0;
        }
        .union-section-community {
            display: none;
        }
    }

    @media only screen and (max-width: 45rem) {
        .union-section {
            grid-template-columns: 0 1fr 0;
        }
    }
</style>
