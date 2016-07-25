'use strict';
import test from 'ava';

const fs = require('fs');
const readline = require('readline');

let quickSort = require('../QuickSort');

test('Base Cases FIRST', (t) =>
{
  t.deepEqual(quickSort('first', [1, 2]), [1, 2]);
  t.deepEqual(quickSort('first', [2, 1]), [1, 2]);
  t.deepEqual(quickSort('first', [1, 2, 3]), [1, 2, 3]);
  t.deepEqual(quickSort('first', [3, 2, 1]), [1, 2, 3]);
  t.deepEqual(quickSort('first', [2, 3, 1]), [1, 2, 3]);
  t.deepEqual(quickSort('first', [3, 9, 8, 4, 6, 10, 2, 5, 7, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('Base Cases LAST', (t) =>
{
  t.deepEqual(quickSort('last', [1, 2]), [1, 2]);
  t.deepEqual(quickSort('last', [2, 1]), [1, 2]);
  t.deepEqual(quickSort('last', [1, 2, 3]), [1, 2, 3]);
  t.deepEqual(quickSort('last', [3, 2, 1]), [1, 2, 3]);
  t.deepEqual(quickSort('last', [2, 3, 1]), [1, 2, 3]);
  t.deepEqual(quickSort('last', [3, 9, 8, 4, 6, 10, 2, 5, 7, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('Base Cases Median', (t) =>
{
  t.deepEqual(quickSort('median', [1, 2]), [1, 2]);
  t.deepEqual(quickSort('median', [2, 1]), [1, 2]);
  t.deepEqual(quickSort('median', [1, 2, 3]), [1, 2, 3]);
  t.deepEqual(quickSort('median', [3, 2, 1]), [1, 2, 3]);
  t.deepEqual(quickSort('median', [2, 3, 1]), [1, 2, 3]);
  t.deepEqual(quickSort('median', [3, 9, 8, 4, 6, 10, 2, 5, 7, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
