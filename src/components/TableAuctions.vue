<template>
  <section :class="{'even': i%2 == 1}" class="table">
    <div>{{ auction.auctionId }}</div>
    <div>{{ auction.auctionName }}</div>
    <div>{{ auction.category }}</div>
    <div>{{ auction.startDate }}</div>
    <div>{{ auction.endDate }}</div>
    <div>{{ auction.email }}</div>
    <div>{{ auction.auctionStatus }}</div>
    <div>
      <i @click="$emit('end', auction.auctionId, auction.auctionStatus)" style="margin: 0 5px"
         :class="{'disabled': auction.auctionStatus !== 'w trakcie'}" class="fas fa-trash-alt fa-lg"></i>
      <i @click="$emit('start', auction.auctionId, auction.auctionStatus)" style="margin: 0 5px"
         :class="{'disabled': auction.auctionStatus !== 'zakończona'}" class="fas fa-undo-alt fa-lg"></i>
      <i @click="pushToAuction" style="margin: 0 5px" class="far fa-eye fa-lg"></i>

    </div>
    <!-- <div v-if="auction.active">
        <i @click="$emit('remove', auction.auctionId)" class="fas fa-lock fa-lg" style="margin: 0 5px"></i>

        <i @click="$emit('edit', auction)" class="fas fa-auction-edit fa-lg" style="margin: 0 5px"></i>
    </div>
    <div v-if="!auction.active">
        Zablokowany
    </div> -->

  </section>
</template>

<script>

export default {
  name: 'TableAuctions',
  props: {
    i: Number,
    auction: Object
  },
  methods: {
    pushToAuction() {
      // this.$router.push(`/oferta/${this.auction.auctionId}`);
      let route = this.$router.resolve(`/oferta/${this.auction.auctionId}`);
      window.open(route.href, '_blank');
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

.disabled {
  color: rgb(204, 204, 204);
  cursor: default !important;
}

.table {
  width: 100%;
  display: flex;
  justify-content: space-around;
  // margin: 5px 10px;
  box-sizing: border-box;
  // margin: 10px 0;
  padding: 14px 0;
  background-color: rgb(250, 250, 250);

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03));
  }

  div {
    width: 12.5%;
    // border: 1px solid black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;

    &:first-child {
      width: 60px;
    }

    &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
    }

    & > i {
      cursor: pointer;
    }
  }
}

.even {
  background-color: rgb(231, 231, 231) !important;
}


</style>