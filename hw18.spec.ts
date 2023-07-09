// - Написать минимум 10 API тестов для разных HTTP методов.
// За источник можно брать сайт https://reqres.in/ или любой другой сайт с открытым API.
//  Использовать Jest + superAgent
// *Группируем тесты с помощью Describe. Так же применяем хуки, где они уместны*
import axios from "axios";
import superagent from "superagent";
//проверка всего объекта
describe("Test suite", () => {
  const newUser = {
    first_name: "Anna",
    last_name: "Ivanova",
    email: "gdfgdf@mail.ru",
  };

  const expectObject = {
    id: 5,
    email: "charles.morris@reqres.in",
    username: "Charles",
    lastName: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  };

  it("Get users status", async () => {
    const response = await superagent.get("https://reqres.in/api/users");
    expect(response.status).toBe(200);
  });

  it("Get user 6 status", async () => {
    const resp = await axios.get("https://reqres.in/api/users?id=6");
    expect(resp.status).toBe(200);
  });

  it("Create new user", async () => {
    const resp = await superagent
      .post("https://reqres.in/api/users")
      .send({ Name: "Anna" });
    expect(resp.body.Name).toBe(newUser.first_name);
  });

  it("Delete user", async () => {
    const resp = await axios.delete("https://reqres.in/api/users/1");
    expect(resp.status).toBe(204);
  });

  it("Update user", async () => {
    const resp = await superagent
      .put("https://reqres.in/api/users/1")
      .send({ Name: "Anna" })
      .send({ last_name: "Ivanova" });
    expect(resp.status).toBe(200);
    expect(resp.body.Name).toBe(newUser.first_name);
  });

  it("Check with non-existent id", async () => {
    const resp = await superagent
      .get("https://reqres.in/api/user/700")
      .ok((res) => res.status < 500);
    expect(resp.status).toBe(404);
  });

  it("Register user", async () => {
    const resp = await superagent.post("https://reqres.in/api/register").send({
      email: "george.bluth@reqres.in",
      password: "pistol",
    });
    expect(resp.status).toBe(200);
  });

  it("Register user without password", async () => {
    const resp = await superagent
      .post("https://reqres.in/api/register")
      .ok((res) => res.status < 500)
      .send({
        email: "george.bluth@reqres.in",
      });
    expect(resp.status).toBe(400);
    const errorMessage = JSON.parse(resp.text);
    expect(errorMessage.error).toBe("Missing password");
  });

  it("Check full user 5", async () => {
    const resp = await superagent.get("https://reqres.in/api/users/5");
    expect(resp.body.data.id).toEqual(expectObject.id);
    expect(resp.body.data.first_name).toEqual(expectObject.username);
    expect(resp.body.data.last_name).toEqual(expectObject.lastName);
    expect(resp.body.data.email).toEqual(expectObject.email);
    expect(resp.body.data.avatar).toEqual(expectObject.avatar);
  });

  it("Update name with patch", async () => {
    const resp = await superagent
      .patch("https://reqres.in/api/users/4")
      .send({ Name: "Inna" });
    expect(resp.status).toBe(200);
    expect(resp.body.Name).toBe("Inna");
  });
});
