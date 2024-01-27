<script setup lang="ts">
import { ref } from 'vue';

import type { RecommendStatus } from '../types';
import { restaurantstatusList } from '../constants';

/**  
  * Restauran
  *
  * Name - string
  * Address - string
  * Status - string (e.g..*want to try* | *Must Try* | 
  * Dishes - array of Dish objects
  * 
*/

interface Dish {
  name?: string,
  diet?: Diet,
  status?: RecommendStatus
}

type Diet = | 'vegerarian' | 'vegan' | 'gluten-free' | 'pescatarian' | 'lactose-free' | 'other'




const dishList = ref<Dish[]>([])
const newDish = ref<Dish>({
  status: 'Want to Try'
})



function addDish() {
  dishList.value.push({
    name: newDish.value.name,
    status: newDish.value.status,
  });
}



</script>

<template>
  <main>
    <pre>
      {{ newDish }}
    </pre>
    <!-- Create a from tha allows user to ad a restaurant to a list -->

    <form @submit.prevent="addDish">
      <div>
        <label for="dish-name">Dish Name</label>
        <input id="dish-name" type="text" v-model="newDish.name" />
      </div>

      <div>
        <label for="dish-status">Dish Status</label>
        <select name="dish-status" v-model="newDish.status" id="dish-status">
          <option v-for="status in restaurantstatusList " :value="status" :key="status">{{ status }}</option>
        </select>
      </div>
      <button type="submit">Add Dish</button>
    </form>

    <ul>
      <li v-for="restaurant in dishList" :key="restaurant.name">
        {{ restaurant.name }} - {{ restaurant.status }}
      </li>
    </ul>
  </main>
</template>
