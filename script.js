document.getElementById("coffee-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращает стандартное поведение формы
    // Получаем значения из формы
    const name = document.getElementById("name").value;
    const sort = document.getElementById("sort").value;
    const krepostobj = document.querySelector('input[name="kr"]:checked').value; // Исправлено на :checked
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    // Добавляем новую строку в таблицу
    const table = document.getElementById("coffee-table");
    const newRow = table.insertRow();
    newRow.innerHTML = `<td><img src="${image}" alt="${name}" style="max-width: 100px;"></td>
            <td>${name}</td>
            <td>${sort}</td>
            <td>${krepostobj}</td>
            <td>${price} грн</td>
            <td>${description}</td>;`;
    // Очищаем поля формы
    document.getElementById("coffee-form").reset();
  });