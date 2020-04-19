import {TASK_COUNT} from "./const";
import MenuComponent from "./components/menu";
import FilterComponent from "./components/filter";
import BoardComponent from "./components/board";
import BoardController from "./controllers/board";
import {generateTasks} from "./mock/task";
import {getFilters} from "./mock/filter";
import {RenderPosition, render} from "./utils/render";

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);
const filters = getFilters();

render(siteHeaderElement, new MenuComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);
render(siteMainElement, boardComponent.getElement(), RenderPosition.BEFOREEND);
boardController.render(tasks);
