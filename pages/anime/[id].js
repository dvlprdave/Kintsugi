// const AnimeCard = () => {
//   return(
//     <h1>This is the anime card</h1>
//   )
// }
 
// export default AnimeCard
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import {useRouter} from 'next/router'

const animeUrl = `https://kitsu.io/api/edge/anime`;

const Post = ({anime}) => {
  const router = useRouter();
  console.log(anime);
  console.log(anime.data.relationships.animeCharacters.links.related)
  return (
    <div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <h1>
        {anime.data.attributes.titles.en}
      </h1>
      <p>
        {anime.data.relationships.animeCharacters.links.related}
      </p>
    </div>
  )
}

Post.getInitialProps = async ctx => {
  const { query } = ctx
  const res = await fetch(`https://kitsu.io/api/edge/anime/${query.id}`);
  const anime = await res.json();

  return { anime };
};

export default Post;
