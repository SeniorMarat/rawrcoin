import { orchidORM } from "orchid-orm"

const config = useRuntimeConfig()

export const db = orchidORM(
  { databaseURL: config.database.url, log: config.database.log },
  {
  },
)
