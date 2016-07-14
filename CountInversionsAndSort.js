'use strict';

const COUNT_INVERSIONS_AND_SORT = function COUNT_INVERSIONS_AND_SORT(list = [], start = 0, end = list.length)
{
  let inversions = 0
    , sorted = [];

  if (end - start <= 1)
  {
    sorted.push(list[start]);
  }
  else
  {
    let i = 0
      , j = 0

      , middle = parseInt((end - start) / 2)

      , left = COUNT_INVERSIONS_AND_SORT(list.slice(start, middle))
      , right = COUNT_INVERSIONS_AND_SORT(list.slice(middle, end))

      , leftList = left.list
      , rightList = right.list

      , leftLength = leftList.length
      , rightLength = rightList.length;

    inversions += (left.inversions + right.inversions);

    while (i < leftLength || j < rightLength)
    {
      if (i < leftLength && j < rightLength)
      {
        if (leftList[i] < rightList[j])
        {
          sorted.push(leftList[i]);
          i++;
        }
        else
        {
          sorted.push(rightList[j]);
          inversions += leftLength - i;
          j++;
        }
      }
      else if (i < leftLength)
      {
        sorted.push(leftList[i]);
        i++;
      }
      else
      {
        sorted.push(rightList[j]);
        j++;
      }
    }
  }

  return {
    inversions: inversions
  , list: sorted
  };
};

module.exports = COUNT_INVERSIONS_AND_SORT;
