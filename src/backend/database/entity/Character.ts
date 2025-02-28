import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Realm } from "./Realm";

@Entity()
export class Character {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   name!: string;

   @Column({ nullable: true })
   description!: string;

   @ManyToOne(() => Realm, (realm) => realm.characters, { onDelete: "CASCADE" })
   @JoinColumn({ name: "realm_id" })
   realm_id!: Realm;
}
