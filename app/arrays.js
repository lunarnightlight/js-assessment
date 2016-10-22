exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => {
    // console.log(arr, item);
    // for (var i=0; i<arr.length; i++) {
    //   if (arr[i] === item) {
    //     // console.log(i);
    //     return i;
    //   }
    // }
    // return -1;
    return arr.indexOf(item);
  },

  sum: function(arr) {
    // sum = 0;
    // for (var i=0; i<arr.length; i++) {
    //   sum = sum + arr[i];
    // }
    // return sum;
    return arr.reduce(function(prev, curr){
      return prev + curr;
    })
  },

  remove: function(arr, item) {
    // console.log(arr);
    function isTwo(value) {
      return value !==2; }
    return arr.filter(isTwo); 
  },

  removeWithoutCopy: function(arr, item) {
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, arr[i]);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
    // Works!
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
    // Works!
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: (arr1, arr2) => {
    // arrow function!
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    count = [];
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    // arr = [ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]
    arr.sort();
    console.log(arr);
    var repeatNum = []; 
    // Evan 'includes()'  

    for (var i=0; i<arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        repeatNum.push(arr[i]);
      }  
      console.log(repeatNum);
      // prints [1, 3, 3, 4]
    }

    var singles = repeatNum.filter(function(item, index, a) {
      return repeatNum.indexOf(item) == index;
    })
    return singles;

    // Derek: look at indexOf and think of how 
    // you can use filter here.

  },

  square: function(arr) {
    var sq = arr.map(function(item) {
      // console.log(item);
      return item * item;
    });
    return sq;
  },

  findAllOccurrences: function(arr, target) {
    positions = [];
    for (var i=0; i<arr.length; i++) {
      if (arr[i] === target) {
        positions.push(i);
        console.log(positions);
      }
    }
    return positions;
  }
};
