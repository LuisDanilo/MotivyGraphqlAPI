import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from "type-graphql"
import { User } from '../entity/User'

@InputType()
class UserInput {
    
    @Field()
    name!: string
    
    @Field()
    lastname!: string
}

@InputType()
class UserUpdateInput {
    
    @Field()
    name!: string
    
    @Field(() => String, { nullable: true })
    lastname?: string
}

@Resolver()
export class UserResolver {
    @Mutation(() => User)
    async createUser( @Arg('params', () => UserInput) params: UserInput) {
        const u = User.create({ ...params }).save()
        return u
    }

    @Mutation(() => Boolean)
    async deleteUser( @Arg('id') id: number) {
        const r = await User.delete(id)
        return r.affected && r.affected > 0
    }

    @Mutation(() => Boolean)
    async updateUser( @Arg('id') id: number, @Arg('params') params: UserUpdateInput) {
        await User.update({ id }, params)
        return true
    }

    @Query(() => [User])
    async getUsers() {
        const users = await User.find()
        return users
    }
}