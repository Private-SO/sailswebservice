/**
 * Jobid892.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "Jobdb",
  attributes: {
    jobName892: {
      type: "string",
      unique: true,
      required: true,
      columnName: "jobName892",
    },
    partId892: {
      type: "integer",
      unique: true,
      required: true,
      columnName: "partId892",
    },
    qty892: {
      type: "integer",
      required: true,
      columnName: "qty892",
    },
  },
};
