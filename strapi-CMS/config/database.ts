export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "mysql2");

  const connections = {
    mysql2: {
      client: "mysql2",
      connection: {
        host: env("DATABASE_HOST", "autorack.proxy.rlwy.net"),
        port: env.int("DATABASE_PORT", 59624),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: env.bool("DATABASE_SSL", false),
        bigNumberStrings: true, // Cette option est propre à mysql2
      },
      debug: false, // Activer le debug pour plus d'informations
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
