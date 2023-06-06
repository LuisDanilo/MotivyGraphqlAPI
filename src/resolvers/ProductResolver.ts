import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from "type-graphql"
import { Product } from '../entity/Product'

@InputType()
class ProductInput {
    
    @Field()
    name!: string
    
    @Field(() => Int)
    quantity!: number
}

@InputType()
class ProductUpdateInput {
    
    @Field()
    name!: string
    
    @Field(() => Int, { nullable: true })
    quantity?: number
}

@Resolver()
export class ProductResolver {
    @Mutation(() => Product)
    async createProduct( @Arg('params', () => ProductInput) params: ProductInput) {
        const p = Product.create({ ...params }).save()
        return p
    }

    @Mutation(() => Boolean)
    async deleteProduct( @Arg('id') id: number) {
        const r = await Product.delete(id)
        return r.affected && r.affected > 0
    }

    @Mutation(() => Boolean)
    async updateProduct( @Arg('id') id: number, @Arg('params') params: ProductUpdateInput) {
        await Product.update({ id }, params)
        return true
    }

    @Query(() => [Product])
    async getProducts() {
        const products = await Product.find()
        return products
    }
}