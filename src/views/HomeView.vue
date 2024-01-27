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
// const ALL_STATUS = ['Want to Try', 'Recommended', 'Do Not Recommed', 'Must Try'];


// type RestaurantStatus = typeof ALL_STATUS;

// enum EnumStatus {
//   Recommend = "Recommend",
//   "Want To Try" = "Want To Try",
//   MustTry = "Must Try"
// }

// enum RestaurantStatusEnum {
//   "Recommend" = -1,
//   "Want To Try" = 0,
//   "Must Try" = 1,
//   "Do Not Recommend" = 2
// }

// const restaurantstatusList = [
//   'Want to Try',
//   'Recommend',
//   'Do Not Recommend',
//   'Must Try'
// ] as const


interface Restaurant {
  name?: string,
  status?: RecommendStatus,
  dishes?: Dish[]
}

interface Dish {
  name?: string,
  diet?: Diet,
  status?: RecommendStatus
}

type Diet = | 'vegerarian' | 'vegan' | 'gluten-free' | 'pescatarian' | 'lactose-free' | 'other'

// type RecommendStatus = typeof restaurantstatusList[number]

// type TestType = keyof typeof EnumStatus
// type RecordType = Record<EnumStatus, string>

// const TestStatus: TestType =


// type RestaurantStatus = keyof typeof RestaurantStatusEnum

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({
  status: 'Want to Try'
})



function addRestaurant() {
  restaurantList.value.push({
    name: newRestaurant.value.name,
    status: newRestaurant.value.status,
    dishes: []
  });
}



</script>

<template>
  <main>
    <pre>
      {{ newRestaurant }}
    </pre>
    <!-- Create a from tha allows user to ad a restaurant to a list -->

    <form @submit.prevent="addRestaurant">
      <div>
        <label for="restaurant.name">Restaurant Name</label>
        <input id="restautran-name" type="text" v-model="newRestaurant.name" />
      </div>
      <!-- <div>
        <label for="restaurant.address">Restaurant Address</label>
        <input id="restautran-address" type="text" v-model="newRestaurant.address" />
      </div> -->
      <div>
        <label for="restaurant.status">Restaurant Status</label>
        <select name="restaurant-status" v-model="newRestaurant.status" id="restaurant-status">
          <option v-for="status in restaurantstatusList " :value="status" :key="status">{{ status }}
          </option>
        </select>
      </div>
      <button type="submit">Add Restaurant</button>
    </form>

    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant.name">
        {{ restaurant.name }} - {{ restaurant.status }}
      </li>
    </ul>
  </main>
</template>
