/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "/": { view: "pages/homepage" },
  "GET /getJobids": "Jobid892Controller.getJobids",
  "GET /viewData": "Jobid892Controller.viewJobdata",
  "Get /getJobsByID/:jobName892/:partId892": "Jobid892Controller.getJobsByID",
  "POST /addJob": "Jobid892Controller.addJob",
  "GET /addData": { view: "pages/addData" },
  "PUT /editJob": "Jobid892Controller.editJob",
  "POST /addData": "Jobid892Controller.addData",
  "POST /destroy": "Jobid892Controller.destroy",
  "GET /deleteData": { view: "pages/deleteData" },
  "POST /deleteData": "Jobid892Controller.deleteData",
  "GET /updateData": { view: "pages/updateData" },
  "POST /updateData": "Jobid892Controller.updateData",
};
