import axios from "axios";

function getData(setData = () => {}) {
  const getOptions = (val) => ({
    method: "GET",
    url: "https://api.github.com/search/users",
    params: { q: val || "a", sort: "followers", order: "desc" },
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: "Bearer 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",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const apiCall = async (val) => {
    try {
      const options = getOptions(val);
      const response = await axios.request(options);
      setData(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { apiCall };
}

export default getData;
