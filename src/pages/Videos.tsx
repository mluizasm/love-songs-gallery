
import React from 'react';

interface VideoItem {
  id: string;
}

// Lista de vídeos com as músicas que te lembram a pessoa especial
const musicVideos: VideoItem[] = [
  { id: "2kqdlAYNEzk" },
  { id: "Af7ieNv0wXY" },
  { id: "LD7b5Y496LM" },
  { id: "Uficn03UqpM" },
  { id: "woAS28GGnAU" },
  { id: "-J7J_IWUhls" },
  { id: "aD3HgrfjrAw" }
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
          {videos.map((video, index) => (
            <div key={video.id} className="card-romantic">
              <div className="aspect-w-16 aspect-h-9 mb-3 overflow-hidden rounded-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`Música ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        
        {videos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              Ainda não há músicas para exibir.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
