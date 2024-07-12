﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.UserService
{
    public class CreateOrUpdateUserReqModel
    {
        public int UserId { get; set; }
        public string Title { get; set; } = null!;
        public string? Body { get; set; }
    }
}
