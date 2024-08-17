using MediatR;

namespace PhotoLikeApp.Handlers
{
    public class UpdateImageRatingCommand : IRequest<Unit>
    {
        public int ImageId { get; set; }
        public bool IsLike { get; set; }
    }
}