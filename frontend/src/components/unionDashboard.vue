<template>
    <div class="union-grid">
        <h2>Joined Unions</h2>
        <div id="union" class="union-section">
            <div
                    class="union-section-post-comment"
                    v-for="union in unions"
                    v-bind:key="union.id"
            >
                <union-list-item :unionfields="union"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import UnionListItem from "../components/unionListItem.vue";
  // eslint-disable-next-line
  import { defineComponent, PropType } from "vue";
  // eslint-disable-next-line

  export interface UnionInterface {
    name: String;
    banner: String;
    icon: String;
    description: String
  }

  export default defineComponent({
    name: "unionDashboard",
    components: { UnionListItem },
    props: {
      unions: Array
    }
  });
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    @media only screen and (max-width: 1000px) {
        #union {
            grid-template-columns: 100fr;
        }
    }

    h2 {
        color: white;
        padding-top: 8px;
        text-align: center;
    }

    .union-grid {
        background-color: $primary-gray;
        border-radius: $borderRadius;
        margin: 40px 40px 0 40px;
    }

    .union-section {
        display: grid;
        grid-template-columns: 33fr 33fr 33fr;
        padding: 2em;
        column-gap: 1em;
        max-width: 100em;
    }

    .union-section-post-comment {
        display: flex;
        flex: 1;
        flex-direction: row;
        margin-bottom: 1em;
        background-color: $primary-gray;
    }
</style>
