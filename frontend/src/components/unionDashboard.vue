<template>
    <div class="union-grid">
        <h2>Unions</h2>
        <div id="union" class="union-section">
            <div class="union-section-post-comment " v-for="(union, index) in unions"
                 v-bind:key="union.id">
                <union-list-item :union="union" :index="index"/>
            </div>
        </div>
        <div class="side-menu">
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
            id: 1,
            name: "The crypto union",
            url: "../assets/img/bravenewcoin-Fungibility-in-Crypto-banner.jpeg",
            creator: "Joel",
          },
          {
            id: 1,
            name: "The crypto union",
            url: "../assets/img/bravenewcoin-Fungibility-in-Crypto-banner.jpeg",
            creator: "Joel",
          }
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    @media only screen and (max-width: 726px) {
        #union {
            grid-template-columns: 100fr;
        }
    }

    h2 {
        text-align: center;
        color: white;
        padding-top: 8px;
    }

    .union-grid {
        width: 75%;
        background-color: $primary-gray;
        border-radius: $borderRadius;
        margin: 15px 0 0 15px;
    }

    .union-section {
        display: grid;
        grid-template-columns: 50fr 50fr;
        padding: 2em;
        column-gap: 1em;
        max-width: 50em;
    }


    .union-section-post-comment {
        display: flex;
        flex: 1;
        flex-direction: row;
        margin-bottom: 1em;
        background-color: $primary-gray;
    }

    .side-menu {
        width: 25%;
        background-color: green;
        height: 100%;
        display: inline;
        flex: 3
    }

    .hover {
        height: 100%;
        background-color: $primary-gray;
        width: 20%;
    }

</style>
