import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Character } from "./Character";
import { Location } from "./Location";

@Entity()
export class Realm {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column({ unique: true })
   name!: string;

   @Column({ nullable: true })
   description!: string;

   @Column({ default: "unknown.jpg" })
   image!: string;

   @OneToMany(() => Character, (character) => character.realm_id)
   characters!: Character[];

   @OneToMany(() => Location, (location) => location.realm_id)
   locations!: Location[];
}
