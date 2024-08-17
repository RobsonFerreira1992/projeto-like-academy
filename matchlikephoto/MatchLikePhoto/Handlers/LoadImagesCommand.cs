using MediatR;
using PhotoLikeApp.Models;


namespace PhotoLikeApp.Handlers
{
    public class LoadImagesCommand : IRequest<List<ImageModel>> { }
}