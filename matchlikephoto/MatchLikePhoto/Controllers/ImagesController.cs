using MediatR;
using Microsoft.AspNetCore.Mvc;
using PhotoLikeApp.Handlers;
using PhotoLikeApp.Models;
using PhotoLikeApp.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PhotoLikeApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImagesController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly ActionHistoryService _historyService;

        public ImagesController(IMediator mediator, ActionHistoryService historyService)
        {
            _mediator = mediator;
            _historyService = historyService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ImageModel>>> GetImages()
        {
            // Limpa o histórico de ações
            _historyService.ClearHistory();

            var images = await _mediator.Send(new LoadImagesCommand());
            return Ok(images);
        }

        [HttpPost("{id}/like")]
        public async Task<ActionResult> LikeImage(int id)
        {
            await _mediator.Send(new UpdateImageRatingCommand { ImageId = id, IsLike = true });
            return Ok();
        }

        [HttpPost("{id}/dislike")]
        public async Task<ActionResult> DislikeImage(int id)
        {
            await _mediator.Send(new UpdateImageRatingCommand { ImageId = id, IsLike = false });
            return Ok();
        }

        [HttpGet("history")]
        public ActionResult<List<ImageModel>> GetHistory()
        {
            var history = _historyService.GetHistory();
            return Ok(history);
        }
    }
}