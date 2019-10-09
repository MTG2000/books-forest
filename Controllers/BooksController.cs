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

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAll()
        {
            var books = await repository.GetAllAsync(1, 16);

            if (books.FirstOrDefault() == null) return NotFound("No Books Found");

            IList<BookDto> bookDtos = new List<BookDto>();

            foreach (var book in books)
            {
                var bookDto = mapper.Map<BookDto>(book);
                var bookTags = book.BookTags.ToList();
                foreach (var bt in bookTags)
                {
                    bookDto.Tags.Add(bt.Tag.Name);
                }
                bookDtos.Add(bookDto);
            }
            return Ok(bookDtos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var book = await repository.GetAsync(id);
            if (book == null) return NotFound("Book with this id wasn't found :(");
            var bookDto = mapper.Map<BookDto>(book);
            foreach (var bt in book.BookTags.ToList())
            {
                bookDto.Tags.Add(bt.Tag.Name);
            }
            return Ok(bookDto);
        }

        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] BookDtoRequest bookDto)
        {

            var tags = bookDto.Tags;
            var book = mapper.Map<Book>(bookDto);
            var result = await repository.AddBookAsync(book, tags.ToArray());
            if (result == null) return BadRequest("Book Wasnt added successfully");
            return Ok(result);
        }

    }
}