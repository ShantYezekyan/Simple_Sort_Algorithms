const arr = [3, 0, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count=0;
const iter = 'Number of Interations = ';

// ---------- Bubble Sort -------------------------------------------------

for (let i = 0; i < arr.length - 1; i++) {
    
    for (let j = 0; j < arr.length - 1 - i; j++) {
        count++;
        if (arr[j] > arr[j+1]) {
            const swap = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = swap;
        }
    }
}

console.log(arr);
console.log(iter,count);


// ---------- Selection Sort -------------------------------------------------

// for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++ ) {
//         count++
//         if (arr[j] < arr[min]) {
//             min = j
//         }
//     }
//     const swap = arr[i];
//     arr[i] = arr[min];
//     arr[min] = swap;
// }

// console.log(arr)
// console.log(iter,count)

// ---------- Insertion Sort -------------------------------------------------

// for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//         count++;
//         if (arr[j] < arr[j-1]) {
//             const swap = arr[j];
//             arr[j] = arr[j-1];
//             arr[j-1] = swap;
//         } else {
//             break;
//         }
//     }
// }

// console.log(arr)
// console.log(iter,count)