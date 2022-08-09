import { IMDb } from '@multiverse/src/types/link-preview';
import Image from 'next/image';
import { ReactComponent as IMDBComponent } from '~assets/svgs/brands/imdb.svg';

interface IMDbCardProps {
  movie: IMDb;
}

export function IMDbCard({ movie }: IMDbCardProps) {
  return (
    <a href={movie.url} target="_blank" rel="noopener noreferrer">
      <div className="relative flex h-36 px-3 py-2">
        <div className="flex-1 basis-2/3 p-2">
          <h2>{movie.title}</h2>
          <p className="line-clamp-3 text-gray-400">{movie.description}</p>
        </div>
        <div className="relative flex-1 basis-1/3 md:basis-1/5">
          <Image
            layout="fill"
            objectFit="cover"
            className="object-center"
            src={movie.images[0]}
            alt={movie.title}
          />
        </div>
        <IMDBComponent
          width={40}
          className="absolute -top-1 -left-1 -rotate-45"
        />
      </div>
    </a>
  );
}
