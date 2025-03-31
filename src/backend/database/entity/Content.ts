import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from "typeorm";
import { Realm } from "./Realm";

@Entity()
export class Content {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   name!: string;

   @ManyToMany(() => Realm, (realm) => realm.contentTypes, { onDelete: "CASCADE" })
   @JoinColumn({ name: "realm_id" })
   realm_id!: Realm[];
}
