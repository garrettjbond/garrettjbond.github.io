import { newElement }  from "./createTaskMod.js";
import { createCheck }  from "./checkMod.js";
import { createClose, doClose } from "./closeMod.js";

document.querySelector('span').addEventListener('click', function() {
  newElement(document);
  createCheck(document);
  createClose(document);
  doClose(document);
});
