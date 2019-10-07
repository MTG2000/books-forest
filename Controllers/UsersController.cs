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
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository repository;
        private readonly IMapper mapper;

        public UsersController(IUserRepository _repository, IMapper _mapper)
        {
            repository = _repository;
            mapper = _mapper;
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<IEnumerable<User>>> GetAll()
        {
            return (await repository.GetAllAsync()).ToList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> GetById(int id)
        {


            if (!hasAccess(User, id))
                return Forbid();
            var user = await repository.GetAsync(id);
            if (user == null) return NotFound();
            return mapper.Map<UserDto>(user);
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody]UserDtoRequest userDto)
        {
            try
            {
                var user = mapper.Map<User>(userDto);
                var userId = await repository.RegisterUser(user);
                if (userId == null) return BadRequest("User already exist with this name");
                return Ok(user.Id);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(UserDtoRequest userDto)
        {
            var user = mapper.Map<User>(userDto);
            var token = await repository.LoginUser(user);
            if (token == null) return BadRequest();
            return Ok(new { token = token });

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (!hasAccess(User, id))
                return Forbid();
            try
            {
                var userToRemove = await repository.GetAsync(id);
                if (userToRemove == null)
                    return NotFound(new Response("No User was found with this id"));
                repository.Remove(userToRemove);
                await repository.SaveAsync();
                return Ok(new Response("User Was Deleted Successfully"));

            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromBody] User userData, int id)
        {
            if (!hasAccess(User, id))
                return Forbid();
            var user = await repository.GetAsync(id);
            try
            {
                await repository.SaveAsync();
                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        private bool hasAccess(ClaimsPrincipal User, int id)
        {
            return int.Parse(User.Identity.Name) == id || User.IsInRole("Admin");//If He isnt the id owner neither is he the admin
        }

    }
}