document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // Hàm thêm một công việc mới
    function addTask() {
        const taskText = taskInput.value.trim();

        // Kiểm tra xem người dùng có nhập chữ hay không
        if (taskText === "") {
            alert("Vui lòng nhập nội dung công việc!");
            return;
        }

        // 1. Tạo thẻ <li> chứa công việc
        const li = document.createElement('li');

        // 2. Tạo thẻ <input> dạng checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // 3. Tạo thẻ <span> chứa văn bản công việc
        const span = document.createElement('span');
        span.textContent = taskText;

        // 4. Lắng nghe sự kiện click vào checkbox để gạch ngang chữ
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        // 5. Thêm checkbox và văn bản vào thẻ li, rồi thêm li vào danh sách ul
        li.appendChild(checkbox);
        li.appendChild(span);
        taskList.appendChild(li);

        // 6. Xóa nội dung trong ô input sau khi thêm xong
        taskInput.value = "";
        taskInput.focus();
    }

    addBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
