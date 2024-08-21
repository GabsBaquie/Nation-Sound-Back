export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  const connections = {
    mysql: {
      client: "mysql2",
      connection: {
        host: env("DATABASE_HOST", "autorack.proxy.rlwy.net"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "railway"),
        user: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "QMVgOBeAUjosMGEIBqHcSpJAkPMdUUkv"),
        ssl: env.bool("DATABASE_SSL", true),
      },
      debug: false,
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
