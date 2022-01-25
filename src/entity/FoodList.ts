import {Entity, Column, ManyToOne, PrimaryColumn} from "typeorm";
import { Restaurant } from "./Restaurant";
@Entity()
export class FoodList {

    @PrimaryColumn()
    item_id: number;

    @Column()
    item_name: string;

    @Column()
    quantity:number;

    @Column()
    old_price:string;

    @Column()
    new_price:string;

    @Column()
    restaurant_name:string;

    @ManyToOne(() => Restaurant, restaurant => restaurant.foodlists)
    restaurant: Restaurant;

}