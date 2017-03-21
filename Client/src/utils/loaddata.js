/*/ action
{ 
  type: 'FETCH_POSTS',
  payload: new Promise(resolve => {
    setTimeout(() => fetch(`${ROOT_URL}/home?page=${id}`).then(response => {
      resolve(response.json());
    }), 1000);
  })
} /*/