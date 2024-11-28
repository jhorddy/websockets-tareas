const socket = io.connect();

/**
 * create una tarea
 * @param {string} title 
 * @param {string} description 
 */
const saveNote = (title, description) => {
  socket.emit("client:newnote", {
    title,
    description,
  });
};

/**
 * delete a note based on an Id
 * @param {string} id a note ID
 */
const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};

/**
 * 
 * @param {string} id 
 * @param {string} title 
 * @param {string} description 
 */
const updateNote= (id, title, description) => {
  socket.emit("client:updatenote", {
    id,
    title,
    description,
  });
};

socket.on("server:loadnotes", renderNotes);

socket.on("server:newnote", appendNote);

socket.on("server:selectednote", (note) => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  title.value = note.title;
  description.value = note.description;

  savedId = note.id;
});
