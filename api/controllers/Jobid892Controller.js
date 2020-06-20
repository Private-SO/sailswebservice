/**
 * Jobid892Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getJobids: async function (req, res) {
    console.log("getJobids");
    let data = await Jobid892.find();
    console.log(data);
    res.send(data);
  },

  viewJobdata: async function (req, res) {
    let data = await Jobid892.find();
    if (!data) {
      res.send("Cannot find anything to show!");
    }
    if (data) {
      res.view("\\pages\\viewData", { data: data });
    }
  },

  getJobsByID: async function (req, res) {
    console.log("getJobsByID");
    let data = await Jobid892.find({
      where: {
        jobName892: req.params.jobName892,
        partId892: req.params.partId892,
      },
    });
    console.log(data);
    if (data.length === 0) {
      res
        .status(404)
        .send("Either jobName892 or partId892, or both does not exist");
    } else {
      res.send(data);
    }
  },

  addJob: async function (req, res) {
    console.log("hi");
    let data = {
      jobName892: req.body.jobName892,
      partId892: req.body.partId892,
      qty892: req.body.qty892,
    };
    await Jobid892.create(data).exec(function abc(err, response) {
      if (err) {
        console.log(err);
        res
          .status(404)
          .send("Either jobName892 or partId892, or both already exists");
      } else {
        res.send(
          "Data {" +
            req.body.jobName892 +
            ", " +
            req.body.partId892 +
            ", " +
            req.body.qty892 +
            "} inserted in Jobdb table"
        );
      }
    });
  },

  editJob: async function (req, res) {
    console.log("hi");
    var result = await Jobid892.updateOne({
      where: {
        jobName892: req.body.jobName892,
        partId892: req.body.partId892,
      },
    }).set({ qty892: req.body.qty892 });
    if (typeof result === "object")
      res.send(
        "Data {" +
          req.body.jobName892 +
          ", " +
          req.body.partId892 +
          ", " +
          req.body.qty892 +
          "} updated in Jobdb table"
      );
    else
      res
        .status(404)
        .send("Either jobName892 or partId892, or both does not exist");
  },

  destroy: async function (req, res) {
    console.log("hi");
    let result = await Jobid892.destroyOne({
      where: {
        jobName892: req.body.jobName892,
      },
    });
    console.log(result);
    if (typeof result === "object")
      res.send(
        "Row with jobName892 column value " +
          req.body.jobName892 +
          " deleted successfully"
      );
    else
      res
        .status(404)
        .send(
          "jobName892 column with value " +
            req.body.jobName892 +
            " does not exist"
        );
  },

  addData: async function (req, res) {
    console.log("hi");
    let data = {
      jobName892: req.body.jobName892,
      partId892: req.body.partId892,
      qty892: req.body.qty892,
    };
    await Jobid892.create(data).exec(function abc(err, response) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.redirect("/viewData");
      }
    });
  },

  deleteData: async function (req, res) {
    console.log("hi");
    let result = await Jobid892.destroyOne({
      where: {
        jobName892: req.body.jobName892,
      },
    });
    console.log(result);
    if (typeof result === "object") res.redirect("/viewData");
    else
      res
        .status(404)
        .send(
          "jobName892 column with value " +
            req.body.jobName892 +
            " does not exist"
        );
  },

  updateData: async function (req, res) {
    console.log("sara");
    var result = await Jobid892.updateOne({
      where: {
        jobName892: req.body.jobName892,
        partId892: req.body.partId892,
      },
    }).set({ qty892: req.body.qty892 });
    if (typeof result === "object") res.redirect("/viewData");
    else
      res
        .status(404)
        .send("Either jobName892 or partId892, or both does not exist");
  },
};
