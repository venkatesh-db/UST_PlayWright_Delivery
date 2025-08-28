
async function getUserData(userId) {
  try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();

    console.log("👤 User:", user);

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await postsResponse.json();

    console.log("📝 Posts:", posts);
  } catch (err) {
    console.error("❌ Error fetching user data:", err);
  }
}

getUserData(1);

