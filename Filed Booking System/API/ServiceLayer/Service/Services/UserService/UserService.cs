using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Services.UserService;
using ServiceLayer.Utilities;
using StatusGeneric;
using Repository.Models;
using ServiceLayer.Constants;
using Repository.Services.UserService.Dto;
using Repository.FilterModels;
using Repository.Services.UserService.QueryObjects;
using ServiceLayer.Generics;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using DataAccess.Models;
using DataAccess.Data;

namespace Repository
{
    public interface IUser
    {
        #region Interfaces
        Task<UserListDataListDto> RetrieveGetAllUser(UserListDataFilter userListDataFilter);

        #endregion
    }
    public class UserService : IUser
    {
        #region Inject Dependencies
        private readonly FieldBookingSystemContext _context;
        #endregion

        #region Constructor
        public UserService(FieldBookingSystemContext context)
        {
            _context = context;
        }
        #endregion

        #region Method

        public async Task<UserListDataListDto> RetrieveGetAllUser(UserListDataFilter userListDataFilter)
        {
            IQueryable<User> userListQuery = null;
            List<User> userListData = new List<User>();
            int totalRecords = 0;

            userListQuery = from data in _context.Users
                            select data;



            for (var i = 0; i < userListDataFilter.FilterBys.Count; i++)
            {
                var filterBy = userListDataFilter.FilterBys[i];

                var filterValue = userListDataFilter.FilterValues[i];

                if (filterValue != null)
                {
                        userListQuery = userListQuery.FilteUserListDataBy(filterBy, filterValue);
                }
            }

            totalRecords = await userListQuery.CountAsync();

            if (userListDataFilter.PaginationEnabled == true)
            {
                userListData = await userListQuery
                    .OrderUserListDataBy(userListDataFilter)
                    .Page(userListDataFilter.PageNumber, userListDataFilter.PageSize)
                    .ToListAsync();
                return new UserListDataListDto(totalRecords, userListDataFilter.PageSize, userListData);
            }
            else
            {
                userListData = await userListQuery
                    .OrderUserListDataBy(userListDataFilter)
                    .ToListAsync();
                return new UserListDataListDto(totalRecords, totalRecords, userListData);
            }
        }




        #endregion
    }
}