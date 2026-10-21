// Galeri karakter individual yang memiliki referensi foto resmi Sylvanian Families.
const CHARACTERS = [
  ["james-midnight", "James Midnight", "Midnight Cat Father", "🐱"],
  ["ralph-walnut", "Ralph Walnut", "Walnut Squirrel Boy", "🐿️"],
  ["freya-chocolate", "Freya Chocolate", "Chocolate Rabbit Girl", "🐰"],
  ["lyra-persian", "Lyra Persian", "Persian Cat Girl", "🐱"],
  ["piers-petite", "Piers Petite", "Bear Boy", "🐻"],
  ["candice-snuggly", "Candice Snuggly", "Sloth Mother", "🦥"],
  ["richie-hopper", "Richie Hopper", "Kangaroo Father", "🦘"],
  ["rebecca-periwinkle", "Rebecca Periwinkle", "Milk Rabbit Girl", "🐰"],
  ["muddy-mcburrows", "Muddy McBurrows", "Mole Boy", "🐹"],
  ["carissa-outback", "Carissa Outback", "Koala Mother", "🐨"],
  ["glenn-splashy", "Glenn Splashy", "Otter Father", "🦦"],
  ["shane-sandy", "Shane Sandy", "Striped Cat Boy", "🐱"],
  ["theodore-maple", "Theodore Maple", "Maple Cat Father", "🐱"],
  ["lionel-grand", "Lionel Grand", "Lion Man", "🦁"],
  ["melinda-cakebread", "Melinda Cakebread", "Toy Poodle Girl", "🐩"],
  ["rianne-bubblebrook", "Rianne Bubblebrook", "Elephant Mother", "🐘"],
  ["abigail-bramble", "Abigail Bramble", "Hedgehog Girl", "🦔"],
  ["william-cinnamon", "William Cinnamon", "Cinnamon Rabbit Man", "🐰"],
  ["andre-woolly", "Andre Woolly", "Alpaca Father", "🦙"],
  ["lulu-golightly", "Lulu Golightly", "Silk Cat Older Sister", "🐱"],
  ["fawna-buckley", "Fawna Buckley", "Deer Girl", "🦌"],
  ["buddy-fenton", "Buddy Fenton", "Labrador Boy", "🐶"],
  ["billy-brightfield", "Billy Brightfield", "Goat Father", "🐐"],
  ["rosalina-pookie", "Rosalina Pookie", "Pookie Panda Girl", "🐼"],
  ["justin-caramel", "Justin Caramel", "Caramel Dog Baby Boy", "🐶"],
  ["lona-dale", "Lona Dale", "Sheep Girl", "🐑"],
  ["vincent-husky", "Vincent Husky", "Husky Father", "🐶"],
  ["egbert-highbranch", "Egbert Highbranch", "Giraffe Father", "🦒"]
];

// Foto karakter individual dari halaman resmi Sylvanian Families 35th special web.
const OFFICIAL_IMAGES = {
  "james-midnight": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/1_sf.jpg",
  "ralph-walnut": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/2_sf.jpg",
  "freya-chocolate": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/3_sf.jpg",
  "lyra-persian": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/4_sf.jpg",
  "piers-petite": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/5_sf.jpg",
  "candice-snuggly": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/6_sf.jpg",
  "richie-hopper": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/8_sf.jpg",
  "rebecca-periwinkle": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/9_sf.jpg",
  "muddy-mcburrows": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/10_sf.jpg",
  "carissa-outback": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/11_sf.jpg",
  "glenn-splashy": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/12_sf.jpg",
  "shane-sandy": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/13_sf.jpg",
  "theodore-maple": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/14_sf.jpg",
  "lionel-grand": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/15_sf.jpg",
  "melinda-cakebread": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/16_sf.jpg",
  "rianne-bubblebrook": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/17_sf.jpg",
  "abigail-bramble": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/18_sf.jpg",
  "william-cinnamon": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/19_sf.jpg",
  "andre-woolly": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/20_sf.jpg",
  "lulu-golightly": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/21_sf.jpg",
  "fawna-buckley": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/22_sf.jpg",
  "buddy-fenton": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/23_sf.jpg",
  "billy-brightfield": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/24_sf.jpg",
  "rosalina-pookie": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/25_sf.jpg",
  "justin-caramel": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/27_sf.jpg",
  "lona-dale": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/28_sf.jpg",
  "vincent-husky": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/29_sf.jpg",
  "egbert-highbranch": "https://www.sylvanianfamilies.com/assets/35th/mayor-election/images/list/30_sf.jpg"
};

function characterImage(id) {
  return characterPhotos[id] || OFFICIAL_IMAGES[id] || null;
}

// Halaman katalog resmi per keluarga; bila belum diketahui, arahkan ke katalog karakter.
function officialCharacterPage(id) {
  const pages = {
    "freya-chocolate": "001/",
    "ralph-walnut": "002/",
    "lyra-persian": "004/",
    "shane-sandy": "006/",
    "carissa-outback": "015/",
    "abigail-bramble": "041/"
  };

  return pages[id]
    ? "https://www.sylvanianfamilies.com/en-au/catalog/characters/details/" + pages[id]
    : "https://www.sylvanianfamilies.com/en-au/special/35th-mayor-election/";
}

const COLORS = ["#df8baa", "#d99ab8", "#b9a4df", "#91b9d8", "#8fc7b5", "#e6b66f", "#e58d85", "#a7b67b", "#c58eae", "#8d9bd3"];
const NOTE_COLORS = ["#fff1a9", "#ffdce8", "#dff2d4", "#dcecff", "#f0e0ff"];

let courses = JSON.parse(localStorage.getItem("pinkieCourses") || "[]");
let tasks = JSON.parse(localStorage.getItem("pinkieTasks") || "[]");
let notes = JSON.parse(localStorage.getItem("pinkieNotes") || "[]");
let activeCourseId = null;
let chosenCharacterId = CHARACTERS[0][0];
let chosenCourseColor = COLORS[0];
let chosenFontColor = "#bd5d82";
let uploadedImageForCourse = null;
let characterPhotos = JSON.parse(localStorage.getItem("pinkieCharacterPhotos") || "{}");
let toastTimer;

const $ = id => document.getElementById(id);

const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[ch]));

function saveAll() {
  localStorage.setItem("pinkieCourses", JSON.stringify(courses));
  localStorage.setItem("pinkieTasks", JSON.stringify(tasks));
  localStorage.setItem("pinkieNotes", JSON.stringify(notes));
}

function notify(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function dateLabel(date) {
  if (!date) return "Belum diatur";
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function render() {
  $("courseCount").textContent = `${courses.length} subject${courses.length === 1 ? "" : "s"}`;
  $("emptyState").classList.toggle("show", courses.length === 0);

  $("courseGrid").innerHTML = courses.map(c => {
    const list = tasks.filter(t => t.courseId === c.id);
    const done = list.filter(t => t.completed).length;
    const character = CHARACTERS.find(x => x[0] === c.characterId);
    const photo = c.imageData || characterImage(c.characterId);
    const animal = photo
      ? `<img src="${photo}" alt="" style="width:100%;height:100%;object-fit:contain;border-radius:inherit">`
      : escapeHTML(character?.[3] || "📷");

    return `<button class="course-card" style="--accent:${c.color}" data-open-course="${c.id}">
      <div class="card-accent"></div>
      <div class="card-top"><div class="animal-badge">${animal}</div><span class="card-code">${escapeHTML(c.code || "MY CLASS")}</span></div>
      <h3>${escapeHTML(c.name)}</h3><p class="card-lecturer">${escapeHTML(c.lecturer || "A little class of mine ♡")}</p>
      <div class="card-bottom"><span>${list.length} tugas · ${done} selesai</span><strong>Buka kelas ↗</strong></div>
      <span class="card-delete" data-delete-course="${c.id}" title="Hapus mata kuliah">×</span>
    </button>`;
  }).join("");

  renderNotes();
}

function openCourse(id) {
  activeCourseId = id;
  const c = courses.find(x => x.id === id);
  if (!c) return;

  $("dashboard").classList.add("hidden");
  $("subjectPage").classList.remove("hidden");
  $("floatingAdd").classList.add("hidden");

  const character = CHARACTERS.find(x => x[0] === c.characterId);
  const photo = c.imageData || characterImage(c.characterId);
  const animal = photo
    ? `<img src="${photo}" alt="Foto Sylvanian Families" style="width:100%;height:100%;object-fit:contain;border-radius:inherit">`
    : escapeHTML(character?.[3] || "📷");

  $("subjectHero").innerHTML = `<div class="hero-animal">${animal}</div><div class="hero-text"><p class="eyebrow">MY LITTLE CLASS ♡</p><h1>${escapeHTML(c.name)}</h1><p>${escapeHTML(c.code || "")} ${c.lecturer ? "· " + escapeHTML(c.lecturer) : ""}</p></div><div class="hero-tools"><button class="icon-button" id="changeAnimal" title="Ganti gambar">🐻</button><button class="icon-button" id="editCourse" title="Edit mata kuliah">✎</button></div>`;

  $("changeAnimal").onclick = () => {
    openCourseModal(id);
    setTimeout(() => $("openCharacterGallery").click(), 0);
  };

  $("editCourse").onclick = () => openCourseModal(id);
  renderTasks();
}

function showDashboard() {
  activeCourseId = null;
  $("subjectPage").classList.add("hidden");
  $("dashboard").classList.remove("hidden");
  $("floatingAdd").classList.remove("hidden");
  render();
}

function renderTasks() {
  const list = tasks
    .filter(t => t.courseId === activeCourseId)
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  $("taskList").innerHTML = list.map(t => `<div class="task-row ${t.completed ? "completed" : ""}" style="--task-color:${t.fontColor || "#bd5d82"}">
    <input class="task-check" type="checkbox" data-toggle-task="${t.id}" ${t.completed ? "checked" : ""} aria-label="Tandai tugas selesai">
    <div class="task-content"><h3>${escapeHTML(t.name)}</h3><p>${escapeHTML(t.description || "No extra notes ♡")}</p></div>
    <div class="task-meta"><strong>${dateLabel(t.date)}</strong>${escapeHTML(t.time || "")}</div>
    <div class="task-actions"><button data-edit-task="${t.id}" title="Edit tugas">✎</button><button data-delete-task="${t.id}" title="Hapus tugas">×</button></div>
  </div>`).join("");

  $("emptyTasks").classList.toggle("hidden", list.length > 0);
}

function renderNotes() {
  const board = $("stickyBoard");

  // Migrasi posisi lama (relatif board) ke koordinat halaman, sekali saja.
  const legacy = notes.filter(n => n.x != null && !n.pg);
  if (legacy.length && !$("dashboard").classList.contains("hidden")) {
    const br = board.getBoundingClientRect();
    legacy.forEach(n => {
      n.x += br.left + window.scrollX;
      n.y += br.top + window.scrollY;
      n.pg = true;
    });
    saveAll();
  }

  board.innerHTML = notes.map(n => `<div class="sticky-note" data-note="${n.id}" style="background:${n.color};--tilt:${n.tilt || 0}deg;${n.x != null ? `position:absolute;left:${n.x}px;top:${n.y}px;z-index:15;` : ""}">
    <button class="note-delete" data-delete-note="${n.id}" aria-label="Hapus note">×</button>
    <textarea data-note-text="${n.id}" aria-label="Isi sticky note" placeholder="Tulis sesuatu yang lucu...">${escapeHTML(n.text || "")}</textarea><span class="note-grip" title="Geser note">✥ drag</span>
  </div>`).join("");

  // Board TIDAK dibuat relative, supaya note absolute memakai koordinat halaman.
  board.style.position = "";
  board.style.minHeight = "";
  enableDragging();
}
function openCourseModal(editId = null) {
  $("courseForm").dataset.editId = editId || "";
  const c = editId ? courses.find(x => x.id === editId) : null;

  $("courseName").value = c?.name || "";
  $("courseCode").value = c?.code || "";
  $("courseLecturer").value = c?.lecturer || "";

  chosenCharacterId = c?.characterId || CHARACTERS[0][0];
  chosenCourseColor = c?.color || COLORS[0];
  uploadedImageForCourse = c?.imageData || null;

  renderColorPicker("courseColorPicker", COLORS, chosenCourseColor, color => chosenCourseColor = color);
  updateSelectedCharacterPreview();
  $("courseModal").classList.remove("hidden");
}

function updateSelectedCharacterPreview() {
  const c = CHARACTERS.find(x => x[0] === chosenCharacterId) || CHARACTERS[0];
  const photo = uploadedImageForCourse || characterImage(chosenCharacterId);

  $("selectedCharacterPreview").innerHTML = `${photo ? `<img src="${photo}" alt="">` : `<div class="character-placeholder">${escapeHTML(c[3])}</div>`}<div><strong>${escapeHTML(c[1])}</strong><small>${escapeHTML(c[2])}</small></div>`;
}

function renderCharacterGallery(filter = "") {
  const query = filter.toLowerCase().trim();
  const list = CHARACTERS.filter(c =>
    Boolean(OFFICIAL_IMAGES[c[0]]) &&
    c.slice(1, 3).join(" ").toLowerCase().includes(query)
  );

  $("characterGalleryGrid").innerHTML = list.map(c => {
    const photo = characterImage(c[0]);

    return `<div class="character-card ${chosenCharacterId === c[0] ? "selected" : ""}">
      <div class="character-image">${photo ? `<img loading="lazy" src="${photo}" alt="${escapeHTML(c[1])}" onerror="this.closest('.character-card').classList.add('image-unavailable');this.alt='Foto gagal dimuat — buka katalog resmi';this.style.opacity='.35'">` : escapeHTML(c[3])}</div>
      <strong>${escapeHTML(c[1])}</strong><small>${escapeHTML(c[2])}</small>
      <a class="official-character-link" href="${officialCharacterPage(c[0])}" target="_blank" rel="noopener noreferrer">Katalog resmi ↗</a>
      <div class="character-card-actions">
        <button type="button" class="choose-character" data-choose-character="${c[0]}">Pilih</button>
      </div>
    </div>`;
  }).join("") || `<p class="gallery-intro">Karakter tidak ditemukan. Coba kata kunci lain.</p>`;
}

function chooseCharacter(id) {
  chosenCharacterId = id;
  uploadedImageForCourse = null;
  updateSelectedCharacterPreview();
  renderCharacterGallery($("gallerySearch").value);
  closeModal("galleryModal");
}

function openTaskModal(editId = null) {
  if (!activeCourseId) return;

  const t = editId ? tasks.find(x => x.id === editId) : null;
  $("taskForm").dataset.editId = editId || "";

  $("taskName").value = t?.name || "";
  $("taskDate").value = t?.date || todayISO();
  $("taskTime").value = t?.time || "23:59";
  $("taskDescription").value = t?.description || "";

  chosenFontColor = t?.fontColor || "#bd5d82";
  renderColorPicker("fontColorPicker", COLORS, chosenFontColor, color => chosenFontColor = color);
  $("taskModal").classList.remove("hidden");
}

function renderColorPicker(id, colors, selected, onPick) {
  $(id).innerHTML = colors.map(c => `<button type="button" class="color-option ${c === selected ? "selected" : ""}" data-color="${c}" style="background:${c}" aria-label="Pilih warna ${c}"></button>`).join("");

  $(id).querySelectorAll("[data-color]").forEach(b => b.onclick = () => {
    onPick(b.dataset.color);
    $(id).querySelectorAll(".color-option").forEach(x => x.classList.toggle("selected", x === b));
  });
}
function closeModal(id) {
  $(id).classList.add("hidden");
}

function addNote() {
  const n = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    text: "",
    color: NOTE_COLORS[notes.length % NOTE_COLORS.length],
    tilt: (Math.random() * 3 - 1.5)
  };

  notes.push(n);
  saveAll();
  renderNotes();
  notify("Sticky note baru ditambahkan ♡");

  const el = document.querySelector(`[data-note="${n.id}"] textarea`);
  if (el) el.focus();
}

function enableDragging() {
  document.querySelectorAll(".sticky-note").forEach(note => {
    const grip = note.querySelector(".note-grip");
    if (!grip || grip.dataset.dragReady === "true") return;

    grip.dataset.dragReady = "true";

    // Mendukung mouse, sentuhan HP, dan stylus.
    grip.style.touchAction = "none";
    grip.style.cursor = "grab";

    grip.addEventListener("pointerdown", e => {
      if (e.button !== undefined && e.button !== 0) return;

      e.preventDefault();

      const id = note.dataset.note;
      const data = notes.find(n => n.id === id);
      const board = $("stickyBoard");

      if (!data || !board) return;

            const nr = note.getBoundingClientRect();

      // Simpan posisi awal sebagai koordinat halaman
      if (data.x == null) {
        data.x = nr.left + window.scrollX;
        data.y = nr.top + window.scrollY;
        data.pg = true;
      }

      note.style.position = "absolute";
      note.style.zIndex = "15";
      note.style.left = data.x + "px";
      note.style.top = data.y + "px";

      const startX = e.pageX;
      const startY = e.pageY;
      const origX = data.x;
      const origY = data.y;
      const pointerId = e.pointerId;

      grip.style.cursor = "grabbing";

      try {
        grip.setPointerCapture(pointerId);
      } catch (_) {}

      const move = ev => {
        if (ev.pointerId !== pointerId) return;

        const maxX = Math.max(0, document.documentElement.clientWidth - note.offsetWidth);

        data.x = Math.min(maxX, Math.max(0, origX + ev.pageX - startX));
        data.y = Math.max(0, origY + ev.pageY - startY);

        note.style.left = data.x + "px";
        note.style.top = data.y + "px";
      };

      const stop = ev => {
        if (ev && ev.pointerId !== pointerId) return;

        grip.removeEventListener("pointermove", move);
        grip.removeEventListener("pointerup", stop);
        grip.removeEventListener("pointercancel", stop);
        grip.removeEventListener("lostpointercapture", lost);

        grip.style.cursor = "grab";

        saveAll();
      };

      const lost = () => stop();

      grip.addEventListener("pointermove", move);
      grip.addEventListener("pointerup", stop);
      grip.addEventListener("pointercancel", stop);
      grip.addEventListener("lostpointercapture", lost);
    });
  });
}

$("todayLabel").textContent = new Date().toLocaleDateString("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long"
});

$("floatingAdd").onclick = () => openCourseModal();
$("addNoteTop").onclick = addNote;
$("addNoteInline").onclick = addNote;
$("backButton").onclick = showDashboard;
$("addTaskButton").onclick = () => openTaskModal();

document.querySelectorAll("[data-close]").forEach(b =>
  b.onclick = () => closeModal(b.dataset.close)
);

document.querySelectorAll(".modal-backdrop").forEach(m =>
  m.addEventListener("click", e => {
    if (e.target === m) closeModal(m.id);
  })
);

$("openCharacterGallery").onclick = () => {
  renderCharacterGallery($("gallerySearch").value);
  $("galleryModal").classList.remove("hidden");
};

$("gallerySearch").addEventListener("input", () =>
  renderCharacterGallery($("gallerySearch").value)
);

$("characterGalleryGrid").addEventListener("click", e => {
  const choose = e.target.closest("[data-choose-character]");
  if (choose) {
    chooseCharacter(choose.dataset.chooseCharacter);
    return;
  }
});

$("courseForm").addEventListener("submit", e => {
  e.preventDefault();

  const editId = e.currentTarget.dataset.editId;

  const payload = {
    name: $("courseName").value.trim(),
    code: $("courseCode").value.trim(),
    lecturer: $("courseLecturer").value.trim(),
    characterId: chosenCharacterId,
    color: chosenCourseColor,
    imageData: uploadedImageForCourse
  };

  if (editId) {
    Object.assign(courses.find(c => c.id === editId), payload);
    notify("Mata kuliah berhasil diubah ♡");
  } else {
    courses.push({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      ...payload
    });
    notify("Mata kuliah baru ditambahkan ♡");
  }

  saveAll();
  closeModal("courseModal");
  render();

  if (activeCourseId) openCourse(activeCourseId);
});

$("taskForm").addEventListener("submit", e => {
  e.preventDefault();

  const editId = e.currentTarget.dataset.editId;

  const payload = {
    name: $("taskName").value.trim(),
    date: $("taskDate").value,
    time: $("taskTime").value,
    description: $("taskDescription").value.trim(),
    fontColor: chosenFontColor
  };

  if (editId) {
    Object.assign(tasks.find(t => t.id === editId), payload);
    notify("Tugas berhasil diedit ♡");
  } else {
    tasks.push({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      courseId: activeCourseId,
      completed: false,
      ...payload
    });
    notify("Tugas berhasil ditambahkan ♡");
  }

  saveAll();
  closeModal("taskModal");
  renderTasks();
  render();
});

document.addEventListener("click", async e => {
  const open = e.target.closest("[data-open-course]");

  if (open && !e.target.closest("[data-delete-course]")) {
    openCourse(open.dataset.openCourse);
    return;
  }

  const delCourse = e.target.closest("[data-delete-course]");

  if (delCourse) {
    e.stopPropagation();

    const id = delCourse.dataset.deleteCourse;
    const c = courses.find(x => x.id === id);

    if (await showConfirm(
      `Hapus mata kuliah "${c?.name}" beserta semua tugasnya?`,
      "Hapus mata kuliah?"
    )) {
      courses = courses.filter(x => x.id !== id);
      tasks = tasks.filter(t => t.courseId !== id);

      saveAll();
      render();
      renderAllTasks();
      notify("Mata kuliah dihapus");
    }

    return;
  }

  const toggle = e.target.closest("[data-toggle-task]");

  if (toggle) {
    const t = tasks.find(x => x.id === toggle.dataset.toggleTask);

    if (t) t.completed = toggle.checked;

    saveAll();
    renderTasks();
    render();
    return;
  }

  const delTask = e.target.closest("[data-delete-task]");

  if (delTask) {
    const id = delTask.dataset.deleteTask;

    if (await showConfirm(
      "Tugas ini akan dihapus dari daftar kamu.",
      "Hapus tugas?"
    )) {
      tasks = tasks.filter(t => t.id !== id);

      saveAll();
      renderTasks();
      render();
      renderAllTasks();
      updateDeadlineReminder();
    }

    return;
  }

  const editTask = e.target.closest("[data-edit-task]");

  if (editTask) {
    openTaskModal(editTask.dataset.editTask);
    return;
  }

  const delNote = e.target.closest("[data-delete-note]");

  if (delNote) {
    if (await showConfirm(
      "Sticky note ini akan dihapus.",
      "Hapus sticky note?"
    )) {
      notes = notes.filter(n => n.id !== delNote.dataset.deleteNote);

      saveAll();
      renderNotes();
    }

    return;
  }
});

document.addEventListener("input", e => {
  const field = e.target.closest("[data-note-text]");

  if (field) {
    const n = notes.find(x => x.id === field.dataset.noteText);

    if (n) {
      n.text = field.value;
      saveAll();
    }
  }
});


function deadlineDateTime(task) {
  if (!task.date) return null;

  const d = new Date(`${task.date}T${task.time || "23:59"}:00`);

  return Number.isNaN(d.getTime()) ? null : d;
}

function deadlineInfo(task, now = new Date()) {
  const due = deadlineDateTime(task);

  if (!due) {
    return {
      label: "Deadline belum diatur",
      state: "normal",
      sort: Infinity
    };
  }

  const ms = due - now;

  if (task.completed) {
    return {
      label: "Selesai ♡",
      state: "done",
      sort: due.getTime()
    };
  }

  if (ms < 0) {
    return {
      label: "Terlambat",
      state: "overdue",
      sort: due.getTime()
    };
  }

  const mins = Math.ceil(ms / 60000);
  const days = Math.floor(mins / 1440);
  const hours = Math.floor((mins % 1440) / 60);
  const minutes = mins % 60;

  let label;

  if (days > 0) {
    label = `${days} hari ${hours} jam lagi`;
  } else if (hours > 0) {
    label = `${hours} jam ${minutes} menit lagi`;
  } else {
    label = `${Math.max(1, minutes)} menit lagi`;
  }

  return {
    label,
    state: ms <= 48 * 60 * 60 * 1000 ? "urgent" : "normal",
    sort: due.getTime()
  };
}

function courseNameFor(task) {
  return courses.find(c => c.id === task.courseId)?.name
    || "Mata kuliah dihapus";
}

function renderAllTasks() {
  const now = new Date();

  const list = [...tasks].sort(
    (a, b) =>
      (deadlineDateTime(a)?.getTime() ?? Infinity) -
      (deadlineDateTime(b)?.getTime() ?? Infinity)
  );

  const pending = list.filter(t => !t.completed);

  const urgent = pending.filter(t => {
    const d = deadlineDateTime(t);
    return d && d >= now && d - now <= 48 * 60 * 60 * 1000;
  }).length;

  const overdue = pending.filter(t => {
    const d = deadlineDateTime(t);
    return d && d < now;
  }).length;

  $("taskSummary").innerHTML =
    `<span>📝 ${pending.length} tugas belum selesai</span>` +
    `<span>🌷 ${urgent} deadline dalam 48 jam</span>` +
    `<span>♡ ${overdue} terlambat</span>`;

  $("allTaskList").innerHTML = list.map(t => {
    const info = deadlineInfo(t, now);

    return `<article class="all-task-card ${info.state}" style="--task-color:${t.fontColor || "#bd5d82"}">
      <div class="all-task-main">
        <input class="all-task-check" type="checkbox" data-toggle-task="${t.id}" ${t.completed ? "checked" : ""} aria-label="Tandai selesai">

        <div>
          <h3 class="all-task-title">${escapeHTML(t.name)}</h3>
          <p class="all-task-sub">${escapeHTML(courseNameFor(t))} · Deadline ${dateLabel(t.date)} pukul ${escapeHTML(t.time || "23:59")}${t.description ? `<br>${escapeHTML(t.description)}` : ""}</p>
        </div>
      </div>

      <div class="all-task-countdown">
        ${escapeHTML(info.label)}
        <small>${info.state === "overdue" ? "Periksa dan atur ulang jika diperlukan" : info.state === "urgent" ? "Segera diselesaikan ya!" : "Sisa waktu deadline"}</small>
      </div>

      <div class="all-task-actions">
        <button type="button" data-edit-task="${t.id}" title="Edit tugas">✎</button>
        <button type="button" data-delete-task="${t.id}" title="Hapus tugas">×</button>
      </div>
    </article>`;
  }).join("");

  $("allTasksEmpty").classList.toggle("hidden", list.length > 0);
}
function openAllTasks() {
  $("dashboard").classList.add("hidden");
  $("subjectPage").classList.add("hidden");
  $("allTasksPage").classList.remove("hidden");
  $("floatingAdd").classList.add("hidden");

  activeCourseId = null;

  renderAllTasks();
}

function updateDeadlineReminder() {
  const now = new Date();

  const due = tasks
    .filter(t => !t.completed)
    .map(t => ({
      task: t,
      info: deadlineInfo(t, now),
      date: deadlineDateTime(t)
    }))
    .filter(x => x.date && x.date - now <= 7 * 24 * 60 * 60 * 1000)
    .sort((a, b) => a.date - b.date);

  const banner = $("deadlineReminder");

  if (!due.length) {
    banner.classList.add("hidden");
    return;
  }

  const first = due[0];
  const total = due.length;

  $("reminderTitle").textContent =
    first.info.state === "overdue"
      ? "Ada tugas yang melewati deadline!"
      : first.info.state === "urgent"
        ? "Deadline sudah dekat!"
        : "Pengingat deadline ♡";

  $("reminderText").textContent =
    `${first.task.name} — ${first.info.label}. ${
      total > 1
        ? `Ada ${total} tugas yang perlu diperhatikan dalam 7 hari.`
        : "Jangan lupa diselesaikan ya!"
    }`;

  banner.classList.remove("hidden");
}


let pendingConfirmAction = null;

function showConfirm(message, title = "Yakin ingin menghapus?") {
  return new Promise(resolve => {
    const overlay = $("confirmOverlay");

    $("confirmTitle").textContent = title;
    $("confirmMessage").textContent = message;

    pendingConfirmAction = resolve;

    overlay.classList.remove("hidden");
    $("confirmNo").focus();
  });
}

function closeConfirm(result) {
  $("confirmOverlay").classList.add("hidden");

  if (pendingConfirmAction) {
    const resolve = pendingConfirmAction;
    pendingConfirmAction = null;
    resolve(result);
  }
}

$("confirmNo").addEventListener("click", () => closeConfirm(false));
$("confirmYes").addEventListener("click", () => closeConfirm(true));

$("confirmOverlay").addEventListener("click", e => {
  if (e.target === $("confirmOverlay")) closeConfirm(false);
});

document.addEventListener("keydown", e => {
  if (
    e.key === "Escape" &&
    !$("confirmOverlay").classList.contains("hidden")
  ) {
    closeConfirm(false);
  }
});

// Start with a few editable sample sticky notes? Keep the board empty for a clean start.
render();
renderAllTasks();
updateDeadlineReminder();

setInterval(() => {
  updateDeadlineReminder();

  if (!$("allTasksPage").classList.contains("hidden")) {
    renderAllTasks();
  }
}, 60000);

$("reminderOpenTasks").onclick = () => {
  openAllTasks();

  document.querySelectorAll("[data-nav]").forEach(el =>
    el.classList.toggle("active", el.dataset.nav === "tasks")
  );
};

$("reminderDismiss").onclick = () =>
  $("deadlineReminder").classList.add("hidden");


// Sidebar navigation actions
(function setupPinkieSidebar() {
  const body = document.body;
  const links = [...document.querySelectorAll("[data-nav]")];
  const sidebar = document.getElementById("pinkieSidebar");
  const collapse = document.getElementById("sidebarCollapse");
  const mobileToggle = document.getElementById("sidebarMobileToggle");

  function activate(name) {
    links.forEach(el =>
      el.classList.toggle("active", el.dataset.nav === name)
    );

    body.classList.remove("sidebar-mobile-open");

    if (name === "home") {
      document.getElementById("allTasksPage")?.classList.add("hidden");
      document.getElementById("subjectPage")?.classList.add("hidden");
      document.getElementById("dashboard")?.classList.remove("hidden");
      document.getElementById("floatingAdd")?.classList.remove("hidden");

      document.getElementById("dashboard")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } else if (name === "subjects") {
      document.getElementById("allTasksPage")?.classList.add("hidden");
      document.getElementById("subjectPage")?.classList.add("hidden");
      document.getElementById("dashboard")?.classList.remove("hidden");
      document.getElementById("floatingAdd")?.classList.remove("hidden");

      document.getElementById("courseGrid")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } else if (name === "tasks") {
      openAllTasks();

    } else if (name === "notes") {
      document.getElementById("allTasksPage")?.classList.add("hidden");
      document.getElementById("subjectPage")?.classList.add("hidden");
      document.getElementById("dashboard")?.classList.remove("hidden");
      document.getElementById("floatingAdd")?.classList.remove("hidden");

      document.querySelector(".notes-area")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } else if (name === "characters") {
      const galleryButton = document.getElementById("openCharacterGallery");

      if (galleryButton) {
        galleryButton.click();
      } else {
        document.getElementById("galleryModal")?.classList.remove("hidden");
      }
    }
  }

  links.forEach(el =>
    el.addEventListener("click", () => activate(el.dataset.nav))
  );

  collapse?.addEventListener("click", () => {
    body.classList.toggle("sidebar-collapsed");

    collapse.textContent = body.classList.contains("sidebar-collapsed")
      ? "⇥"
      : "⇤";
  });

  mobileToggle?.addEventListener("click", () =>
    body.classList.toggle("sidebar-mobile-open")
  );
})();
