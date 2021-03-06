import {generateTasks} from "./mock/task";
import {generateFilters} from "./mock/filter";
import {TaskCount} from "./utils/const";
import {renderComponent, RenderPosition} from "./utils/render";

import BoardComponent from "./components/board/board";
import FilterComponent from "./components/filter/filter";
import SiteMenuComponent from "./components/control/site-menu";
import BoardController from "./controllers/board";


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TaskCount.ALL);
const filters = generateFilters();

renderComponent(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
renderComponent(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);

renderComponent(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);
