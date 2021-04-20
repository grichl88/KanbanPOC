import { helper } from '@ember/component/helper';

function filterlist(args) {
  const [arrayToFilter, stringToFilterBy, valuePair] = args;
  return arrayToFilter.filter(item => {
    return item[valuePair] === stringToFilterBy;
  })
}

export default helper(filterlist);
