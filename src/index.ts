import * as dotenv from "dotenv";
import * as path from 'path'

let env_path=path.join(__dirname, "../../.env")
dotenv.config({ path:env_path});


console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';
const yes = 'This os cancer';


export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);

  return;
}

doSomeStuff('this', 'that', ['those']);
// TODO: more examples
