import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Character } from "./Character";
import { Location } from "./Location";
import { Content } from "./Content";

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

   @ManyToMany(() => Content, (content) => content.realm_id)
   @JoinTable({ name: "realm_contents", joinColumn: { name: "realm_id" }, inverseJoinColumn: { name: "content_id" } })
   contentTypes!: Content[];
}
