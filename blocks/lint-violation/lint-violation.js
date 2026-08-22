// Intentionally violating npm linting rules for PR check testing
import { createOptimizedPicture } from '../../scripts/aem';

export default function decorate(block) {
  var unusedVariable = "Double quote string without semicolon"
  let reassignMe = 'never reassigned';
  console.log(block, reassignMe, unusedVariable, createOptimizedPicture);
}
