this["templates"] = this["templates"] || {};
this["templates"]["resume"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<div class=\"job\">\n		<div class=\"jobInfo\">\n			<div class=\"jobTitle\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div><div class=\"time\">"
    + alias3(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"time","hash":{},"data":data}) : helper)))
    + "</div>\n			<div class=\"employer\">"
    + alias3(((helper = (helper = helpers.employer || (depth0 != null ? depth0.employer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"employer","hash":{},"data":data}) : helper)))
    + "<span class=\"location\">"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</span></div>\n		</div>\n		<ul class=\"taskList\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tasks : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n	</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "			<li class=\"task\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"4":function(depth0,helpers,partials,data) {
    return "	<div class=\"language\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "	<div class=\"application\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Summary of Qualifications</h2>\n<p>I am an undergraduate student at Brigham Young University, majoring in computer science. I am punctual, a fast learner, and I work well with others. As a Thomas S. Monson Presidential Scholarship recipient, I have been recognized for my leadership, personal character, and academic achievements.</p>\n\n<h2>Work Experience</h2>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.jobs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n<h2>Skills</h2>\n\n<h3>Languages and Frameworks</h3>\n<div class=\"languageList list\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.skills : depth0)) != null ? stack1.languagesAndFrameworks : stack1),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<h3>Applications</h3>\n<div class=\"applicationList list\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.skills : depth0)) != null ? stack1.applications : stack1),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<h2>Awards</h2>\n<p>Thomas S. Monson Presidential Scholarship, Brigham Young University, August 2009</p>\n<p>Eagle Scout, Boy Scouts of America, 2008</p>\n\n<h2>Volunteer Work</h2>\n<p>Missionary for the Church of Jesus Christ of Latter-day Saints in South Africa and Botswana, August 2010–August 2012</p>\n";
},"useData":true});