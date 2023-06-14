// Task 1

// У нас есть список постов на сервере ('https://jsonplaceholder.typicode.com/posts').
// И наша задача отрисовать текст этих постов на странице(вывести на консоль).

// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

// ###### Реализуйте задачу двумя способами:
// - Promise chaining
// - Async / await

function getPosts(...numbers: number[]) {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((posts) => {
      for (let num of numbers) {
        const post = posts[num - 1];
        if (post) console.log(post);
        else console.log(`Не найден пост ${num}`);
      }
    })
    .catch((error) => {
      console.log(new Error(error));
    });
}

getPosts(15, 23, 7, 20000);

async function getResponseJson() {
  const postJson = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await postJson.json();
}

async function posts(...numbers: number[]) {
  try {
    const allPosts = await getResponseJson();
    for (let num of numbers) {
      const post = allPosts[num - 1];
      if (post) console.log(post);
      else console.log(`Не найден пост ${num}`);
    }
  } catch (error) {
    console.log(error);
  }
}

posts(15, 23, 7, 30000);

// Task 2

//     + Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
//     + Во вкладке `Resources` лежит ключ `/todos` - Это именно те данные которые нам нужны
//     + Далее напишите две функции `getTodos` & `printTodos`
//         + Функция `getTodos` делает запрос по указанному адресу и забирает данные.
//         + Функция `printTodos` создает список массив объектов, объект записывает id и title объекта с делом
//         + Вывести полученный результат в консоль

const url2 = "https://jsonplaceholder.typicode.com/todos";
async function getTodos() {
  const todosJson = await fetch(url2);
  return await todosJson.json();
}

//первый способ
async function printTodos() {
  const arr: Object[] = [];
  const allTodos = await getTodos();
  for (let i = 0; i < allTodos.length; i++) {
    const ob = {
      id: allTodos[i].id,
      title: allTodos[i].title,
    };
    arr.push(ob);
  }
  console.log(arr);
}
printTodos();

//второй способ
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface INewTodo {
  id: number;
  title: string;
}
async function printTodos1() {
  const allTodos: Array<ITodo> = await getTodos();
  const newArr = allTodos.map((value) => {
    const todo1: INewTodo = {
      id: value.id,
      title: value.title,
    };
    return todo1;
  });
  console.log(newArr);
}
printTodos1();
