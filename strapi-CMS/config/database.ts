export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  const connections = {
    mysql: {
      client: env("DATABASE_CLIENT", "mysql"),
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "NationSounds"),
        user: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "root"),
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
