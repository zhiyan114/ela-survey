-- Development Table v1 (For response recording)
CREATE TABLE IF NOT EXISTS "dev"."response" (
    "id" SERIAL PRIMARY KEY,
    "qone" TEXT NOT NULL,
    "qtwo" TEXT NOT NULL,
    "qthree" TEXT NOT NULL,
    "qfour" TEXT NOT NULL,
    "qfive" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "inital" TEXT NOT NULL,
    "confirm_id" TEXT NOT NULL DEFAULT substring(md5(random()::text), 0, 10),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Production Table v1 (For response recording)
CREATE TABLE IF NOT EXISTS "public"."response" (
    "id" SERIAL PRIMARY KEY,
    "qone" TEXT NOT NULL,
    "qtwo" TEXT NOT NULL,
    "qthree" TEXT NOT NULL,
    "qfour" TEXT NOT NULL,
    "qfive" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "inital" TEXT NOT NULL,
    "confirm_id" TEXT NOT NULL DEFAULT substring(md5(random()::text), 0, 10),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Use metabase or google data studio to analyze the data