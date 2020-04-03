import {createMenuTemplate} from "./components/menu";
import {createFilterTemplate} from "./components/filter";
import {createTaskTemplate} from "./components/task";
import {createTaskEditTemplate} from "./components/task-edit";
import {createBoardTemplate} from "./components/board";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";
import {render} from "./utils";
import {TASK_COUNT} from "./const";

const mainElement = document.querySelector(`.main`);

const mainControlElement = mainElement.querySelector(`.main__control`);
render(mainControlElement, createMenuTemplate(), `beforeend`);

render(mainElement, createFilterTemplate(), `beforeend`);
render(mainElement, createBoardTemplate(), `beforeend`);

const tasksElement = mainElement.querySelector(`.board__tasks`);
render(tasksElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(tasksElement, createTaskTemplate(), `beforeend`);
}

const boardElement = mainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
