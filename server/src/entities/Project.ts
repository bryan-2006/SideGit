import { Entity, Property, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Project{
    @PrimaryKey()
    id!: number;

    @Property()
    createAt = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    title!: string;
}