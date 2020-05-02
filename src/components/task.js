import AbstractComponent from "./abstract-component";
import {formatTime, formatDate, isOverdueDate} from "../utils/common.js";
import {encode} from "he";

const createTaskTemplate = (task) => {
  const {description: notSanitizedDescription, color, isFavorite, isArchive, dueDate, repeatingDays} = task;

  const archiveButtonInActiveClass = isArchive ? `` : `card__btn--disabled`;
  const favoriteButtonInActiveClass = isFavorite ? `` : `card__btn--disabled`;

  const isExpired = dueDate instanceof Date && isOverdueDate(dueDate, new Date());
  const deadlineClass = isExpired ? `card--deadline` : ``;

  const isRepeatingTask = Object.values(repeatingDays).some(Boolean);
  const repeatingDaysClass = isRepeatingTask ? `card--repeat` : ``;

  const isDateShowing = !!dueDate;
  const date = isDateShowing ? formatDate(dueDate) : ``;
  const time = isDateShowing ? formatTime(dueDate) : ``;
  const description = encode(notSanitizedDescription);

  return (
    `<article class="card card--${color} ${deadlineClass} ${repeatingDaysClass}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive ${archiveButtonInActiveClass}">
              archive
            </button>
            <button type="button" class="card__btn card__btn--favorites ${favoriteButtonInActiveClass}">
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${date}</span>
                    <span class="card__time">${time}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};

class Task extends AbstractComponent {
  constructor(task) {
    super();
    this._task = task;
  }

  getTemplate() {
    return createTaskTemplate(this._task);
  }

  setEditButtonClickHandler(handler) {
    this.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, handler);
  }

  setArchiveButtonClickHandler(handler) {
    this.getElement().querySelector(`.card__btn--archive`).addEventListener(`click`, handler);
  }

  setFavoritesButtonCLickHandler(handler) {
    this.getElement().querySelector(`.card__btn--favorites`).addEventListener(`click`, handler);
  }
}

export default Task;
