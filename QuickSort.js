'use strict';

const SWAP = function SWAP(list = [], i = 0, j = list.length)
{
  let aux = list[i];
  list[i] = list[j];
  list[j] = aux;
};

const SWAP_MEDIAN_PIVOT = function SWAP_MEDIAN_PIVOT(list = [], start = 0, end = list.length)
{
  let first = list[start]
    , last = list[end - 1]

    , middleIndex = start + parseInt((end - start - 1) / 2)
    , middle = list[middleIndex];

  if (middle < first && middle > last)
    SWAP(list, start, middleIndex);

  else if (middle < last && middle > first)
    SWAP(list, start, middleIndex);

  else if (last < first && last > middle)
    SWAP(list, start, end - 1);

  else if (last < middle && last > first)
    SWAP(list, start, end - 1);
};

const QUICK_SORT = function QUICK_SORT(type, list = [], start = 0, end = list.length)
{
	if (end - start < 1)
		return;

  if (type === 'last')
    SWAP(list, start, end - 1);
  else if (type === 'median')
    SWAP_MEDIAN_PIVOT(list, start, end);

	let i = start + 1
		,	pivot = list[start];

	for (let j = i; j < end; j++)
		if (list[j] < pivot)
			SWAP(list, i++, j);

  SWAP(list, start, i - 1);

	QUICK_SORT(type, list, start, i - 1);
	QUICK_SORT(type, list, i, end);

  return list;
};

module.exports = QUICK_SORT;
