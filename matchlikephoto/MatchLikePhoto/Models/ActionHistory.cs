namespace PhotoLikeApp.Models
{
    public class ActionHistory
    {
        public int ImageId { get; set; }
        public string ActionType { get; set; } // "like" ou "dislike"
        public DateTime ActionTime { get; set; }
    }
}