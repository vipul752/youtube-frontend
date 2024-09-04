const GOOGLE_API_KEY = "AIzaSyC9u2wwv1_y5kFM83B93vaXpr88vN3KL34";

const YOUTUBE_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const OFF_CHAT_LIMIT = 20;
const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export { YOUTUBE_API_KEY, YOUTUBE_SUGGESTION_API };
