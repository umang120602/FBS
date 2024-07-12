using FluentValidation.Results;
using isCTv9.API.Core.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Repository;
using Repository.CommonServices;
using Repository.FilterModels;
using Repository.Models;
using Repository.ModelValidators;
using Repository.Services.UserService;
using Repository.Services.UserService.Dto;

namespace Crud_Operation.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class UserController : Controller
    {
        #region Injected Dependencies
        private readonly IUser _user;
        #endregion

        #region constructor
        public UserController(IUser user)
        {
            _user = user;
        }
        #endregion

        #region CRUD operation
        /// <summary>
        /// Retrieve Get All User
        /// </summary>
        /// <returns>Retrieve User Data Dto</returns>
        [HttpGet]
        [ProducesResponseType(typeof(UserListDataListDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Error), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Produces("application/json")]
        public async Task<IActionResult> RetrieveGetAllUser([FromQuery] UserListDataFilter userListDataFilter)
        {
            var results = await _user.RetrieveGetAllUser(userListDataFilter);
            return Ok(results);
        }
        #endregion
    }
}
