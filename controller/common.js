export function checkValidInput(value, operation) {
  try {
    if (value && Object.keys(value).length > 0) {
      return true;
    }
    return false;
  } catch (e) {
    console.log("Error in checkValidInput", e);
    return false;
  }
}
