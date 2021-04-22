<template>
    <div class="post">
        <table class="table">
            <tr>
                <td class="votes">
                    <div>
                        <button class="upvote-button">
                            <img class="upvote-image" src="../assets/up-arrow.png"/>
                        </button>
                    </div>
                    <div class="vote-amount">
                        <span>603</span>
                    </div>
                    <div>
                        <button class="downvote-button">
                            <img class="downvote-image" src="../assets/up-arrow.png"/>
                        </button>
                    </div>
                </td>
                <td class="post-content">
                    <span class="post-info">{{post.info}}</span>
                    <h3 class="post-title">{{post.title}}</h3>
                    <div class="post-text">{{post.content}}</div>
                    <div class="comments-amount">
                        <a class="comments-link" href="" v-on:click="toComments">
                            {{post.vote}}</a></div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    name: "union-post-component",
    props: {
      post:{
        info: String,
        title: String,
        content: String,
        vote: String
      }
    },
    methods: {
      toComments: function() {
      },
    },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .post {
        margin-top: 15px;
    }

    .post-info {
        color: white;
        font-size: 14px;
        opacity: 60%;
    }

    .vote-amount {
        color: white;
    }

    .votes {
        width: 10%;
        height: 250px;
        vertical-align: top;
        text-align: center;
        background-color: #161617;
    }

    .post-content {
        width: 90%;
        text-align: left;
        vertical-align: top;
        background-color: #1A1A1B;
        padding: 8px;
        position: relative;
    }

    .upvote-button {
        background-color: transparent;
        border: none;
    }

    .upvote-image {
        background-color: transparent;
        height: 20px;
    }

    .downvote-button {
        background-color: transparent;
        border: none;
    }

    .downvote-image {
        background-color: transparent;
        height: 20px;
        transform: rotate(180deg);
    }

    .vote-amount {
        margin: 7px;
        text-align: center;
        font-weight: bold;
        color: #00FFFF;
    }

    .post-title {
        color: white;
        font-weight: bold;
        font-size: 22px;
        margin-top: 5px;
    }

    .post-text {
        width: 100%;
        overflow: hidden;
        color: white;
        height: auto;
        max-height: 150px;

    }

    .comments-amount {
        width: 100%;
        position: absolute;
        bottom: 0;
        margin-bottom: 5px;
    }

    .comments-link {
        color: white;
        opacity: 60%;
    }

    .table {
        width: 100%;
        margin-top: 15px;
    }

    .table td:first-child {
        border-spacing: 0;
        border-radius: 6px 0 0 6px;
        border: none;
    }

    .table td:last-child {
        border-spacing: 0;
        border-radius: 0 6px 6px 0;
        border: none;
    }


</style>
