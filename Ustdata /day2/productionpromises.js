
// Example: Fetch user data and then their posts (instead of orders)
function fetchUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json());
}

function fetchOrders(userId) {
  // JSONPlaceholder doesn’t have orders, so we’ll fetch posts for demo
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json());
}

fetchUser(1)
  .then(user => {
    console.log("👤 User:", user);
    return fetchOrders(user.id);
  })
  .then(orders => {
    console.log("📦 Orders:", orders);
  })
  .catch(err => {
    console.error("❌ Error:", err);
  });
