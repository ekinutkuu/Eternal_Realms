import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Realm } from "./Realm";

@Entity()
export class Location {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   name!: string;

   @Column({ nullable: true })
   description!: string;

   @ManyToOne(() => Realm, (realm) => realm.locations, { onDelete: "CASCADE" })
   @JoinColumn({ name: "realm_id" })
   realm_id!: Realm;
}
