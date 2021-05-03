<template>
  <div class="invite-container invite-center">
    <div class="invite-card">
      <div class="invite-center">
        <img src="../assets/bravenewcoin-Fungibility-in-Crypto-banner.jpeg" alt="Responsive banner"
             class="invite-banner">
        <div class="invite-overlay">
          <img src="../assets/bitcoin-icon.png" alt="Responsive icon" class="invite-icon">
          <p class="invite-union-name">TheCryptoUnion</p>
        </div>
      </div>
      <div class="invite-center">
        <p class="invite-text">Koen Lippe has invited you to UnionName</p>
        <div class="invite-buttons">
          <button class=" btn btn-primary invite-button">
            Accept
          </button>
          <button class=" btn btn-primary invite-button invite-button-decline">
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "acceptInvite",
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.invite-container {
  height: 80%;
  width: 100%;
}

.invite-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.invite-card {
  max-height: 500px;
  height: 100%;
  max-width: 1000px;
  width: 100%;
  background-color: $cardBackgroundColor;
  border-radius: $borderRadiusSmall;
}

.invite-banner {
  max-width: 900px;
  width: 100%;
  max-height: 200px;
  height: 100%;
  border-radius: $borderRadiusSmall;
  margin-top: $paddingExtreme;
}

.invite-text {
  font-size: 36px;
  font-family: "Overpass-SemiBold";
  color: white;
  padding-top: $paddingMedium;
  margin-top: $paddingLarge;
  margin-bottom: $paddingSmall;
}

.invite-icon {
  max-width: 76px;
  max-height: 76px;
  width: 100%;
  height: 100%;
  left: 10%;
  top: 50%;
  transform: translate(-400%,-50%);
  margin-top: $paddingMedium;
}

.invite-union-name {
  color: white;
  font-size: 24px;
  font-family: "Overpass-bold";
  margin-top: $paddingMedium * 1.5;
  left: 10%;
  top: 50%;
  transform: translate(-160%,-40%);
  user-select: none;
}

.invite-overlay {
  display: flex;
  position: absolute;
}

.invite-buttons {
  display: flex;
  flex-direction: row;
  padding-top: $paddingExtreme;
}

.invite-button {
  max-width: 120px;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  color: white;
  background: transparent;
  font-size: 24px;
  border-radius: $borderRadius;
  margin-left: $paddingHuge;
  margin-right: $paddingHuge;
}

.invite-button-decline {
  border: $buttonBorder $errorColor;
}
</style>
