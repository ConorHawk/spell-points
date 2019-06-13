<template>
  <section
    class="container mx-auto flex items-center justify-center min-h-screen antialiased text-black font-cursive"
  >
    <div>
      <div
        class="bg-contain bg-center bg-no-repeat flex items-center justify-center mb-4"
        style="background-image:url('/spell-circle.gif');width:300px;height:300px"
      >
        <div
          class="glow rounded-full flex items-center justify-center font-cursive"
          style="width:70px;height:70px"
        >
          <p class="text-4xl font-black -mt-2">{{ points }}</p>
        </div>
      </div>
      <div class="flex flex-col">
        <button
          v-for="level in spellLevels"
          :key="level.name"
          class="block border border-black rounded p-2 mb-2 focus:outline-none"
          @click="spendPoints(level.cost)"
        >
          <p class="font-bold">{{ level.name }}</p>
          <p class="text-xs">{{ level.cost }} points</p>
        </button>
      </div>
      <div class="flex justify-center">
        <button
          class="p-2 mt-4 text-sm focus:outline-none"
          @click="points = totalPoints"
        >
          Rest
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      totalPoints: 27,
      points: 27,
      spellLevels: [
        {
          name: 'Level one',
          cost: 2
        },
        {
          name: 'Level two',
          cost: 3
        },
        {
          name: 'Level three',
          cost: 5
        }
      ]
    }
  },
  methods: {
    spendPoints(cost) {
      this.points = this.points - cost
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .glow {
  box-shadow: 0px 0px 42px 17px rgba(168, 225, 255, 1);
} */
</style>
