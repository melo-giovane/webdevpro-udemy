function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "hittps://chaicode.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData(); // You can only use await insde async function
    console.log("User data fetched successfully");
    
    console.log("User data: ", userData);
  } catch (error) {
    console.log("error fetching data", error);
  }
}

getUserData();
