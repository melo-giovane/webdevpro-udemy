function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("comment data fetched succesfully");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data");
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();
    const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]) // here promise all is another way to write the 2 comments before
    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

getBlogData();
