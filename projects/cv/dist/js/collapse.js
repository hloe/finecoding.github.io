"use strict";$(".collapse").click(function(l){l.preventDefault,$(this).children(".collapse-title").toggleClass("open closed"),$(this).children(".collapse-content").slideToggle("slow")});