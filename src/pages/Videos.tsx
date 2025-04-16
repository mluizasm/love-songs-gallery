
import React from 'react';

interface VideoItem {
  id: string;
  title: string;
}

// Lista de vídeos de exemplo (você poderá substituir por seus próprios vídeos)
const demoVideos: VideoItem[] = [
  { id: "dQw4w9WgXcQ", title: "Nosso primeiro encontro" },
  { id: "QdBZY2fkU-0", title: "Nosso aniversário" },
  { id: "VuG7ge_8I2Y", title: "Nossa viagem especial" }
];

const Videos = () => {
  const [videos, setVideos] = React.useState<VideoItem[]>(demoVideos);

  return (
    <div className="min-h-screen pt-6 pb-20 px-4">
      <div className="container mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Nossos Momentos em Vídeo
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
