using MediatR;
using Microsoft.Extensions.Caching.Memory;
using PhotoLikeApp.Models;
using PhotoLikeApp.Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PhotoLikeApp.Handlers
{
    public class UpdateImageRatingCommandHandler : IRequestHandler<UpdateImageRatingCommand, Unit>
    {
        private readonly IMemoryCache _cache;
        private readonly ActionHistoryService _historyService;

        public UpdateImageRatingCommandHandler(IMemoryCache cache, ActionHistoryService historyService)
        {
            _cache = cache;
            _historyService = historyService;
        }

        public Task<Unit> Handle(UpdateImageRatingCommand request, CancellationToken cancellationToken)
        {
            var images = _cache.Get<List<ImageModel>>("images");

            if (images == null)
            {
                Console.WriteLine("No images found in cache!");
                return Task.FromResult(Unit.Value);
            }

            var image = images.FirstOrDefault(img => img.Id == request.ImageId);

            if (image != null)
            {
                if (request.IsLike)
                {
                    image.Likes++;
                    _historyService.AddAction(image.Id, "like", image.Url); // Passando a URL
                    Console.WriteLine($"Image {image.Id} liked. Total Likes: {image.Likes}");
                }
                else
                {
                    image.Dislikes++;
                    _historyService.AddAction(image.Id, "dislike", image.Url); // Passando a URL
                    Console.WriteLine($"Image {image.Id} disliked. Total Dislikes: {image.Dislikes}");
                }

                _cache.Set("images", images);
                Console.WriteLine("Images updated in cache.");
            }
            else
            {
                Console.WriteLine($"Image with ID {request.ImageId} not found in cache.");
            }

            return Task.FromResult(Unit.Value);
        }
    }
}