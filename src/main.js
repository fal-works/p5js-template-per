import { setup } from "./setup";
import { draw } from "./draw";

// Expose the setup/draw functions to the global scope, because
// the entire code will be wrapped in a large IIFE after bundling.
Object.assign(window, { setup, draw });
