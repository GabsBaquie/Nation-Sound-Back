export default ({ env }) => {
  // Utiliser mysql2 localement et mysql sur RailWay
  const client = env("NODE_ENV") === "production" ? "mysql" : "mysql2";

  const connections = {
    mysql: {
      client: "mysql",
      connection: {
        host: env("DATABASE_HOST", "autorack.proxy.rlwy.net"),
        port: env.int("DATABASE_PORT", 59624),
        database: env("DATABASE_NAME", "railway"),
        user: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "QMVgOBeAUjosMGEIBqHcSpJAkPMdUUkv"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      debug: true,
    },
    mysql2: {
      client: "mysql2",
      connection: {
        host: env("DATABASE_HOST", "autorack.proxy.rlwy.net"),
        port: env.int("DATABASE_PORT", 59624),
        database: env("DATABASE_NAME", "railway"),
        user: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "QMVgOBeAUjosMGEIBqHcSpJAkPMdUUkv"),
        ssl: env.bool("DATABASE_SSL", false),
        bigNumberStrings: true, // Cette option est propre à mysql2
      },
      debug: true,
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
