package org.factoriaf5.controllers;

import org.factoriaf5.models.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;

@RestController
public class TaskController {
    private final ArrayList<Task> tasks;

    public TaskController() {
        tasks = new ArrayList<>();

    }
    @PostMapping("/tasks")
    public RedirectView addTask(Task task) {
        tasks.add(task);
        return new RedirectView("/");
    }

    @GetMapping("/tasks")
    public ArrayList<Task> showTasks() {
        return tasks;
    }
}
