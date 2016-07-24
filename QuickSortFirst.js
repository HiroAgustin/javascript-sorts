'use strict';

const QUICK_SORT = function QUICK_SORT(list = [], start = 0, end = list.length)
{
	let i = start + 1
		,	pivot = list[start];

	if (end - start < 1)
		return;

	for (let j = start + 1; j < end; j++)
	{
		if (list[j] < pivot)
		{
			let aux = list[i];
			list[i] = list[j];
			list[j] = aux;
			i++;
		}
	}

	list[start] = list[i - 1];
	list[i - 1] = pivot;

	QUICK_SORT(list, start, i - 1);
	QUICK_SORT(list, i, end);

	return list;
};

module.exports = QUICK_SORT;
