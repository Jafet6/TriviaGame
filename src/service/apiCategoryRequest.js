
const apiCategoryRequest = () => {
  const URL = 'https://opentdb.com/api_category.php';
  return fetch(URL).then((response) => (
    response.json()
      .then(
        (categories) => (response.ok ? Promise.resolve(categories) : Promise.reject(categories)),
      )
  ));
};

export default apiCategoryRequest;
