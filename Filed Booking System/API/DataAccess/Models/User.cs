﻿using System;
using System.Collections.Generic;

namespace DataAccess.Models;

public partial class User
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Body { get; set; }
}
