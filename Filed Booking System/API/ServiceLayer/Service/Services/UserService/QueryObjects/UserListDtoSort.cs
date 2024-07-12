using Microsoft.Extensions.Options;
using DataAccess.Models;
using Repository.FilterModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.UserService.QueryObjects
{
    public static class UserListDtoSort
    {

        public static IQueryable<User> OrderUserListDataBy(this IQueryable<User> data, UserListDataFilter option)
        {
            switch (option.OrderBy)
            {
                case UserListOrderByOptions.IdDesc:
                    data = data.OrderByDescending(x => x.Id);
                    break;
                case UserListOrderByOptions.Id:
                    data = data.OrderBy(x => x.Id);
                    break;
                case UserListOrderByOptions.BodyDesc:
                    data = data.OrderByDescending(x => x.Body);
                    break;
                case UserListOrderByOptions.Body:
                    data = data.OrderBy(x => x.Body);
                    break;
                case UserListOrderByOptions.TitleDesc:
                    data = data.OrderByDescending(x => x.Title);
                    break;
                case UserListOrderByOptions.Title:
                    data = data.OrderBy(x => x.Title);
                    break;
            }
            return data;
        }
    }
}