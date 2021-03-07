const inState = {
    posts:[
        {
          "userId": 1,
          "id": 2,
          "title": "Qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "Ea molestias quasi",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "Eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "Nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "dolorem eum magni",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        }]
    }
const RootReducer = (state=inState,action) => {
  switch (action.type) {
    case 'ADD_POST':
      let id = Math.floor(Math.random()*1000)
      let Post = action.post
      Post.id = id
      let Posts = [...state.posts,action.post]
      return {
        ...state,
        posts : Posts
      }
    case 'DELETE_POST':
      let newPosts = state.posts.filter(post=>{
        return post.id !== action.id
      })
      return {
        ...state,
        posts : newPosts
      }
    default:
      return state
  }
        
        
}
      
      export default RootReducer
      