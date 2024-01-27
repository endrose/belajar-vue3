
import { restaurantstatusList } from './constants';
export type RecommendStatus = typeof restaurantstatusList[number]

export interface Dish {
  name?: string,
  diet?: Diet,
  status?: RecommendStatus
}

export type Diet = | 'vegerarian' | 'vegan' | 'gluten-free' | 'pescatarian' | 'lactose-free' | 'other'