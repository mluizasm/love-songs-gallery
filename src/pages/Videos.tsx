
import React from 'react';

interface VideoItem {
  id: string;
  title: string;
}

// Lista de vídeos com as músicas que te lembram a pessoa especial
const musicVideos: VideoItem[] = [
  { id: "2kqdlAYNEzk", title: "Música 1" },
  { id: "Af7ieNv0wXY", title: "Música 2" },
  { id: "LD7b5Y496LM", title: "Música 3" },
  { id: "Uficn03UqpM", title: "Música 4" },
  { id: "woAS28GGnAU", title: "Música 5" },
  { id: "-J7J_IWUhls", title: "Música 6" },
  { id: "aD3HgrfjrAw", title: "Música 7" }
];

const Videos = () => {
  const [videos, setVideos] = React.useState<VideoItem[]>(musicVideos);

  return (
    <div className="min-h-screen pt-6 pb-20 px-4">
      <div className="container mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Músicas que me lembram você
        </h1>
        
        <div className="grid grid-cols-1 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="card-romantic">
              <div className="aspect-w-16 aspect-h-9 mb-3 overflow-hidden rounded-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-lg font-medium">{video.title}</h3>
            </div>
          ))}
        </div>
        
        {videos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              Ainda não há vídeos para exibir. Adicione seus vídeos favoritos do YouTube.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
