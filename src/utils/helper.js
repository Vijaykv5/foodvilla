
 export function filterData(searchtext, restraurants) {
    const filterData = restraurants?.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
    );
    return filterData;
  }