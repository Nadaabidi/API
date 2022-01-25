import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { RefreshToken } from "./RefreshToken";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    ownerid: number;

    @Column()
    username: string;

    @Column()
    email:string;


    @Column()
    passwd:string;
    
    @OneToMany(() => RefreshToken, refToken => refToken.owner)
    refreshTokens: RefreshToken;

}