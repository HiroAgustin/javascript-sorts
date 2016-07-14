'use strict';
import test from 'ava';

const fs = require('fs');
const readline = require('readline');

var countInversionsAndSort = require('../CountInversionsAndSort');

test('Base Cases', (t) =>
{
  t.deepEqual(countInversionsAndSort([1]), {
    inversions: 0
  , list: [1]
  });

  t.deepEqual(countInversionsAndSort([1, 2]), {
    inversions: 0
  , list: [1, 2]
  });

  t.deepEqual(countInversionsAndSort([2, 1]), {
    inversions: 1
  , list: [1, 2]
  });

  t.deepEqual(countInversionsAndSort([2, 1, 3]), {
    inversions: 1
  , list: [1, 2, 3]
  });
});

test('Complex Cases', (t) =>
{
  t.deepEqual(countInversionsAndSort([1, 3, 5, 2, 4, 6]), {
    inversions: 3
  , list: [1, 2, 3, 4, 5, 6]
  });

  t.deepEqual(countInversionsAndSort([1, 5, 3, 2, 4]), {
    inversions: 4
  , list: [1, 2, 3, 4, 5]
  });

  t.deepEqual(countInversionsAndSort([5, 4, 3, 2, 1]), {
    inversions: 10
  , list: [1, 2, 3, 4, 5]
  });

  t.deepEqual(countInversionsAndSort([1, 6, 3, 2, 4, 5]), {
    inversions: 5
  , list: [1, 2, 3, 4, 5, 6]
  });

  t.deepEqual(countInversionsAndSort([9, 12, 3, 1, 6, 8, 2, 5, 14, 13, 11, 7, 10, 4, 0]), {
    inversions: 56
  , list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  });
});

test.cb('Excersise', (t) =>
{
  let list = [];

  readline.createInterface({
    input: fs.createReadStream('./fixtures/IntegerArray.txt')
  })
  .on('line', (line) =>
  {
    list.push(parseInt(line));
  })
  .on('close', () =>
  {
    console.log(countInversionsAndSort(list).inversions);
    t.end();
  });
});
