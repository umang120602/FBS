using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.FilterModels
{
    public class UserListDataFilter
    {
        public List<UserListFilterBy> FilterBys { get; init; } = new List<UserListFilterBy> { UserListFilterBy.NoFilter };
        public List<string> FilterValues { get; init; } = new List<string> { string.Empty };
        public UserListOrderByOptions OrderBy { get; init; } = UserListOrderByOptions.IdDesc;
        public bool PaginationEnabled { get; init; } = true;
        public int PageNumber { get; init; } = 0;
        public int PageSize { get; init; } = 10;
    }


    public enum UserListOrderByOptions
    {
        [Display(Name = "Sort by Id Desc")] IdDesc,
        [Display(Name = "Sort by Id")] Id,
        [Display(Name = "Sort by Title Desc")] TitleDesc,
        [Display(Name = "Sort by Title")] Title,
        [Display(Name = "Sort by Body Desc")] BodyDesc,
        [Display(Name = "Sort by Body")] Body,
    }

    public enum UserListFilterBy
    {
        [Display(Name = "All")] NoFilter = 0,
        [Display(Name = "Search")] Search,
        [Display(Name = "User Id")] Id,
        [Display(Name = "Title")] Title,
        [Display(Name = "Body")] Body,
    }
}
