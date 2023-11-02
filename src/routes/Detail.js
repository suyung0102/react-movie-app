import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMoiveInfo] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setLoading(false);
    setMoiveInfo(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? '로딩중...' : `${movieInfo.title} / ${movieInfo.year}`}</div>;
}

export default Detail;
