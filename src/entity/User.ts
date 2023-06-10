import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    
    @Field()
    @PrimaryGeneratedColumn()
    id!: number
    
    @Field(() => String)
    @Column()
    name!: string
    
    @Field(() => String)
    @Column("int", {default: 0})
    lastname!: string

    @Field(() => String)
    @Column()
    dni!: string
    
    @Field(() => String)
    @CreateDateColumn({type: 'timestamp'})
    createdAt!: string 
}