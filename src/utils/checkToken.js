//JWT가 저장되어 있는지 확인하는 함수. 있으면 true, 없으면 false
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// !! = double negation, 값의 존재 여부를 불리언 값으로 변환
// const token = localStorage.getItem("token");이 null이나 undefined일 경우 token값은 falsy값이 됨
// !token은 falsy값을 true로, truthy한 값을 false로 변환
// 따라서 !!token은 다시 negation을 수행하여 falsy값을 false로, truthy값을 true로 변환
