using PhotoLikeApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace PhotoLikeApp.Services
{
    public class ActionHistoryService
    {
        private readonly List<ImageModel> _history = new List<ImageModel>();

        public void AddAction(int imageId, string actionType, string imageUrl)
        {
            var existingEntry = _history.FirstOrDefault(img => img.Id == imageId);

            if (existingEntry != null)
            {
                if (actionType == "like")
                {
                    existingEntry.Likes++;
                }
                else if (actionType == "dislike")
                {
                    existingEntry.Dislikes++;
                }
            }
            else
            {
                _history.Add(new ImageModel
                {
                    Id = imageId,
                    Url = imageUrl,
                    Likes = actionType == "like" ? 1 : 0,
                    Dislikes = actionType == "dislike" ? 1 : 0
                });
            }
        }

        public List<ImageModel> GetHistory()
        {
            return _history;
        }

        public void ClearHistory()
        {
            _history.Clear();
        }
    }
}