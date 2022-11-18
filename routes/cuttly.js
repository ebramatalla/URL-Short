const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get(
  "/",
  body("url")
    .exists()
    .withMessage("Url is required")
    .matches(
      /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi
    )
    .withMessage("invalid Url"),
  (req, res) => {
    const errors = validationResult(req);
    const msg = errors.array().map((error) => ({ message: error.msg }));

    console.log(msg);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: msg });
    }
    cuttly(req.body.url, (error, shorten) => {
      res.send(shorten);
    });
  }
);
module.exports = router;
