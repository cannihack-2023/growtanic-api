/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("plants", {
    id: "id",
    name: { type: "varchar(1000)", notNull: true },
    description: { type: "varchar(1000)", notNull: true },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.sql(`
    INSERT INTO plants (id, name, description)
    VALUES (1, 'Boyscout Cookies', 'Boyscout Cookies');
  `);
};

exports.down = (pgm) => {
  pgm.dropTable("plants");
};
