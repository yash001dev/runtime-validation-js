import { assert, string, date } from "superstruct";

const Struct = string();
const Struct2 = date();

assert(newDate(), Struct);
assert("a string", Struct); // passes
// assert(42, Struct) // throws!
