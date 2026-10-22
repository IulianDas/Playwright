

const statusCodeChecker = (status: number): string => {

  if ( status <=0 || typeof status !== "number") {
    return "Status must be a non-negative number";
  }
  switch (status) {
    case 200:
    case 201:
    return `Success ${status}`;
  }
  if( status >= 400 && status <= 451) {
    return `Client Error ${status}`;
  } else if (status >= 500 && status <= 511) {
    return `Server Error ${status}`;
  }
  return "Unknown";
}
console.log(statusCodeChecker(202));
