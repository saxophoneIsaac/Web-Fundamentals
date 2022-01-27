function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
//                     if left if less than the halfway point, keep looping

        var right = arr.length-1-left;
//              if left = 0, then right = 4, etc etc. (dynamic relationship)
//              left = 1, then right = 3


        if(arr[left] != arr[right]) {
        // if the left index of array
        //        "is not equal" (!=)
        //              to the right index of array

            return "Not a pal-indrome!";
            //breaks function
        }
    }


    return "Pal-indrome!";
}

var result1 = isPal( [1, 1, 2, 2, 1] );


console.log(result1);

var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);


// left = 0                             right = 4
// conditional left > 5/2 (2.5)
// 0 is < 2.5
// right = 5 - 1 - 0 = 4
//