import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants"
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "sidegit",
    // user: "",
    // password: "",
    driver: require('@mikro-orm/postgresql').PostgreSqlDriver,
    debug: !__prod__,
  });

  const post = orm.em.nativeInsert(Post, {title: 'my first post'});
  await orm.em.persistAndFlush(post);

  console.log('Post created:', post);
};

main();