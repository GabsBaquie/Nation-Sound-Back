export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  const connections = {
    postgres: {
      connection: {
        host: env(
          "DATABASE_HOST",
          "ep-aged-hall-a2c7hnmf.eu-central-1.aws.neon.tech"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "NationSound"),
        user: env("DATABASE_USERNAME", "NationSound_owner"),
        password: env("DATABASE_PASSWORD", "v3ADRVWmUHl8"),
        ssl: {
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
