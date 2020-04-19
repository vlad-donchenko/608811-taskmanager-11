import AbstractComponent from "./AbstractComponent";

const createTasksTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

class Tasks extends AbstractComponent {
  getTemplate() {
    return createTasksTemplate();
  }
}

export default Tasks;
