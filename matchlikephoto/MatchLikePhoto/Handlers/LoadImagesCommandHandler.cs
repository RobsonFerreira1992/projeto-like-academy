using MediatR;
using Microsoft.Extensions.Caching.Memory;
using PhotoLikeApp.Handlers;
using PhotoLikeApp.Models;

public class LoadImagesCommandHandler : IRequestHandler<LoadImagesCommand, List<ImageModel>>
{
    private readonly IMemoryCache _cache;

    public LoadImagesCommandHandler(IMemoryCache cache)
    {
        _cache = cache;
    }

    public Task<List<ImageModel>> Handle(LoadImagesCommand request, CancellationToken cancellationToken)
    {
        if (!_cache.TryGetValue("images", out List<ImageModel> images))
        {
            var colors = new string[]
            {
                "FF5733", "33FF57", "3357FF", "FF33A1", "FFC133",
                "33FFEC", "A633FF", "FF5733", "33FF57", "3357FF"
            };

            images = new List<ImageModel>();

            for (int i = 1; i <= 10; i++)
            {
                var color = colors[i % colors.Length];

                images.Add(new ImageModel
                {
                    Id = i,
                    Url = $"https://placehold.co/600x400/{color}/fff?text=Image+{i}",
                    Likes = 0,
                    Dislikes = 0
                });
            }

            _cache.Set("images", images);
            Console.WriteLine("Images cached."); // Log para verificar o cache inicial
        }
        else
        {
            Console.WriteLine("Images loaded from cache."); // Log para verificar carregamento do cache
        }

        return Task.FromResult(images);
    }
}