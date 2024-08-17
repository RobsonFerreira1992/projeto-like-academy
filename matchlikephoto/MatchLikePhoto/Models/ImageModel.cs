
namespace PhotoLikeApp.Models
{
    public class ImageModel
    {
        public int Id { get; set; }
        public string Url { get; set; } = string.Empty; // Inicializa a string
        public int Likes { get; set; }
        public int Dislikes { get; set; }
    }
}