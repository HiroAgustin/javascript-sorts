'use strict';
import test from 'ava';

const fs = require('fs');
const readline = require('readline');

var quickSort = require('../QuickSort');

test('Base Cases', (t) =>
{
  t.deepEqual(quickSort([1, 2]), [1, 2]);
  t.deepEqual(quickSort([2, 1]), [1, 2]);
  t.deepEqual(quickSort([1, 2, 3]), [1, 2, 3]);
  t.deepEqual(quickSort([3, 2, 1]), [1, 2, 3]);
  t.deepEqual(quickSort([2, 3, 1]), [1, 2, 3]);
  t.deepEqual(quickSort([3, 9, 8, 4, 6, 10, 2, 5, 7, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test.skip.cb('Excersise', (t) =>
{
  let list = [];

  readline.createInterface({
    input: fs.createReadStream('./fixtures/QuickSort.txt')
  })
  .on('line', (line) =>
  {
    list.push(parseInt(line));
  })
  .on('close', () =>
  {
    console.log(quickSort(list).inversions);
    t.end();
  });
});
