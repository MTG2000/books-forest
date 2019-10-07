using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using books_app.Domain.Models;
using books_app.Domain.Repositories;
using books_app.Mapping.Resources;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace books_app.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository repository;
        private readonly IMapper mapper;

        public BooksController(IBookRepository _repository, IMapper _mapper)
        {
            repository = _repository;
            mapper = _mapper;
        }

        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] BookDtoRequest bookDto)
        {

            var tags = bookDto.Tags;
            var book = mapper.Map<Book>(bookDto);
            var result = await repository.AddBookAsync(book, tags);
            if (result == null) return BadRequest("Book Wasnt added successfully");
            return Ok(result);
        }

    }
}