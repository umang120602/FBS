﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.UserService.Dto
{
    public class RetrieveUserDataDto
    {
        public int UserId { get; set; }
        public string Title { get; set; } = null!;
        public string? Body { get; set; }
    }
}
