import axios from "axios";

function getUserData() {
  const getOptions = (val) => ({
    method: "GET",
    url: `https://api.github.com/users/${val}`,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: "Bearer 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",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const getUserDetails = async (val, setData) => {
    try {
      const options = getOptions(val);
      const response = await axios.request(options);
      setData(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { getUserDetails };
}

export default getUserData;
