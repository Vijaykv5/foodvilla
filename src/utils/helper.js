
 export function filterData(searchtext, restraurants) {
    const filterData = restraurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
    );
    return filterData;
  }