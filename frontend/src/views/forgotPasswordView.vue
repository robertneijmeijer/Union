<template>
    <div id="forgotPasswordView">
       <top-bar-logo></top-bar-logo>
        <div id="forgotPasswordCard">
           <forgot-password-component></forgot-password-component>
        </div>
    </div>
</template>

<script>
    import forgotPasswordComponent from "@/components/forgotPasswordComponent";
    import TopBarLogo from "@/components/topBarLogoComponent";

    export default {
    name: "forgotPasswordView",
      components: {TopBarLogo, forgotPasswordComponent}
  };
</script>


<style lang="scss" scoped>
    #forgotPasswordView{
        max-height: 100%;
    }

    #forgotPasswordCard{
        margin-top: 100px;
    }

</style>
