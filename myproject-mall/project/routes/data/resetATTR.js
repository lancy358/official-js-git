const express = require("express"),
  route = express.Router();
route.post("/", async (req, res) => {
  const { obj:{resetDate, resetAttr} } = req.body;
//  console.log(resetDate, resetAttr)
  let ids = [];
  let whereField = "";
  for (let i = 0; i < resetDate.length; i++) {
    ids.push(resetDate[i].id);
    console.log(resetDate[i])
    for (key in resetDate[i]) {
      if (key == 'id') {

        whereField = 'id';
      }
    }
  }

  let whereKey =ids;
  let attributeStr = whereKey.toString();

  let attrAry = resetAttr;
  let whereName = "",
    whereVal = "";
  for (key in attrAry) {
    whereName = key;
    whereVal = attrAry[key] * 1;
  }
 
  result = await require("../../services/users").fieldUpdate(
    whereName,
    whereVal * 1,
    whereField,
    attributeStr
  );
  res.json({
    code: 0,
    msg: "修改成功"
  });
});
module.exports = route;
