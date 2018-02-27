module.exports = function solveEquation( equation ) {
  let resultArr = [],
    abcArr = [],
    x1, x2, a, b, c;

  //parsing the equation
  equation = equation.replace( /-\s/g, "-" );
  abcArr = equation.match( /-?\d+/g ).map( Number );
  a = abcArr[ 0 ];
  b = abcArr[ 2 ];
  c = abcArr[ 3 ];

  //solution
  x1 = Math.round( ( -b + Math.sqrt( b * b - 4 * a * c ) ) / ( 2 * a ) );
  x2 = Math.round( ( -b - Math.sqrt( b * b - 4 * a * c ) ) / ( 2 * a ) );

  resultArr.push( x1 );
  resultArr.push( x2 );

  resultArr = resultArr.sort( ( a, b ) => a - b );

  return resultArr;
}