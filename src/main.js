import {createMenuTemplate} from "./components/menu";
import {createFilterTemplate} from "./components/filter";
import {createTaskTemplate} from "./components/task";
import {createTaskEditTemplate} from "./components/task-edit";
import {createBoardTemplate} from "./components/board";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";
import {render} from "./utils";
import {TASK_COUNT, SHOWING_TASKS_COUNT_BY_BUTTON, SHOWING_TASKS_COUNT_ON_START} from "./const";
import {generateTasks} from "./mock/task";
import {getFilters} from "./mock/filter";

const tasks = generateTasks(TASK_COUNT);
const filters = getFilters();

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

const mainElement = document.querySelector(`.main`);

const mainControlElement = mainElement.querySelector(`.main__control`);
render(mainControlElement, createMenuTemplate(), `beforeend`);

render(mainElement, createFilterTemplate(filters), `beforeend`);
render(mainElement, createBoardTemplate(), `beforeend`);

const tasksElement = mainElement.querySelector(`.board__tasks`);
render(tasksElement, createTaskEditTemplate(tasks[0]), `beforeend`);

tasks.slice(1, showingTasksCount).forEach((task) => {
  render(tasksElement, createTaskTemplate(task), `beforeend`);
});

const boardElement = mainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

const loadMoreButtonElement = document.querySelector(`.load-more`);

loadMoreButtonElement.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount).forEach((task) => {
    render(tasksElement, createTaskTemplate(task), `beforeend`);
  });

  if (showingTasksCount >= tasks.length) {
    loadMoreButtonElement.remove();
  }
});

