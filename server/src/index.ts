import { MikroORM } from "@mikro-orm/core";
import { Project } from "./entities/Project";
import * as dotenv from "dotenv";
import mikroConfig from "./mikro-orm.config";

dotenv.config(); // Load environment variables from .env

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  const em = orm.em.fork();
  // const project = new Project();
  // project.title = "1st";
  // await em.persistAndFlush(project);
  // console.log("Post created:", project);
  // await orm.getMigrator().up();
  const proj = await em.find(Project, {});
  console.log(proj);
};

main().catch((err) => {
  console.error(err);
});