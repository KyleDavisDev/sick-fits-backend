module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCart {
  count: Int!
}

type AggregateCartItem {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderItem {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Cart {
  id: ID!
  items(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem!]
  user: User!
  created: Int!
  updated: Int!
  isActive: Boolean!
}

type CartConnection {
  pageInfo: PageInfo!
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  items: CartItemCreateManyInput
  user: UserCreateOneInput!
  created: Int!
  updated: Int!
  isActive: Boolean
}

type CartEdge {
  node: Cart!
  cursor: String!
}

type CartItem {
  id: ID!
  quantity: Int!
  item: Item
}

type CartItemConnection {
  pageInfo: PageInfo!
  edges: [CartItemEdge]!
  aggregate: AggregateCartItem!
}

input CartItemCreateInput {
  quantity: Int
  item: ItemCreateOneInput
}

input CartItemCreateManyInput {
  create: [CartItemCreateInput!]
  connect: [CartItemWhereUniqueInput!]
}

type CartItemEdge {
  node: CartItem!
  cursor: String!
}

enum CartItemOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CartItemPreviousValues {
  id: ID!
  quantity: Int!
}

type CartItemSubscriptionPayload {
  mutation: MutationType!
  node: CartItem
  updatedFields: [String!]
  previousValues: CartItemPreviousValues
}

input CartItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CartItemWhereInput
  AND: [CartItemSubscriptionWhereInput!]
  OR: [CartItemSubscriptionWhereInput!]
  NOT: [CartItemSubscriptionWhereInput!]
}

input CartItemUpdateDataInput {
  quantity: Int
  item: ItemUpdateOneInput
}

input CartItemUpdateInput {
  quantity: Int
  item: ItemUpdateOneInput
}

input CartItemUpdateManyInput {
  create: [CartItemCreateInput!]
  delete: [CartItemWhereUniqueInput!]
  connect: [CartItemWhereUniqueInput!]
  disconnect: [CartItemWhereUniqueInput!]
  update: [CartItemUpdateWithWhereUniqueNestedInput!]
  upsert: [CartItemUpsertWithWhereUniqueNestedInput!]
}

input CartItemUpdateWithWhereUniqueNestedInput {
  where: CartItemWhereUniqueInput!
  data: CartItemUpdateDataInput!
}

input CartItemUpsertWithWhereUniqueNestedInput {
  where: CartItemWhereUniqueInput!
  update: CartItemUpdateDataInput!
  create: CartItemCreateInput!
}

input CartItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  item: ItemWhereInput
  AND: [CartItemWhereInput!]
  OR: [CartItemWhereInput!]
  NOT: [CartItemWhereInput!]
}

input CartItemWhereUniqueInput {
  id: ID
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  created_ASC
  created_DESC
  updated_ASC
  updated_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CartPreviousValues {
  id: ID!
  created: Int!
  updated: Int!
  isActive: Boolean!
}

type CartSubscriptionPayload {
  mutation: MutationType!
  node: Cart
  updatedFields: [String!]
  previousValues: CartPreviousValues
}

input CartSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CartWhereInput
  AND: [CartSubscriptionWhereInput!]
  OR: [CartSubscriptionWhereInput!]
  NOT: [CartSubscriptionWhereInput!]
}

input CartUpdateInput {
  items: CartItemUpdateManyInput
  user: UserUpdateOneRequiredInput
  created: Int
  updated: Int
  isActive: Boolean
}

input CartWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  items_every: CartItemWhereInput
  items_some: CartItemWhereInput
  items_none: CartItemWhereInput
  user: UserWhereInput
  created: Int
  created_not: Int
  created_in: [Int!]
  created_not_in: [Int!]
  created_lt: Int
  created_lte: Int
  created_gt: Int
  created_gte: Int
  updated: Int
  updated_not: Int
  updated_in: [Int!]
  updated_not_in: [Int!]
  updated_lt: Int
  updated_lte: Int
  updated_gt: Int
  updated_gte: Int
  isActive: Boolean
  isActive_not: Boolean
  AND: [CartWhereInput!]
  OR: [CartWhereInput!]
  NOT: [CartWhereInput!]
}

input CartWhereUniqueInput {
  id: ID
}

scalar DateTime

type Item {
  id: ID!
  title: String!
  description: String!
  image: String
  largeImage: String
  price: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User!
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  title: String!
  description: String!
  image: String
  largeImage: String
  price: Int!
  user: UserCreateOneInput!
}

input ItemCreateOneInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  image_ASC
  image_DESC
  largeImage_ASC
  largeImage_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  title: String!
  description: String!
  image: String
  largeImage: String
  price: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateDataInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  user: UserUpdateOneRequiredInput
}

input ItemUpdateInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  user: UserUpdateOneRequiredInput
}

input ItemUpdateOneInput {
  create: ItemCreateInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ItemWhereUniqueInput
}

input ItemUpsertNestedInput {
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  largeImage: String
  largeImage_not: String
  largeImage_in: [String!]
  largeImage_not_in: [String!]
  largeImage_lt: String
  largeImage_lte: String
  largeImage_gt: String
  largeImage_gte: String
  largeImage_contains: String
  largeImage_not_contains: String
  largeImage_starts_with: String
  largeImage_not_starts_with: String
  largeImage_ends_with: String
  largeImage_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCart(data: CartCreateInput!): Cart!
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  updateManyCarts(data: CartUpdateInput!, where: CartWhereInput): BatchPayload!
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteManyCarts(where: CartWhereInput): BatchPayload!
  createCartItem(data: CartItemCreateInput!): CartItem!
  updateCartItem(data: CartItemUpdateInput!, where: CartItemWhereUniqueInput!): CartItem
  updateManyCartItems(data: CartItemUpdateInput!, where: CartItemWhereInput): BatchPayload!
  upsertCartItem(where: CartItemWhereUniqueInput!, create: CartItemCreateInput!, update: CartItemUpdateInput!): CartItem!
  deleteCartItem(where: CartItemWhereUniqueInput!): CartItem
  deleteManyCartItems(where: CartItemWhereInput): BatchPayload!
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderItem(data: OrderItemCreateInput!): OrderItem!
  updateOrderItem(data: OrderItemUpdateInput!, where: OrderItemWhereUniqueInput!): OrderItem
  updateManyOrderItems(data: OrderItemUpdateInput!, where: OrderItemWhereInput): BatchPayload!
  upsertOrderItem(where: OrderItemWhereUniqueInput!, create: OrderItemCreateInput!, update: OrderItemUpdateInput!): OrderItem!
  deleteOrderItem(where: OrderItemWhereUniqueInput!): OrderItem
  deleteManyOrderItems(where: OrderItemWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  user: User
  total: Int!
  created: Int!
  updated: Int!
  charge: String!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  items: OrderItemCreateManyInput
  user: UserCreateOneInput
  total: Int!
  created: Int!
  updated: Int!
  charge: String!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

type OrderItem {
  id: ID!
  title: String!
  description: String!
  image: String
  largeImage: String
  price: Int!
  quantity: Int!
  user: User!
}

type OrderItemConnection {
  pageInfo: PageInfo!
  edges: [OrderItemEdge]!
  aggregate: AggregateOrderItem!
}

input OrderItemCreateInput {
  title: String!
  description: String!
  image: String
  largeImage: String
  price: Int!
  quantity: Int
  user: UserCreateOneInput!
}

input OrderItemCreateManyInput {
  create: [OrderItemCreateInput!]
  connect: [OrderItemWhereUniqueInput!]
}

type OrderItemEdge {
  node: OrderItem!
  cursor: String!
}

enum OrderItemOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  image_ASC
  image_DESC
  largeImage_ASC
  largeImage_DESC
  price_ASC
  price_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderItemPreviousValues {
  id: ID!
  title: String!
  description: String!
  image: String
  largeImage: String
  price: Int!
  quantity: Int!
}

type OrderItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderItem
  updatedFields: [String!]
  previousValues: OrderItemPreviousValues
}

input OrderItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderItemWhereInput
  AND: [OrderItemSubscriptionWhereInput!]
  OR: [OrderItemSubscriptionWhereInput!]
  NOT: [OrderItemSubscriptionWhereInput!]
}

input OrderItemUpdateDataInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  quantity: Int
  user: UserUpdateOneRequiredInput
}

input OrderItemUpdateInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  quantity: Int
  user: UserUpdateOneRequiredInput
}

input OrderItemUpdateManyInput {
  create: [OrderItemCreateInput!]
  delete: [OrderItemWhereUniqueInput!]
  connect: [OrderItemWhereUniqueInput!]
  disconnect: [OrderItemWhereUniqueInput!]
  update: [OrderItemUpdateWithWhereUniqueNestedInput!]
  upsert: [OrderItemUpsertWithWhereUniqueNestedInput!]
}

input OrderItemUpdateWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  data: OrderItemUpdateDataInput!
}

input OrderItemUpsertWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  update: OrderItemUpdateDataInput!
  create: OrderItemCreateInput!
}

input OrderItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  largeImage: String
  largeImage_not: String
  largeImage_in: [String!]
  largeImage_not_in: [String!]
  largeImage_lt: String
  largeImage_lte: String
  largeImage_gt: String
  largeImage_gte: String
  largeImage_contains: String
  largeImage_not_contains: String
  largeImage_starts_with: String
  largeImage_not_starts_with: String
  largeImage_ends_with: String
  largeImage_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  user: UserWhereInput
  AND: [OrderItemWhereInput!]
  OR: [OrderItemWhereInput!]
  NOT: [OrderItemWhereInput!]
}

input OrderItemWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  total_ASC
  total_DESC
  created_ASC
  created_DESC
  updated_ASC
  updated_DESC
  charge_ASC
  charge_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  total: Int!
  created: Int!
  updated: Int!
  charge: String!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  items: OrderItemUpdateManyInput
  user: UserUpdateOneInput
  total: Int
  created: Int
  updated: Int
  charge: String
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
  user: UserWhereInput
  total: Int
  total_not: Int
  total_in: [Int!]
  total_not_in: [Int!]
  total_lt: Int
  total_lte: Int
  total_gt: Int
  total_gte: Int
  created: Int
  created_not: Int
  created_in: [Int!]
  created_not_in: [Int!]
  created_lt: Int
  created_lte: Int
  created_gt: Int
  created_gte: Int
  updated: Int
  updated_not: Int
  updated_in: [Int!]
  updated_not_in: [Int!]
  updated_lt: Int
  updated_lte: Int
  updated_gt: Int
  updated_gte: Int
  charge: String
  charge_not: String
  charge_in: [String!]
  charge_not_in: [String!]
  charge_lt: String
  charge_lte: String
  charge_gt: String
  charge_gte: String
  charge_contains: String
  charge_not_contains: String
  charge_starts_with: String
  charge_not_starts_with: String
  charge_ends_with: String
  charge_not_ends_with: String
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  ADMIN
  USER
  ITEMCREATE
  ITEMUPDATE
  ITEMDELETE
  PERMISSIONUPDATE
}

type Query {
  cart(where: CartWhereUniqueInput!): Cart
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  cartItem(where: CartItemWhereUniqueInput!): CartItem
  cartItems(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem]!
  cartItemsConnection(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartItemConnection!
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderItem(where: OrderItemWhereUniqueInput!): OrderItem
  orderItems(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem]!
  orderItemsConnection(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderItemConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  cartItem(where: CartItemSubscriptionWhereInput): CartItemSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderItem(where: OrderItemSubscriptionWhereInput): OrderItemSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpire: Float
  permissions: [Permission!]!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpire: Float
  permissions: UserCreatepermissionsInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpire_ASC
  resetTokenExpire_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpire: Float
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpire: Float
  permissions: UserUpdatepermissionsInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpire: Float
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpire: Float
  resetTokenExpire_not: Float
  resetTokenExpire_in: [Float!]
  resetTokenExpire_not_in: [Float!]
  resetTokenExpire_lt: Float
  resetTokenExpire_lte: Float
  resetTokenExpire_gt: Float
  resetTokenExpire_gte: Float
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    