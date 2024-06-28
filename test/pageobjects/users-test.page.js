const { $, browser } = require("@wdio/globals");
const Page = require("./page");

class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get usersItems() {
    return browser.react$$("User");
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }

  async deleteUser() {
    try {
      browser.pause(1000)
      const usersCount = await this.usersItems.length;
      if (!usersCount) {
        throw new Error("Пользователи не найднеы");
      }

      await this.usersItems[0].$("#user-delete").click();
      const usersCountAfterDelete = await this.usersItems.length;

      if (usersCount - usersCountAfterDelete !== 1) {
        throw new Error("Удаления не было или произошло удаление более 1 пользователя");
      }
    } catch (error) {
      throw new Error("Не удалось удалить пользователя" + error.message);
    }
  }

  open() {
    return super.open("users-test");
  }
}

module.exports = new UsersPage();
