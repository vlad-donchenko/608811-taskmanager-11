import AbstractComponent from "./AbstractComponent";

const createBoardTemplate = () => {
  return (`<section class="board container"></section>`);
};


class Board extends AbstractComponent {
  getTemplate() {
    return createBoardTemplate();
  }
}

export default Board;
