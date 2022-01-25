import {Entity, Column, OneToMany, PrimaryColumn} from "typeorm";
import { FoodList } from "./FoodList";

@Entity()
export class Restaurant {

    @PrimaryColumn()
    res_id: number;

    @Column()
    restaurant_name: string;

    @Column()
    location:string;

    @Column()
    homepageLink:string;

    @Column()
    opening_hour:string;
    
    @Column()
    closing_hour:string;

    @OneToMany(() => FoodList, (foodlist) =>foodlist.restaurant)
    foodlists: FoodList[];



}


