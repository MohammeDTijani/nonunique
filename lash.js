var lisp = [1,1,2,2,3,3,4,4,5,5,6];

console.log(lisp)


var duplicates = lisp.reduce(function(acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
  }, []);
  
  document.write(duplicates);


console.log(duplicates);

console.log(nonduplicates);