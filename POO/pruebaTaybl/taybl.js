"use strict";
exports.__esModule = true;
var Taybl_1 = require("Taybl");
var object = {
    files: [
        ['0A', '0B', '0C'],
        ['1A', '1B', '1C'],
        ['2A', '2B', '2C']
    ]
    /*{
      fileName: "nombre",
      invalid: [
        { type: "type name1", count: 6, "line numbers": "7, 18" },
        { type: "type name2", count: 2, "line numbers": "17, 9" }
      ]
    },
    {
      fileName: "Apellido",
      invalid: [
        { type: "type name3", count: 0, "line numbers": "28" },
        { type: "type name4", count: 3, "line numbers": "1, 9, 12" }
      ]
    }*/
};
var taybl = new Taybl_1["default"](object);
taybl
    .withHorizontalLineStyle("*")
    .withVerticalLineStyle("|")
    .withNumberOfSpacesAtStartOfColumns(2)
    .withNumberOfSpacesAtEndOfColumns(2)
    .print();
