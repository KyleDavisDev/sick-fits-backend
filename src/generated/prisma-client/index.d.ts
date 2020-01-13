// Code generated by Prisma (prisma@1.17.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  cart: (where?: CartWhereInput) => Promise<boolean>;
  cartItem: (where?: CartItemWhereInput) => Promise<boolean>;
  item: (where?: ItemWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export interface Fragmentable {
  $fragment<T>(fragment: string | Object): T;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  cart: (where: CartWhereUniqueInput) => Cart;
  carts: (args?: {
    where?: CartWhereInput;
    orderBy?: CartOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => Promise<Array<CartNode>>;
  cartsConnection: (args?: {
    where?: CartWhereInput;
    orderBy?: CartOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CartConnection;
  cartItem: (where: CartItemWhereUniqueInput) => CartItem;
  cartItems: (args?: {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => Promise<Array<CartItemNode>>;
  cartItemsConnection: (args?: {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CartItemConnection;
  item: (where: ItemWhereUniqueInput) => Item;
  items: (args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => Promise<Array<ItemNode>>;
  itemsConnection: (args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ItemConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => Promise<Array<UserNode>>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCart: (data: CartCreateInput) => Cart;
  updateCart: (args: {
    data: CartUpdateInput;
    where: CartWhereUniqueInput;
  }) => Cart;
  updateManyCarts: (args: {
    data: CartUpdateInput;
    where?: CartWhereInput;
  }) => BatchPayload;
  upsertCart: (args: {
    where: CartWhereUniqueInput;
    create: CartCreateInput;
    update: CartUpdateInput;
  }) => Cart;
  deleteCart: (where: CartWhereUniqueInput) => Cart;
  deleteManyCarts: (where?: CartWhereInput) => BatchPayload;
  createCartItem: (data: CartItemCreateInput) => CartItem;
  updateCartItem: (args: {
    data: CartItemUpdateInput;
    where: CartItemWhereUniqueInput;
  }) => CartItem;
  updateManyCartItems: (args: {
    data: CartItemUpdateInput;
    where?: CartItemWhereInput;
  }) => BatchPayload;
  upsertCartItem: (args: {
    where: CartItemWhereUniqueInput;
    create: CartItemCreateInput;
    update: CartItemUpdateInput;
  }) => CartItem;
  deleteCartItem: (where: CartItemWhereUniqueInput) => CartItem;
  deleteManyCartItems: (where?: CartItemWhereInput) => BatchPayload;
  createItem: (data: ItemCreateInput) => Item;
  updateItem: (args: {
    data: ItemUpdateInput;
    where: ItemWhereUniqueInput;
  }) => Item;
  updateManyItems: (args: {
    data: ItemUpdateInput;
    where?: ItemWhereInput;
  }) => BatchPayload;
  upsertItem: (args: {
    where: ItemWhereUniqueInput;
    create: ItemCreateInput;
    update: ItemUpdateInput;
  }) => Item;
  deleteItem: (where: ItemWhereUniqueInput) => Item;
  deleteManyItems: (where?: ItemWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => User;
  updateManyUsers: (args: {
    data: UserUpdateInput;
    where?: UserWhereInput;
  }) => BatchPayload;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  cart: (
    where?: CartSubscriptionWhereInput
  ) => CartSubscriptionPayloadSubscription;
  cartItem: (
    where?: CartItemSubscriptionWhereInput
  ) => CartItemSubscriptionPayloadSubscription;
  item: (
    where?: ItemSubscriptionWhereInput
  ) => ItemSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CartItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "quantity_ASC"
  | "quantity_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type Permission =
  | "ADMIN"
  | "USER"
  | "ITEMCREATE"
  | "ITEMUPDATE"
  | "ITEMDELETE"
  | "PERMISSIONUPDATE";

export type CartOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "image_ASC"
  | "image_DESC"
  | "largeImage_ASC"
  | "largeImage_DESC"
  | "price_ASC"
  | "price_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "resetToken_ASC"
  | "resetToken_DESC"
  | "resetTokenExpire_ASC"
  | "resetTokenExpire_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type CartWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface CartItemWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  quantity?: Int;
  quantity_not?: Int;
  quantity_in?: Int[] | Int;
  quantity_not_in?: Int[] | Int;
  quantity_lt?: Int;
  quantity_lte?: Int;
  quantity_gt?: Int;
  quantity_gte?: Int;
  item?: ItemWhereInput;
  AND?: CartItemWhereInput[] | CartItemWhereInput;
  OR?: CartItemWhereInput[] | CartItemWhereInput;
  NOT?: CartItemWhereInput[] | CartItemWhereInput;
}

export interface ItemWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  image?: String;
  image_not?: String;
  image_in?: String[] | String;
  image_not_in?: String[] | String;
  image_lt?: String;
  image_lte?: String;
  image_gt?: String;
  image_gte?: String;
  image_contains?: String;
  image_not_contains?: String;
  image_starts_with?: String;
  image_not_starts_with?: String;
  image_ends_with?: String;
  image_not_ends_with?: String;
  largeImage?: String;
  largeImage_not?: String;
  largeImage_in?: String[] | String;
  largeImage_not_in?: String[] | String;
  largeImage_lt?: String;
  largeImage_lte?: String;
  largeImage_gt?: String;
  largeImage_gte?: String;
  largeImage_contains?: String;
  largeImage_not_contains?: String;
  largeImage_starts_with?: String;
  largeImage_not_starts_with?: String;
  largeImage_ends_with?: String;
  largeImage_not_ends_with?: String;
  price?: Int;
  price_not?: Int;
  price_in?: Int[] | Int;
  price_not_in?: Int[] | Int;
  price_lt?: Int;
  price_lte?: Int;
  price_gt?: Int;
  price_gte?: Int;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  user?: UserWhereInput;
  AND?: ItemWhereInput[] | ItemWhereInput;
  OR?: ItemWhereInput[] | ItemWhereInput;
  NOT?: ItemWhereInput[] | ItemWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  resetToken?: String;
  resetToken_not?: String;
  resetToken_in?: String[] | String;
  resetToken_not_in?: String[] | String;
  resetToken_lt?: String;
  resetToken_lte?: String;
  resetToken_gt?: String;
  resetToken_gte?: String;
  resetToken_contains?: String;
  resetToken_not_contains?: String;
  resetToken_starts_with?: String;
  resetToken_not_starts_with?: String;
  resetToken_ends_with?: String;
  resetToken_not_ends_with?: String;
  resetTokenExpire?: Float;
  resetTokenExpire_not?: Float;
  resetTokenExpire_in?: Float[] | Float;
  resetTokenExpire_not_in?: Float[] | Float;
  resetTokenExpire_lt?: Float;
  resetTokenExpire_lte?: Float;
  resetTokenExpire_gt?: Float;
  resetTokenExpire_gte?: Float;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface CartWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  items_every?: CartItemWhereInput;
  items_some?: CartItemWhereInput;
  items_none?: CartItemWhereInput;
  user?: UserWhereInput;
  AND?: CartWhereInput[] | CartWhereInput;
  OR?: CartWhereInput[] | CartWhereInput;
  NOT?: CartWhereInput[] | CartWhereInput;
}

export type CartItemWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type ItemWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface CartCreateInput {
  items?: CartItemCreateManyInput;
  user: UserCreateOneInput;
}

export interface CartItemCreateManyInput {
  create?: CartItemCreateInput[] | CartItemCreateInput;
  connect?: CartItemWhereUniqueInput[] | CartItemWhereUniqueInput;
}

export interface CartItemCreateInput {
  quantity?: Int;
  item: ItemCreateOneInput;
}

export interface ItemCreateOneInput {
  create?: ItemCreateInput;
  connect?: ItemWhereUniqueInput;
}

export interface ItemCreateInput {
  title: String;
  description: String;
  image?: String;
  largeImage?: String;
  price: Int;
  user: UserCreateOneInput;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
  resetToken?: String;
  resetTokenExpire?: Float;
  permissions?: UserCreatepermissionsInput;
}

export interface UserCreatepermissionsInput {
  set?: Permission[] | Permission;
}

export interface CartUpdateInput {
  items?: CartItemUpdateManyInput;
  user?: UserUpdateOneRequiredInput;
}

export interface CartItemUpdateManyInput {
  create?: CartItemCreateInput[] | CartItemCreateInput;
  delete?: CartItemWhereUniqueInput[] | CartItemWhereUniqueInput;
  connect?: CartItemWhereUniqueInput[] | CartItemWhereUniqueInput;
  disconnect?: CartItemWhereUniqueInput[] | CartItemWhereUniqueInput;
  update?:
    | CartItemUpdateWithWhereUniqueNestedInput[]
    | CartItemUpdateWithWhereUniqueNestedInput;
  upsert?:
    | CartItemUpsertWithWhereUniqueNestedInput[]
    | CartItemUpsertWithWhereUniqueNestedInput;
}

export interface CartItemUpdateWithWhereUniqueNestedInput {
  where: CartItemWhereUniqueInput;
  data: CartItemUpdateDataInput;
}

export interface CartItemUpdateDataInput {
  quantity?: Int;
  item?: ItemUpdateOneRequiredInput;
}

export interface ItemUpdateOneRequiredInput {
  create?: ItemCreateInput;
  update?: ItemUpdateDataInput;
  upsert?: ItemUpsertNestedInput;
  connect?: ItemWhereUniqueInput;
}

export interface ItemUpdateDataInput {
  title?: String;
  description?: String;
  image?: String;
  largeImage?: String;
  price?: Int;
  user?: UserUpdateOneRequiredInput;
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateDataInput {
  name?: String;
  email?: String;
  password?: String;
  resetToken?: String;
  resetTokenExpire?: Float;
  permissions?: UserUpdatepermissionsInput;
}

export interface UserUpdatepermissionsInput {
  set?: Permission[] | Permission;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface ItemUpsertNestedInput {
  update: ItemUpdateDataInput;
  create: ItemCreateInput;
}

export interface CartItemUpsertWithWhereUniqueNestedInput {
  where: CartItemWhereUniqueInput;
  update: CartItemUpdateDataInput;
  create: CartItemCreateInput;
}

export interface CartItemUpdateInput {
  quantity?: Int;
  item?: ItemUpdateOneRequiredInput;
}

export interface ItemUpdateInput {
  title?: String;
  description?: String;
  image?: String;
  largeImage?: String;
  price?: Int;
  user?: UserUpdateOneRequiredInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  resetToken?: String;
  resetTokenExpire?: Float;
  permissions?: UserUpdatepermissionsInput;
}

export interface CartSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CartWhereInput;
  AND?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput;
  OR?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput;
  NOT?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput;
}

export interface CartItemSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CartItemWhereInput;
  AND?: CartItemSubscriptionWhereInput[] | CartItemSubscriptionWhereInput;
  OR?: CartItemSubscriptionWhereInput[] | CartItemSubscriptionWhereInput;
  NOT?: CartItemSubscriptionWhereInput[] | CartItemSubscriptionWhereInput;
}

export interface ItemSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ItemWhereInput;
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput;
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput;
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface CartNode {
  id: ID_Output;
}

export interface Cart extends Promise<CartNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  items: <T = Promise<Array<CartItemNode>>>(args?: {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  user: <T = User>() => T;
}

export interface CartSubscription
  extends Promise<AsyncIterator<CartNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  items: <T = Promise<AsyncIterator<Array<CartItemSubscription>>>>(args?: {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  user: <T = UserSubscription>() => T;
}

export interface CartItemNode {
  id: ID_Output;
  quantity: Int;
}

export interface CartItem extends Promise<CartItemNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  quantity: () => Promise<Int>;
  item: <T = Item>() => T;
}

export interface CartItemSubscription
  extends Promise<AsyncIterator<CartItemNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  quantity: () => Promise<AsyncIterator<Int>>;
  item: <T = ItemSubscription>() => T;
}

export interface ItemNode {
  id: ID_Output;
  title: String;
  description: String;
  image?: String;
  largeImage?: String;
  price: Int;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface Item extends Promise<ItemNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  image: () => Promise<String>;
  largeImage: () => Promise<String>;
  price: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  user: <T = User>() => T;
}

export interface ItemSubscription
  extends Promise<AsyncIterator<ItemNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  largeImage: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  user: <T = UserSubscription>() => T;
}

export interface UserNode {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  resetToken?: String;
  resetTokenExpire?: Float;
  permissions: Permission[];
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  resetToken: () => Promise<String>;
  resetTokenExpire: () => Promise<Float>;
  permissions: () => Promise<Permission[]>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  resetToken: () => Promise<AsyncIterator<String>>;
  resetTokenExpire: () => Promise<AsyncIterator<Float>>;
  permissions: () => Promise<AsyncIterator<Permission[]>>;
}

export interface CartConnectionNode {}

export interface CartConnection
  extends Promise<CartConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<CartEdgeNode>>>() => T;
  aggregate: <T = AggregateCart>() => T;
}

export interface CartConnectionSubscription
  extends Promise<AsyncIterator<CartConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<CartEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateCartSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CartEdgeNode {
  cursor: String;
}

export interface CartEdge extends Promise<CartEdgeNode>, Fragmentable {
  node: <T = Cart>() => T;
  cursor: () => Promise<String>;
}

export interface CartEdgeSubscription
  extends Promise<AsyncIterator<CartEdgeNode>>,
    Fragmentable {
  node: <T = CartSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCartNode {
  count: Int;
}

export interface AggregateCart
  extends Promise<AggregateCartNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCartSubscription
  extends Promise<AsyncIterator<AggregateCartNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CartItemConnectionNode {}

export interface CartItemConnection
  extends Promise<CartItemConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<CartItemEdgeNode>>>() => T;
  aggregate: <T = AggregateCartItem>() => T;
}

export interface CartItemConnectionSubscription
  extends Promise<AsyncIterator<CartItemConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<CartItemEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateCartItemSubscription>() => T;
}

export interface CartItemEdgeNode {
  cursor: String;
}

export interface CartItemEdge extends Promise<CartItemEdgeNode>, Fragmentable {
  node: <T = CartItem>() => T;
  cursor: () => Promise<String>;
}

export interface CartItemEdgeSubscription
  extends Promise<AsyncIterator<CartItemEdgeNode>>,
    Fragmentable {
  node: <T = CartItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCartItemNode {
  count: Int;
}

export interface AggregateCartItem
  extends Promise<AggregateCartItemNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCartItemSubscription
  extends Promise<AsyncIterator<AggregateCartItemNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ItemConnectionNode {}

export interface ItemConnection
  extends Promise<ItemConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<ItemEdgeNode>>>() => T;
  aggregate: <T = AggregateItem>() => T;
}

export interface ItemConnectionSubscription
  extends Promise<AsyncIterator<ItemConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<ItemEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateItemSubscription>() => T;
}

export interface ItemEdgeNode {
  cursor: String;
}

export interface ItemEdge extends Promise<ItemEdgeNode>, Fragmentable {
  node: <T = Item>() => T;
  cursor: () => Promise<String>;
}

export interface ItemEdgeSubscription
  extends Promise<AsyncIterator<ItemEdgeNode>>,
    Fragmentable {
  node: <T = ItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateItemNode {
  count: Int;
}

export interface AggregateItem
  extends Promise<AggregateItemNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateItemSubscription
  extends Promise<AsyncIterator<AggregateItemNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<UserEdgeNode>>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<UserEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CartSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CartSubscriptionPayload
  extends Promise<CartSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Cart>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CartPreviousValues>() => T;
}

export interface CartSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CartSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CartSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CartPreviousValuesSubscription>() => T;
}

export interface CartPreviousValuesNode {
  id: ID_Output;
}

export interface CartPreviousValues
  extends Promise<CartPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface CartPreviousValuesSubscription
  extends Promise<AsyncIterator<CartPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface CartItemSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CartItemSubscriptionPayload
  extends Promise<CartItemSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CartItem>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CartItemPreviousValues>() => T;
}

export interface CartItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CartItemSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CartItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CartItemPreviousValuesSubscription>() => T;
}

export interface CartItemPreviousValuesNode {
  id: ID_Output;
  quantity: Int;
}

export interface CartItemPreviousValues
  extends Promise<CartItemPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  quantity: () => Promise<Int>;
}

export interface CartItemPreviousValuesSubscription
  extends Promise<AsyncIterator<CartItemPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  quantity: () => Promise<AsyncIterator<Int>>;
}

export interface ItemSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ItemSubscriptionPayload
  extends Promise<ItemSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Item>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ItemPreviousValues>() => T;
}

export interface ItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ItemSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ItemPreviousValuesSubscription>() => T;
}

export interface ItemPreviousValuesNode {
  id: ID_Output;
  title: String;
  description: String;
  image?: String;
  largeImage?: String;
  price: Int;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ItemPreviousValues
  extends Promise<ItemPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  image: () => Promise<String>;
  largeImage: () => Promise<String>;
  price: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ItemPreviousValuesSubscription
  extends Promise<AsyncIterator<ItemPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  largeImage: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  resetToken?: String;
  resetTokenExpire?: Float;
  permissions: Permission[];
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  resetToken: () => Promise<String>;
  resetTokenExpire: () => Promise<Float>;
  permissions: () => Promise<Permission[]>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  resetToken: () => Promise<AsyncIterator<String>>;
  resetTokenExpire: () => Promise<AsyncIterator<Float>>;
  permissions: () => Promise<AsyncIterator<Permission[]>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Type Defs
 */

export const prisma: Prisma;
