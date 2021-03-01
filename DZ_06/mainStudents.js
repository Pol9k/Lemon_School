function Student(selector){
    // 2. Где хранятся студентов
    this.students = [];
    this.container = document.querySelector(selector);
};
Student.prototype.init = function(){
    this.getStudents();
    this.createButton.addEventListener("click", this.eventAddStudent.bind(this));
}

// 1.отображение студентов
Student.prototype.render = function(){
    this.table.innerHTML = "";
    for(let i = 0; i < this.students.length; i++){
        let tr = document.createElement("TR");

        let tdFio = document.createElement("TD");
        tdFio.innerHTML = this.students[i].first_name;
        tr.appendChild(tdFio);

        let tdCourse = document.createElement("TD");
        tdCourse.innerHTML = this.students[i].course;
        tr.appendChild(tdCourse);

        let tdEstimate = document.createElement("TD");
        tdEstimate.innerHTML = this.students[i].estimate;
        tr.appendChild(tdEstimate);
        

        this.table.appendChild(tr);
    }
};


Student.prototype.getStudents = function(){
    var self = this;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "GET",
        success: function(response){
            if(response.is_success){
                self.students = response.students;
                self.render();
            }
        }
    });
};

Student.prototype.addStudent = function(student){
    var self = this;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "POST",
        body: student,
        success: function(response){
            if(response.is_success){
                self.students.push(student);
                self.render();
            }
        }
    });
};


Student.prototype.getStugents = function(){
    var self = this;
    self.sendAjax({
        url: "https://evgeniychvertkov.com/api/student/",
        method: "GET",
        success: function(response){
            if(response.is_success){
                self.students = response.students;
                self.render();
            }
        }
    });
};

Student.prototype.sendAjax = function(data){
    var self = this;
    var xhr = new XMLHttpRequest();

    xhr.open(data.method, data.url, true);

    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.setRequestHeader("X-Authorization-Token", "170c5197-72a1-11eb-b8cf-001b21474ee8");

    if(data.body !== undefined){
        xhr.send(JSON.stringify(data.body));
    }else{
        xhr.send();
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status == 200) {
            let response = JSON.parse(xhr.response);
            data.success(response);
        }
    }
};

window.onload = function(){
    (new Student(".students")).getStugents();
}
